import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/resume-data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="Seven career-defining roles spanning India, Bahrain, Qatar, and the UAE."
        />
      </Reveal>

      <ol className="relative border-l border-plate-line pl-8">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.period}`} className="mb-14 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-arc-500 bg-plate" />

            <Reveal delay={(index % 3) * 100}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-steel-50">{job.role}</h3>
                <span className="font-mono text-xs text-steel-500">{job.period}</span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-arc-400">
                <span className="font-medium">{job.company}</span>
                <span className="text-steel-600">·</span>
                <span className="text-steel-400">{job.location}</span>
                <span className="text-steel-600">·</span>
                <span className="text-steel-500">{job.duration}</span>
              </div>

              {job.companyProfile ? (
                <p className="mt-3 text-sm italic leading-relaxed text-steel-500">
                  {job.companyProfile}
                </p>
              ) : null}

              {job.points.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-steel-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
