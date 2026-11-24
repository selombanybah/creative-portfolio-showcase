import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import type { Project } from "../data/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function CaseStudyModal({ project, onClose, onPrev, onNext }: Props) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const open = project !== null;

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain">
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="relative flex min-h-full items-start justify-center px-3 py-6 sm:px-6 sm:py-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#26292F] bg-[#16181D] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0E0F12]/80 text-[#F2F3EF] backdrop-blur-sm transition-colors hover:border-[#D8F34F] hover:text-[#D8F34F]"
              >
                <X size={18} weight="bold" aria-hidden="true" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0E0F12]">
                <img
                  src={project.coverUrl}
                  alt={project.coverAlt}
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#16181D] via-[#16181D]/20 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="px-5 pb-8 pt-2 sm:px-9 sm:pb-10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] uppercase tracking-[0.16em] text-[#9BA0A8]">
                  <span className="text-[#D8F34F]">{project.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{project.year}</span>
                  <span aria-hidden="true">/</span>
                  <span>{project.client}</span>
                </div>

                <h3
                  id="case-study-title"
                  className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[#F2F3EF] text-balance"
                >
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[#E6E7E2]/85 text-pretty">
                  {project.summary}
                </p>

                <dl className="mt-7 grid gap-5 border-y border-[#26292F] py-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.18em] text-[#9BA0A8]">Scope</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.scope.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#26292F] bg-[#0E0F12] px-3 py-1 text-[13px] text-[#E6E7E2]"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.18em] text-[#9BA0A8]">Tools</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-[#26292F] bg-[#0E0F12] px-3 py-1 text-[13px] text-[#E6E7E2]"
                        >
                          {tool}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-5 text-[16px] leading-[1.7] text-[#E6E7E2]/85">
                  {project.description.map((paragraph, index) => (
                    <p key={index} className="text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {project.secondaryUrl && (
                  <figure className="mt-7 overflow-hidden rounded-xl border border-[#26292F]">
                    <img
                      src={project.secondaryUrl}
                      alt={project.secondaryAlt ?? `${project.title} process image`}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </figure>
                )}

                <div className="mt-7 rounded-xl border border-[#D8F34F]/35 bg-[#D8F34F]/8 p-5">
                  <p className="text-[13px] uppercase tracking-[0.18em] text-[#D8F34F]">Outcome</p>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#F2F3EF] text-pretty">
                    {project.outcome}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#26292F] pt-5">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="inline-flex items-center gap-2 rounded-full border border-[#26292F] px-4 py-2.5 text-sm text-[#E6E7E2] transition-colors hover:border-[#D8F34F]/60 hover:text-[#F2F3EF]"
                  >
                    <ArrowLeft size={16} weight="bold" aria-hidden="true" />
                    Previous project
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center gap-2 rounded-full border border-[#26292F] px-4 py-2.5 text-sm text-[#E6E7E2] transition-colors hover:border-[#D8F34F]/60 hover:text-[#F2F3EF]"
                  >
                    Next project
                    <ArrowRight size={16} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}