"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About", id: "about" },
  { href: "#expertise", label: "Expertise", id: "expertise" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#credentials", label: "Credentials", id: "credentials" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-plate-line bg-plate/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="-my-2 inline-flex items-center py-2 font-mono text-sm font-semibold tracking-widest text-steel-50"
        >
          K.SK<span className="text-arc-500">/</span>
          <span className="hidden text-steel-400 sm:inline">
            {" "}
            SENTHILKUMAR
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`border-b-2 pb-0.5 text-sm transition-colors ${
                activeId === item.id
                  ? "border-arc-500 text-arc-400"
                  : "border-transparent text-steel-300 hover:text-arc-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded border border-arc-500/40 bg-arc-500/10 px-4 py-2 text-sm font-medium text-arc-400 transition-colors hover:bg-arc-500/20"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded border border-plate-line text-steel-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-4 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-plate-line px-2 py-2 md:hidden">
          <ul className="flex flex-col divide-y divide-plate-line">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3.5 text-base ${activeId === item.id ? "text-arc-400" : "text-steel-300"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="block px-4 py-3.5 text-base font-medium text-arc-400"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      ) : null}

      <div className="h-0.5 w-full bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-arc-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
