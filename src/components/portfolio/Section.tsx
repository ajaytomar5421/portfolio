import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient">
                  {" "}
                  {w}
                </span>
              ) : (
                <span key={i}>
                  {i === 0 ? "" : " "}
                  {w}
                </span>
              ),
            )}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
