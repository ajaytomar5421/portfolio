import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks, personal } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-xl text-sm font-bold text-white bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
              AT
            </span>
            <span className="hidden sm:block font-semibold tracking-tight">
              Ajay<span className="text-gradient">.dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download
              className="hidden sm:inline-flex btn-primary text-sm !py-2 !px-4"
            >
              <FiDownload /> Resume
            </a>
            <button
              className="md:hidden grid place-items-center w-10 h-10 rounded-lg glass"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm hover:bg-white/5"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={personal.resumeUrl}
                    download
                    className="mt-2 btn-primary text-sm w-full"
                  >
                    <FiDownload /> Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
