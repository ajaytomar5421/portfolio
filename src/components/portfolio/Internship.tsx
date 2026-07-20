import { motion } from "framer-motion";
import { Section } from "./Section";
import { internship } from "@/data/portfolio";
import { FiBriefcase, FiClock } from "react-icons/fi";

export function Internship() {
  return (
    <Section id="internship" eyebrow="Experience" title="Internship">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="grid place-items-center w-12 h-12 rounded-xl bg-[image:var(--gradient-brand)] text-white shrink-0">
            <FiBriefcase size={22} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{internship.company}</h3>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <FiClock /> {internship.duration}
              </span>
            </div>
            <p className="mt-3 text-foreground/90 leading-relaxed">
              {internship.description}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
