import { motion } from "framer-motion";
import { Section } from "./Section";
import { achievements } from "@/data/portfolio";
import { FiZap } from "react-icons/fi";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Highlights" title="Achievements">
      <div className="grid sm:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl grid place-items-center bg-[image:var(--gradient-brand)] text-white mb-4">
              <FiZap />
            </div>
            <p className="font-medium">{a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
