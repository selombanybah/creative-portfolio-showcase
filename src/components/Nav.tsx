import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Asterisk, DownloadSimple, List, X } from "@phosphor-icons/react";
import { BRAND, NAV_LINKS } from "../constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[#26292F] bg-[#0E0F12]/88 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2"
          aria-label="Mara Voss — back to top"
        >
          <span className="font-display text-xl font-bold tracking-tight text-[#F2F3EF] sm:text-2xl">
            {BRAND.mark}
          </span>
          <Asterisk
            size={18}
            weight="bold"
            className="text-[#D8F34F] transition-transform duration-500 group-hover:rotate-90"
            aria-hidden="true"
          />
          <span className="ml-1 hidden text-[13px] uppercase tracking-[0.22em] text-[#9BA0A8] sm:inline">
            Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-[#9BA0A8] transition-colors hover:text-[#F2F3EF]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#D8F34F] px-4 py-2 text-sm font-semibold text-[#0E0F12] transition-colors hover:bg-[#e6ff6a] active:scale-[0.98] sm:px-5"
          >
            Résumé
            <DownloadSimple size={16} weight="bold" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#26292F] text-[#F2F3EF] md:hidden"
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Sections"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#26292F] bg-[#0E0F12] md:hidden"
          >
            <ul className="mx-auto max-w-[1400px] px-5 py-3 sm:px-8">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="border-b border-[#26292F] last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 py-3.5 font-display text-2xl text-[#F2F3EF]"
                  >
                    <span className="font-mono text-[13px] text-[#D8F34F]">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}