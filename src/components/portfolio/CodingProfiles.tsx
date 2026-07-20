import { motion } from "framer-motion";
import { Section } from "./Section";
import { codingProfiles } from "@/data/portfolio";
import { FiExternalLink } from "react-icons/fi";

export function CodingProfiles() {
  return (
    <Section
      id="coding"
      eyebrow="Profiles"
      title="Coding Profiles"
      subtitle="Where you can follow my code, connect, and (soon) my problem solving journey."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {codingProfiles.map((p, i) => {
          const inner = (
            <>
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:bg-[image:var(--gradient-brand-soft)] transition-colors">
                <p.Icon size={22} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">
                  {p.available ? "View profile" : "Profile Coming Soon"}
                </div>
              </div>
              {p.available && (
                <FiExternalLink className="text-muted-foreground group-hover:text-foreground" />
              )}
            </>
          );

          const commonClass =
            "group glass rounded-2xl p-5 flex items-center gap-4 transition-all";

          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {p.available && p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${commonClass} hover:-translate-y-1`}
                >
                  {inner}
                </a>
              ) : (
                <div className={`${commonClass} opacity-70`}>{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
