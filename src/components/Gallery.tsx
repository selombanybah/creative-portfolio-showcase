import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CATEGORIES, projects } from "../data/projects";
import type { Category, Project } from "../data/projects";

type Filter = "All" | Category;

const ASPECT: Record<Project["aspect"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = { onOpen: (project: Project) => void };

export default function Gallery({ onOpen }: Props) {
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const counts = useMemo(() => {
    const base: Record<string, number> = { All: projects.length };
    for (const category of CATEGORIES) {
      base[category] = projects.filter((p) => p.category === category).length;
    }
    return base;
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const filters: Filter[] = ["All", ...CATEGORIES];

  return (
    <section id="work" className="border-b border-[#26292F] bg-[#0E0F12] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 border-b border-[#26292F] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-[#9BA0A8]">
              <span className="text-[#D8F34F]">01</span> Selected work
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.03] text-[#F2F3EF] text-balance">
              Eight projects, in the order I would show them.
            </h2>
          </div>
          <p className="max-w-sm text-[16px] leading-relaxed text-[#9BA0A8] text-pretty">
            Identity, product, motion and photography for food co-ops, data companies and a film
            festival. Open any card for the full case study.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
          {filters.map((option) => {
            const active = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-[#D8F34F] bg-[#D8F34F] font-semibold text-[#0E0F12]"
                    : "border-[#26292F] bg-[#16181D] text-[#9BA0A8] hover:border-[#D8F34F]/50 hover:text-[#F2F3EF]"
                }`}
              >
                {option}
                <span className={active ? "ml-2 text-[#0E0F12]/60" : "ml-2 text-[#9BA0A8]/70"}>
                  {counts[option]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-9 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence initial={false}>
            {visible.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => onOpen(project)}
                aria-label={`Open case study: ${project.title}, ${project.client}, ${project.year}`}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  ease: EASE,
                  delay: reduce ? 0 : Math.min(index * 0.05, 0.3),
                }}
                whileHover={reduce ? undefined : { y: -6 }}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-[#26292F] bg-[#16181D] text-left shadow-[0_18px_40px_-32px_rgba(0,0,0,0.9)] transition-colors hover:border-[#D8F34F]/60 focus-visible:border-[#D8F34F]"
              >
                <span className={`relative block overflow-hidden ${ASPECT[project.aspect]}`}>
                  <img
                    src={project.coverUrl}
                    alt={project.coverAlt}
                    width={1000}
                    height={project.aspect === "tall" ? 1300 : 750}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-[#0E0F12]/80 px-3 py-1 text-[13px] font-medium uppercase tracking-[0.12em] text-[#D8F34F] backdrop-blur-sm">
                    {project.category}
                  </span>
                </span>

                <span className="flex items-end justify-between gap-4 p-4 sm:p-5">
                  <span className="min-w-0">
                    <span className="block font-display text-xl font-semibold leading-tight text-[#F2F3EF]">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-sm text-[#9BA0A8]">{project.client}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-sm text-[#9BA0A8]">
                    <span className="font-mono">{project.year}</span>
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className="text-[#D8F34F] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-4 text-[13px] uppercase tracking-[0.18em] text-[#9BA0A8]">
          Showing {visible.length} of {projects.length} projects
        </p>
      </div>
    </section>
  );
}