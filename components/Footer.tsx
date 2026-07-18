import { profile } from "@/lib/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-plate-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-steel-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono">
          Built with Next.js &amp; TypeScript
        </p>
      </div>
    </footer>
  );
}
