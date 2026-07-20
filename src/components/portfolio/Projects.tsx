import { motion } from "framer-motion";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      subtitle="Hands-on work I've built while learning full stack development. More projects coming soon."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col group hover:-translate-y-1 transition-transform"
          >
            <div className="aspect-[16/9] rounded-xl bg-[image:var(--gradient-brand-soft)] border border-white/10 mb-5 grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,white,transparent_40%)]" />
              <span className="text-4xl font-bold text-gradient relative">
                {p.title.split(" ").slice(0, 2).join(" ")}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              {p.description}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <FiCheckCircle
                    className="text-[var(--brand-cyan)] shrink-0"
                    size={14}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md border border-white/10 bg-white/5 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-sm !py-2 !px-4"
              >
                <FiGithub /> GitHub
              </a>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius)] text-sm font-semibold border border-white/10 bg-white/5 text-muted-foreground cursor-not-allowed"
              >
                <FiExternalLink /> Live Demo — Coming Soon
              </button>
            </div>
          </motion.article>
        ))}

        {/* Placeholder for future projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center border-dashed min-h-[320px]"
          style={{ borderStyle: "dashed" }}
        >
          <div className="w-14 h-14 rounded-2xl grid place-items-center bg-[image:var(--gradient-brand-soft)] mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-lg font-semibold">More projects coming soon</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Currently building new full stack projects with Spring Boot, React,
            and REST APIs.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
