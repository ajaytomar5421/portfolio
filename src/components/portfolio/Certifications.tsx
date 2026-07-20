import { motion } from "framer-motion";
import { Section } from "./Section";
import { FiAward } from "react-icons/fi";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Learning" title="Certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-10 text-center"
      >
        <div className="mx-auto w-14 h-14 grid place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-white shadow-[var(--shadow-glow)]">
          <FiAward size={22} />
        </div>
        <p className="mt-4 text-lg">Certifications will be added soon.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Actively pursuing courses in Java, Spring Boot, and full stack
          development.
        </p>
      </motion.div>
    </Section>
  );
}
