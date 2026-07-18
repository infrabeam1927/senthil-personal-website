import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  BadgeIcon,
  ClipboardIcon,
  CompassIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
  SparkIcon,
  ThermometerIcon,
  TorchIcon,
  TrendingUpIcon,
  WrenchIcon,
} from "@/components/icons";
import { keyExpertise, standards, weldingProcesses } from "@/lib/resume-data";

const keyExpertiseIcons = [
  CompassIcon,
  ShieldCheckIcon,
  TorchIcon,
  SparkIcon,
  WrenchIcon,
  ThermometerIcon,
  SearchCheckIcon,
  ClipboardIcon,
  TrendingUpIcon,
  BadgeIcon,
];

export default function Expertise() {
  return (
    <section id="expertise" className="border-t border-plate-line bg-plate-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            index="02"
            title="Expertise"
            subtitle="Core competencies developed across manufacturing, repair, and quality leadership roles."
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {keyExpertise.map((item, index) => {
            const Icon = keyExpertiseIcons[index % keyExpertiseIcons.length];
            return (
              <Reveal key={item} delay={(index % 6) * 60}>
                <div className="flex items-center gap-4 rounded-lg border border-plate-line bg-plate p-4 transition-colors hover:border-arc-500/40">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-arc-500/10 p-2 text-arc-400">
                    <Icon />
                  </span>
                  <span className="text-sm leading-relaxed text-steel-200">{item}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel-500">
              Welding Processes
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {weldingProcesses.map((process) => (
                <span
                  key={process}
                  className="rounded-full border border-plate-line px-3 py-1.5 text-xs text-steel-300 transition-colors hover:border-arc-500/50 hover:text-arc-300"
                >
                  {process}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel-500">
              Codes & Standards
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {standards.map((standard) => (
                <span
                  key={standard}
                  className="rounded-full border border-arc-500/30 bg-arc-500/5 px-3 py-1.5 font-mono text-xs text-arc-400 transition-colors hover:border-arc-500/60 hover:bg-arc-500/10"
                >
                  {standard}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
