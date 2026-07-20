import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/data/portfolio";

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? pause : deleting ? speed / 2 : speed;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(personal.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-10 w-80 h-80 rounded-full bg-[var(--brand-blue)]/25 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[var(--brand-purple)]/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-[var(--brand-cyan)]/15 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to full-time opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </h1>

          <div className="text-xl sm:text-2xl text-muted-foreground min-h-[2.5rem]">
            <span className="text-foreground">{typed}</span>
            <span className="inline-block w-[2px] h-6 bg-[var(--brand-blue)] align-middle ml-1 animate-caret" />
          </div>

          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Computer Science graduate building modern full stack web
            applications with{" "}
            <span className="text-foreground">
              Java, Spring Boot, and React
            </span>
            . Focused on clean code, thoughtful UI, and continuous learning.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={personal.resumeUrl} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 text-muted-foreground">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-foreground hover:-translate-y-1 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-foreground hover:-translate-y-1 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="grid place-items-center w-11 h-11 rounded-xl glass hover:text-foreground hover:-translate-y-1 transition-all"
            >
              <FiMail size={20} />
            </a>
            <span className="hidden sm:inline-flex items-center gap-2 text-xs">
              <FiMapPin /> Noida, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-floaty">
            <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-60 blur-2xl" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass-strong p-2">
              <img
                src={personal.profileImg}
                alt={`${personal.name} portrait`}
                width={1024}
                height={1024}
                className="w-full h-full object-cover rounded-[1.6rem]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl text-xs">
              <span className="text-gradient font-semibold">CGPA 8.03</span> ·
              B.Tech CSE
            </div>
            <div className="absolute -top-4 -left-4 glass px-4 py-2 rounded-xl text-xs">
              Java · Spring · React
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
