"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useWords } from "./FormaSourceGraphic";

const width = 2880;
const height = 1920;

export function FormaInterface({ src, label, preview, previewContent, toggleMotion, overlay, dialogControls, loading }: {
  src: string;
  label: string;
  previewContent?: ReactNode;
  loading?: "lazy" | "eager";
  preview?: { active: boolean; desktop: string; phone: string; still: string };
  toggleMotion?: () => void;
  overlay?: ReactNode;
  dialogControls?: ReactNode;
}) {
  const t = useWords();
  const [open, setOpen] = useState(false);
  const [nativeWidth, setNativeWidth] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const el = dialog.current;
    const opener = trigger.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    el?.showModal();
    return () => {
      el?.close();
      document.body.style.overflow = previous;
      opener?.focus({ preventScroll: true });
    };
  }, [open]);

  function toggleSize(x = .5, y = .5) {
    if (nativeWidth) {
      setNativeWidth(null);
      return;
    }
    const size = width / window.devicePixelRatio;
    setNativeWidth(size);
    requestAnimationFrame(() => {
      const area = viewport.current;
      if (area) area.scrollTo(size * x - area.clientWidth / 2, size * height / width * y - area.clientHeight / 2);
    });
  }

  const animatePreview = preview?.active && !open;
  const fitPreview = preview && nativeWidth === null;
  const fitMotion = fitPreview && src.endsWith(".gif");
  return <>
    <button type="button" ref={trigger} className="forma-interface-preview" aria-haspopup="dialog"
      aria-label={`${t("放大完整界面", "Enlarge full interface")} · ${label}`}
      onClick={() => { setNativeWidth(null); setOpen(true); }}>
      {previewContent ?? <picture>
        {preview && animatePreview && <source media="(max-width: 640px)" srcSet={preview.phone} />}
        <Image src={preview ? (animatePreview ? preview.desktop : preview.still) : src}
          alt={label} width={width} height={height} unoptimized loading={loading} />
      </picture>}
      {overlay}
      <span className="forma-interface-enlarge" aria-hidden="true">⤢</span>
    </button>
    {open && <dialog ref={dialog} className="forma-source-dialog forma-interface-dialog" aria-label={label}
      onCancel={e => { e.preventDefault(); setOpen(false); }}>
      <header><h2>{label}</h2><div className="forma-source-dialog__actions">
        <button type="button" aria-pressed={nativeWidth !== null} onClick={() => toggleSize()}>{nativeWidth ? t("适应窗口", "Fit to window") : t("原始像素", "Actual pixels")}</button>
        {toggleMotion && <button type="button" onClick={toggleMotion}>{src.endsWith(".gif") ? t("查看静帧", "View still") : t("播放循环 GIF", "Play looping GIF")}</button>}
        <button type="button" onClick={() => setOpen(false)}>{t("关闭", "Close")} ×</button>
      </div></header>
      <div ref={viewport} className="forma-interface-viewport" tabIndex={0} aria-label={t("完整界面，可滚动查看", "Scrollable full interface")}>
        <button type="button" className="forma-interface-magnifier" data-native={nativeWidth !== null}
          style={nativeWidth ? {width: nativeWidth} : undefined}
          aria-label={nativeWidth ? t("适应窗口", "Fit to window") : t("放大此处", "Magnify this area")}
          onClick={e => {
            const box = e.currentTarget.getBoundingClientRect();
            if (e.detail) toggleSize((e.clientX - box.left) / box.width, (e.clientY - box.top) / box.height);
            else toggleSize();
          }}>
          <picture>
            {fitMotion && <source media="(max-width: 640px)" srcSet={preview.phone} />}
            <Image src={fitPreview ? (fitMotion ? preview.desktop : preview.still) : src}
              alt={label} width={width} height={height} unoptimized loading="eager" />
          </picture>
          {overlay}
        </button>
      </div>
      {dialogControls}
    </dialog>}
  </>;
}
