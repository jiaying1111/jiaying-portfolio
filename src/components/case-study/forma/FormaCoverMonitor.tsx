import Image from "next/image";
import { FormaInterface } from "./FormaInterface";

export function FormaCoverMonitor({ src, label }: { src: string; label: string }) {
  return (
    <FormaInterface
      src={src}
      label={label}
      previewContent={
        <span className="forma-monitor">
          <Image
            className="forma-monitor__frame"
            src="/images/projects/forma/story/hero-monitor.png"
            width={1536}
            height={1024}
            sizes="(max-width: 699px) 94vw, (max-width: 899px) 650px, (max-width: 1216px) 65vw, 760px"
            alt=""
            loading="eager"
          />
          <svg width="0" height="0" aria-hidden="true" focusable="false" className="forma-monitor__mask">
            <defs>
              <clipPath id="forma-monitor-glass" clipPathUnits="objectBoundingBox">
                {/* Inner bezel and the edges of the two cards in front of the glass,
                    traced in the original mockup's 1536 × 1024 coordinates. */}
                <path transform="scale(0.0006510416667 0.0009765625)" d="
                  M 407 175 L 1426 37 Q 1444 34 1444 53 L 1426 865
                  Q 1426 884 1408 884 L 482 871 L 501 791 Q 511 754 475 746
                  L 380 733 L 405 617 Q 418 578 380 569 L 351 565
                  L 392 191 Q 393 177 407 175 Z
                " />
              </clipPath>
            </defs>
          </svg>
          <span className="forma-monitor__glass" style={{ clipPath: "url(#forma-monitor-glass)" }}>
            <Image className="forma-monitor__workspace" src={src} alt={label}
              width={2880} height={1920} loading="eager" unoptimized />
          </span>
        </span>
      }
    />
  );
}
