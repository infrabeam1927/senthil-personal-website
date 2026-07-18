import SectionHeading from "@/components/SectionHeading";
import { keyExpertise, standards, weldingProcesses } from "@/lib/resume-data";

export default function Expertise() {
  return (
    <section id="expertise" className="border-t border-plate-line bg-plate-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="02"
          title="Expertise"
          subtitle="Core competencies developed across manufacturing, repair, and quality leadership roles."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {keyExpertise.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-plate-line bg-plate p-4"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-arc-500" />
              <span className="text-sm leading-relaxed text-steel-200">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel-500">
              Welding Processes
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {weldingProcesses.map((process) => (
                <span
                  key={process}
                  className="rounded-full border border-plate-line px-3 py-1.5 text-xs text-steel-300"
                >
                  {process}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel-500">
              Codes & Standards
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {standards.map((standard) => (
                <span
                  key={standard}
                  className="rounded-full border border-arc-500/30 bg-arc-500/5 px-3 py-1.5 font-mono text-xs text-arc-400"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
