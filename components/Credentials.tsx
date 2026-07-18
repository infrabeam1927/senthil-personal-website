import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education } from "@/lib/resume-data";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="border-t border-plate-line bg-plate-raised/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            index="04"
            title="Credentials"
            subtitle="Formal education and industry certifications underpinning the technical practice."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal delay={80} className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel-500">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="rounded-lg border border-plate-line bg-plate p-5 transition-colors hover:border-arc-500/40"
                >
                  <p className="font-semibold text-steel-100">{item.degree}</p>
                  <p className="mt-1 text-sm text-steel-400">{item.institution}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel-500">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 rounded-lg border border-plate-line bg-plate p-4 text-sm leading-relaxed text-steel-300 transition-colors hover:border-arc-500/40"
                >
                  <CertIcon />
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-arc-500"
      aria-hidden="true"
    >
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
