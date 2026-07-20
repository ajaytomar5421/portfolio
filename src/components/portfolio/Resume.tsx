import { motion } from "framer-motion";
import { Section } from "./Section";
import { personal } from "@/data/portfolio";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Grab my Resume">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6"
      >
        <div className="w-16 h-16 rounded-2xl grid place-items-center bg-[image:var(--gradient-brand)] text-white shrink-0">
          <FiFileText size={26} />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-semibold">Prefer a one-pager?</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Download or view my resume — updated regularly with the latest work
            and skills.
          </p>
        </div>
        <div className="flex gap-3">
          <a href={personal.resumeUrl} download className="btn-primary">
            <FiDownload /> Download
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FiEye /> View
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
