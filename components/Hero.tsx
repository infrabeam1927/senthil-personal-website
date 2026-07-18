import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/resume-data";

const stats = [
  { label: "Years Experience", target: 25, suffix: "+" },
  { label: "Years International (Middle East)", target: 15, suffix: "" },
  { label: "Companies Led", target: 8, suffix: "" },
  { label: "API / ASME / AWS Standards", target: 15, suffix: "+" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-plate-line">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-arc-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-arc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-weld-pulse rounded-full bg-arc-500" />
            </span>
            AVAILABLE FOR TECHNICAL LEADERSHIP ROLES
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-steel-50 sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl text-balance text-xl text-steel-300 sm:text-2xl">
            {profile.title} <span className="text-steel-500">—</span>{" "}
            {profile.tagline}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-400">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-steel-400">
            <span className="inline-flex items-center gap-2">
              <LocationIcon /> {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-plate-line sm:inline-block" />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-arc-400"
            >
              <MailIcon /> {profile.email}
            </a>
            <span className="hidden h-4 w-px bg-plate-line sm:inline-block" />
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-arc-400"
            >
              <PhoneIcon /> {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded bg-arc-500 px-6 py-3 text-sm font-semibold text-plate transition-colors hover:bg-arc-400"
            >
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-plate-line px-6 py-3 text-sm font-semibold text-steel-100 transition-colors hover:border-arc-500/50 hover:text-arc-400"
            >
              View LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded border border-plate-line px-6 py-3 text-sm font-semibold text-steel-100 transition-colors hover:border-arc-500/50 hover:text-arc-400"
            >
              Download CV
            </a>
          </div>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-plate-line pt-10 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={380 + index * 80}>
              <dt className="text-xs uppercase tracking-widest text-steel-500">
                {stat.label}
              </dt>
              <dd className="mt-2 font-mono text-3xl font-semibold text-steel-50">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M6.6 10.5c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.5 20 4 13.5 4 5.9c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
