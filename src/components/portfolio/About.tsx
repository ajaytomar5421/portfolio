import { motion } from "framer-motion";
import { Section } from "./Section";
import { summary, objective, softSkills, interests } from "@/data/portfolio";
import { FiTarget, FiUser, FiStar, FiHeart } from "react-icons/fi";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A quick introduction">
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-3"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FiUser className="text-[var(--brand-blue)]" /> Professional Summary
          </div>
          <p className="text-foreground/90 leading-relaxed">{summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-3"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FiTarget className="text-[var(--brand-purple)]" /> Career Objective
          </div>
          <p className="text-foreground/90 leading-relaxed">{objective}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <FiStar className="text-[var(--brand-cyan)]" /> Soft Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <FiHeart className="text-pink-400" /> Interests
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-[image:var(--gradient-brand-soft)]"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
