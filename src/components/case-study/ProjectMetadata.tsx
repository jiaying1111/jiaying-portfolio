type ProjectMetadataProps = {
  items: { label: string; value: string }[];
};

export function ProjectMetadata({ items }: ProjectMetadataProps) {
  return (
    <dl className="case-meta">
      {items.map((item) => (
        <div key={item.label} className="case-meta__row">
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
