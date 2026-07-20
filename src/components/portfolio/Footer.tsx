import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {year} {personal.name}. Built with React, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-10 h-10 rounded-xl glass hover:-translate-y-1 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-10 h-10 rounded-xl glass hover:-translate-y-1 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="grid place-items-center w-10 h-10 rounded-xl glass hover:-translate-y-1 transition-all"
          >
            <FiMail />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[image:var(--gradient-brand)] text-white text-sm font-semibold hover:-translate-y-1 transition-all"
          >
            <FiArrowUp /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
