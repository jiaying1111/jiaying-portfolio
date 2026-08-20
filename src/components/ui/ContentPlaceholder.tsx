import { joinClassNames } from "@/lib/utils";

type ContentPlaceholderProps = {
  field: string;
  as?: "p" | "span" | "div";
  className?: string;
};

export function ContentPlaceholder({
  field,
  as: Tag = "p",
  className,
}: ContentPlaceholderProps) {
  return (
    <Tag className={joinClassNames("content-placeholder", className)}>
      Content not yet provided: {field}
    </Tag>
  );
}
