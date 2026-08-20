import { joinClassNames } from "@/lib/utils";

type PageSectionProps = {
  id?: string;
  title?: string;
  frameId?: string;
  children: React.ReactNode;
  className?: string;
};

export function PageSection({
  id,
  title,
  frameId,
  children,
  className,
}: PageSectionProps) {
  return (
    // TODO: replace from Figma
    <section
      id={id}
      data-figma-node={frameId}
      className={joinClassNames("page-section", className)}
    >
      {title ? <h2 className="page-section__title">{title}</h2> : null}
      {children}
    </section>
  );
}
