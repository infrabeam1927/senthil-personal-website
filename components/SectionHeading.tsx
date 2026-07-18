type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-start gap-4">
      <span className="section-heading-number pt-1 text-sm tracking-widest">{index}</span>
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-steel-50 sm:text-3xl">
            {title}
          </h2>
          <span className="h-px flex-1 bg-plate-line" aria-hidden="true" />
        </div>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm text-steel-400">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
