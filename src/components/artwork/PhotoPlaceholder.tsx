import { joinClassNames } from "@/lib/utils";

type PhotoPlaceholderProps = {
  nodeId: string;
  width: number;
  height: number;
  alt: string;
  src?: string;
  className?: string;
};

export function PhotoPlaceholder({
  nodeId,
  width,
  height,
  alt,
  src,
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      role={src ? undefined : "img"}
      aria-label={src ? undefined : alt}
      data-figma-node={nodeId}
      className={joinClassNames("artwork-photo", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {src ? (
        // Path-only swap later: keep this frame size unchanged.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} width={width} height={height} />
      ) : null}
    </div>
  );
}
