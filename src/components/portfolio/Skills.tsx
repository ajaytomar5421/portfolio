import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Technical Skills"
      subtitle="Technologies and tools I use to build reliable, modern web applications."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--brand-blue)_50%,transparent)] transition-all"
          >
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map(({ name, Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5"
                >
                  <Icon size={20} style={{ color }} />
                  <span className="text-sm">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
