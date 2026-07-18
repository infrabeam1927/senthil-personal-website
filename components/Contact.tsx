import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/resume-data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-2xl border border-plate-line bg-plate-raised p-8 sm:p-12">
          <h3 className="text-balance text-2xl font-semibold text-steel-50 sm:text-3xl">
            Open to technical leadership, welding engineering, and quality
            management opportunities.
          </h3>
          <p className="mt-4 max-w-2xl text-steel-400">
            Reach out directly — I typically respond within a business day.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-lg border border-plate-line bg-plate p-5 transition-all hover:-translate-y-0.5 hover:border-arc-500/50"
            >
              <p className="text-xs uppercase tracking-widest text-steel-500">Email</p>
              <p className="mt-2 break-words font-mono text-sm text-steel-100 group-hover:text-arc-400">
                {profile.email}
              </p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group rounded-lg border border-plate-line bg-plate p-5 transition-all hover:-translate-y-0.5 hover:border-arc-500/50"
            >
              <p className="text-xs uppercase tracking-widest text-steel-500">Phone</p>
              <p className="mt-2 font-mono text-sm text-steel-100 group-hover:text-arc-400">
                {profile.phone}
              </p>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-plate-line bg-plate p-5 transition-all hover:-translate-y-0.5 hover:border-arc-500/50"
            >
              <p className="text-xs uppercase tracking-widest text-steel-500">LinkedIn</p>
              <p className="mt-2 break-words font-mono text-sm text-steel-100 group-hover:text-arc-400">
                {profile.linkedinLabel}
              </p>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
