import { motion } from "framer-motion";
import { Section } from "./Section";
import { education } from "@/data/portfolio";
import { FiCalendar, FiAward } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="relative border-l border-white/10 pl-8 space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[43px] top-4 grid place-items-center w-9 h-9 rounded-full bg-[image:var(--gradient-brand)] text-white shadow-[var(--shadow-glow)]">
              <FaGraduationCap />
            </span>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{e.degree}</h3>
              <p className="text-muted-foreground">{e.field}</p>
              <p className="mt-2 text-foreground/90">{e.school}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <FiCalendar /> {e.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiAward className="text-[var(--brand-cyan)]" /> {e.detail}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
