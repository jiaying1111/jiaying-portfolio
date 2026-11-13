"use client";

import Image from "next/image";
import { createElement, memo, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import layoutData from "@/data/forma-source/layout.json";
import revisionMedia from "@/data/forma-source/revision-media.json";
import englishLabels from "@/data/forma-source/source-english.json";
import assetData from "@/data/forma-source/assets.json";
import { formaCanvasLayers } from "@/data/forma-source/content";
import { useLocale } from "@/i18n/LocaleProvider";

type SourceNode = string | number | { tag: string; props: Record<string, unknown>; children: SourceNode[] };
type SourceBoard = { id: string; number: string; name: string; tree: SourceNode };
type RenderState = { focus?: string; contracted?: boolean; wipe?: number; onWipe?: (value: number) => void; onLayerFocus?: (id: string) => void; zh?: boolean };
const sourceEnglish: Record<string, string> = englishLabels;
const boards = layoutData as unknown as SourceBoard[];
const assets: Record<string, { width: number; height: number }> = {
  ...assetData,
  ...Object.fromEntries(Object.entries(revisionMedia).map(([name, size]) => [`/images/projects/forma/revision/${name}`, size])),
};

/** Native Figma text, geometry, vectors and fills; no HTML injection or board images. */
const SourceTree = memo(function SourceTree({ node, state = {} }: { node: SourceNode; state?: RenderState }) {
  if (typeof node !== "object") return typeof node === "string" && state.zh === false ? sourceEnglish[node.trim()] ?? node : node;
  const { tag, props, children } = node;
  const part = props["data-source-part"] as string | undefined;
  const layer = formaCanvasLayers.find(item => item.id === part);
  const style = { ...(props.style as CSSProperties | undefined) };
  let className = (props.className as string | undefined) ?? "";
  if (layer) {
    className += " forma-exploded-layer";
    if (state.focus && state.focus !== part) className += " is-dimmed";
    if (state.focus === part) className += " is-selected";
    if (state.contracted) {
      const [x, y, scale] = layer.target;
      style.left = x;
      style.top = y;
      style.transform = `matrix(${.984807789 * scale},${-.173648193 * scale},${.29237172 * scale},${.956304789 * scale},0,0)`;
    }
  }
  // The annotations remain separate source elements; contract them with their linked layers.
  if (state.contracted && part && !layer && !["781:2082", "781:4524", "781:2080", "781:2081"].includes(part)) {
    style.opacity = 0;
    style.pointerEvents = "none";
  }
  if (tag === "img") {
    const src = props.src as string;
    const dimensions = assets[src] ?? (src.startsWith("/images/projects/forma/evidence/") ? { width: 1440, height: 960 } : undefined);
    if (!dimensions) return null;
    return <Image src={src} alt={props.alt as string || ""} width={Math.ceil(dimensions.width)} height={Math.ceil(dimensions.height)}
      className={className} style={style} sizes="(max-width: 760px) 100vw, 900px" unoptimized={src.endsWith(".svg") || src.startsWith("/images/projects/forma/evidence/")} />;
  }
  const nodeId = props["data-node-id"];
  // The wrapper combines the source's four translucent base copies into one subtree.
  if (nodeId === "781:2082") style.opacity = 1;
  if (state.wipe != null) {
    const position = 306 * state.wipe / 100;
    if (nodeId === "781:4658") { style.left = position - 2.13; style.width = 306 - position; }
    if (nodeId === "781:4659") style.left = -position;
    if (nodeId === "781:4660") style.left = position - 3.19;
    if (nodeId === "781:4661") style.left = position - 23.37;
  }
  const nativeProps: Record<string, unknown> = { ...props, className, style };
  if (layer && state.onLayerFocus) {
    const activate = () => state.onLayerFocus?.(layer.id);
    nativeProps.onPointerMove = (event: PointerEvent<HTMLDivElement>) => { if (event.pointerType === "mouse" && (event.movementX || event.movementY)) activate(); };
    nativeProps.role = "button";
    nativeProps.tabIndex = 0;
    nativeProps["aria-label"] = state.zh ? `聚焦图层：${layer.zh}` : `Focus layer: ${layer.en}`;
    nativeProps["aria-pressed"] = state.focus === layer.id;
    nativeProps.onClick = activate;
    nativeProps.onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
    };
  }
  if (nodeId === "781:4656" && state.onWipe) {
    nativeProps.className = className + " forma-version-wipe-target";
    const move = (event: PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      state.onWipe?.(Math.round(Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100))));
    };
    nativeProps.onPointerDown = (event: PointerEvent<HTMLDivElement>) => { event.currentTarget.setPointerCapture(event.pointerId); move(event); };
    nativeProps.onPointerMove = (event: PointerEvent<HTMLDivElement>) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) move(event); };
    nativeProps.onPointerUp = (event: PointerEvent<HTMLDivElement>) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); };
  }
  if (tag === "a") { nativeProps.target = "_blank"; nativeProps.rel = "noreferrer"; }
  return createElement(tag, nativeProps, children.map((child, i) => <SourceTree key={i} node={child} state={state} />));
});

type ViewBox = readonly [x: number, y: number, width: number, height: number];
type DiagramSpec = { tree: SourceNode; box: ViewBox; label: string; state?: RenderState; readable?: boolean };

export function useWords() {
  const { locale } = useLocale();
  return (zh: string, en: string) => locale === "zh" ? zh : en;
}

const sourceNodes = new Map<string, SourceNode>();
function indexSource(node: SourceNode) {
  if (typeof node !== "object") return;
  const id = node.props["data-node-id"] as string | undefined;
  if (id && !sourceNodes.has(id)) sourceNodes.set(id, node);
  node.children.forEach(indexSource);
}
boards.forEach(board => indexSource(board.tree));

export function sourceNode(id: string): SourceNode {
  const node = sourceNodes.get(id);
  if (!node) throw new Error(`Missing original Forma element: ${id}`);
  return node;
}

function isBoardDecoration(node: SourceNode): boolean {
  if (typeof node !== "object") return false;
  const name = String(node.props["data-name"] ?? "");
  if (/^页首|^Ambient|^Reference motif|^背景大字/.test(name)) return true;
  if (node.props["data-source-part"] === "781:4524") return true;
  if (node.tag === "p" && node.children.length === 1 && /^[\u4e00-\u9fff]$/.test(String(node.children[0]))) return true;
  return node.children.length === 1 && isBoardDecoration(node.children[0]);
}

/** Keep the diagram's own nodes and edges; omit the presentation-board shell. */
export function diagramTree(number: number, omit: string[] = []): SourceNode {
  const root = boards[number - 1].tree;
  if (typeof root !== "object") return root;
  return { tag: "div", props: { style: { position: "relative", width: "100%", height: "100%", backgroundColor: "var(--canvas)" } }, children: root.children.filter(node =>
    !isBoardDecoration(node) && !(typeof node === "object" && omit.includes(String(node.props["data-node-id"] ?? node.props["data-source-part"])))) };
}

export function fragment(id: string, width: number, height: number): SourceNode {
  const node = sourceNode(id);
  if (typeof node !== "object") return node;
  return { ...node, props: { ...node.props, style: { ...(node.props.style as CSSProperties), position: "relative", left: 0, top: 0, width, height } } };
}

function DiagramCanvas({ spec, zoom }: { spec: DiagramSpec; zoom?: number }) {
  const container = useRef<HTMLDivElement>(null);
  const [x, y, width, height] = spec.box;
  const {locale} = useLocale();
  useEffect(() => {
    const element = container.current;
    if (!element || zoom != null) return;
    const resize = () => element.style.setProperty("--forma-diagram-scale", String(element.clientWidth / width));
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, [width, zoom]);
  return <div ref={container} className="forma-web-diagram__viewport" style={{ "--forma-figure-ratio": width / height, aspectRatio: `${width} / ${height}`, ...(zoom != null ? { width: width * zoom, height: height * zoom } : {}) } as CSSProperties}>
    <div className="forma-source-layout" style={{ width, height, transform: `scale(${zoom ?? "var(--forma-diagram-scale, .6)"})` }}>
      <div className="forma-web-diagram__offset" style={{ left: -x, top: -y, width: 1920, height: 1080 }}><SourceTree node={spec.tree} state={{...spec.state, zh: locale === "zh"}} /></div>
    </div>
  </div>;
}

function DiagramDialog({ spec, onClose }: { spec: DiagramSpec; onClose: () => void }) {
  const t = useWords();
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(1);
  const [fit, setFit] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  const [, , width, height] = spec.box;
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    const fitImage = () => {
      const area = viewport.current;
      if (!area) return;
      const scale = Math.min(area.clientWidth / width, area.clientHeight / height, 2);
      setFit(scale);
      setZoom(spec.readable ? Math.max(scale, .88) : scale);
    };
    fitImage();
    window.addEventListener("resize", fitImage);
    return () => { window.removeEventListener("resize", fitImage); element?.close(); document.body.style.overflow = overflow; previousFocus?.focus({ preventScroll: true }); };
  }, [width, height, spec.readable]);
  return <dialog ref={dialog} className="forma-source-dialog" aria-labelledby="forma-diagram-detail-title" onCancel={event => { event.preventDefault(); onClose(); }}>
    <header><h2 id="forma-diagram-detail-title">{spec.label}</h2><div className="forma-source-dialog__actions">
      <button type="button" aria-label={t("缩小", "Zoom out")} disabled={zoom <= fit} onClick={() => setZoom(value => Math.max(fit, +(value - .2).toFixed(1)))}>−</button>
      <output aria-live="polite">{Math.round(zoom * 100)}%</output>
      <button type="button" aria-label={t("放大", "Zoom in")} disabled={zoom >= 4} onClick={() => setZoom(value => Math.min(4, +(value + .2).toFixed(1)))}>+</button>
      <button type="button" onClick={onClose}>{t("关闭", "Close")} ×</button>
    </div></header>
    <p className="forma-source-dialog__hint">{t("滚动查看图解细节；按 Esc 返回正文。", "Scroll to inspect the diagram. Press Esc to return to the story.")}</p>
    <div ref={viewport} className="forma-source-dialog__scroll" tabIndex={0} aria-label={t("图解细节，可滚动", "Scrollable diagram detail")}><DiagramCanvas spec={spec} zoom={zoom} /></div>
  </dialog>;
}

export function Diagram({ spec, detail = spec, caption, inspect = true, className = "" }: { spec: DiagramSpec; detail?: DiagramSpec; caption?: string; inspect?: boolean; className?: string }) {
  const t = useWords();
  const [open, setOpen] = useState(false);
  return <figure className={`forma-web-diagram ${className}`} aria-label={spec.label}>
    {spec.readable ? <button type="button" className="forma-map-enlarge" aria-label={`${t("放大原图", "Enlarge original diagram")} · ${spec.label}`} onClick={() => setOpen(true)}><DiagramCanvas spec={spec} /></button> : <DiagramCanvas spec={spec} />}
    {(caption || inspect) && <figcaption>{caption && <span>{caption}</span>}{inspect && spec.readable && <span className="forma-map-open-label">{t("点开原图，放大查看分支","Open the diagram to read each branch")} ↗</span>}{inspect && !spec.readable && <button type="button" onClick={() => setOpen(true)} aria-label={`${t("放大图解", "Inspect diagram")}: ${spec.label}`}>{t("查看细节", "Inspect details")} ↗</button>}</figcaption>}
    {open && <DiagramDialog spec={detail} onClose={() => setOpen(false)} />}
  </figure>;
}

export function Fragment({ id, width, height, label, caption, inspect = false }: { id: string; width: number; height: number; label: string; caption?: string; inspect?: boolean }) {
  return <Diagram spec={{ tree: fragment(id, width, height), box: [0, 0, width, height], label }} caption={caption} inspect={inspect} />;
}

export function OriginalAsset({ id, alt, className = "", priority = false, sizes = "(max-width: 760px) 100vw, 640px" }: { id: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  function imageIn(node: SourceNode): string | undefined {
    if (typeof node !== "object") return;
    if (node.tag === "img") return node.props.src as string;
    for (const child of node.children) { const src = imageIn(child); if (src) return src; }
  }
  const src = imageIn(sourceNode(id))!;
  const dimensions = assets[src];
  return <Image src={src} alt={alt} width={Math.ceil(dimensions.width)} height={Math.ceil(dimensions.height)} className={className} sizes={sizes} priority={priority} />;
}

export function DemoEvidence({ name, label, crop }: { name: string; label: string; crop?: ViewBox }) {
  const { locale } = useLocale();
  const src = `/images/projects/forma/evidence/${name}-${locale}.png`;
  const full: DiagramSpec = {
    label,
    box: [0, 0, 1440, 960],
    tree: {tag: "img", props: {src, alt: label, style: {display:"block", width:1440, height:960, maxWidth:"none"}}, children: []},
  };
  return <div data-forma-evidence={name}><Diagram spec={crop ? {...full,box:crop} : full} detail={full} /></div>;
}

export function RevisionFigure({ asset, label, readable = false }: { asset: string; label: string; readable?: boolean }) {
  const src = `/images/projects/forma/revision/${asset}`;
  const { width, height } = assets[src];
  const spec: DiagramSpec = { label, readable, box: [0, 0, width, height],
    tree: { tag: "img", props: {src, alt: label, style: {display: "block", width, height, maxWidth: "none"}}, children: [] },
  };
  return <Diagram spec={spec} className="forma-original-figure" />;
}
