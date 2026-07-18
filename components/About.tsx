import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/resume-data";

const focusAreas = [
  {
    title: "Quality Systems",
    detail: "API Q1 / Q2 QMS ownership, ISO 9001/14001/45001, management representative for multi-site operations.",
  },
  {
    title: "Welding Engineering",
    detail: "WPS/PQR/WPQ development and qualification per ASME Section IX, API, and NACE for critical pressure equipment.",
  },
  {
    title: "Manufacturing & Repair",
    detail: "Remanufacturing of valves, wellheads, X-mas trees, BOPs, risers, and drilling tools for onshore & offshore service.",
  },
  {
    title: "Audit & Compliance",
    detail: "Lead Auditor for internal and third-party audits; vendor development and subcontractor management.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" subtitle={`Based in ${profile.location}`} />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal delay={80} className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-steel-200">{profile.summary}</p>
          <p className="mt-5 leading-relaxed text-steel-400">{profile.summarySecondary}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={140 + index * 80}>
              <div className="h-full rounded-lg border border-plate-line bg-plate-raised p-5 transition-colors hover:border-arc-500/40">
                <h3 className="font-mono text-sm font-semibold text-arc-400">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {area.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
