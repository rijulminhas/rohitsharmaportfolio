type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft sm:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}
