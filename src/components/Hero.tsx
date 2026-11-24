import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Asterisk } from "@phosphor-icons/react";
import { BRAND, DISCIPLINES, HERO_IMAGE } from "../constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
  };
  const item = {
    hidden: { y: reduce ? 0 : 26 },
    show: { y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  return (
    <>
      <section
        id="top"
        className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#0E0F12]"
      >
        <motion.div
          className="absolute inset-0 -z-10"
          initial={reduce ? false : { clipPath: "inset(0% 0% 6% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <motion.img
            src={HERO_IMAGE.url}
            alt={HERO_IMAGE.alt}
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            initial={reduce ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: "linear" }}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/35 to-black/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/40 to-transparent"
          aria-hidden="true"
        />

        <motion.div
          variants={container}
          initial={reduce ? "show" : "hidden"}
          animate="show"
          className="mx-auto w-full max-w-[1400px] px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pb-28"
        >
          <motion.p
            variants={item}
            className="flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[#D8F34F]"
          >
            <Asterisk size={14} weight="bold" aria-hidden="true" />
            {BRAND.kicker}
          </motion.p>

          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.9rem,7.2vw,5.25rem)] font-semibold leading-[0.95] text-[#F2F3EF] text-balance">
            <motion.span variants={item} className="block">
              {BRAND.headline[0]}
            </motion.span>
            <motion.span variants={item} className="block">
              {BRAND.headline[1]}
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#E6E7E2]/85 text-pretty"
          >
            {BRAND.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D8F34F] px-6 py-3.5 font-display text-[15px] font-semibold text-[#0E0F12] transition-colors hover:bg-[#e6ff6a] active:scale-[0.99]"
            >
              View selected work
              <ArrowDown
                size={17}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <p className="flex items-center gap-2 text-sm text-[#E6E7E2]/75">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D8F34F]" aria-hidden="true" />
              {BRAND.availability}
            </p>
          </motion.div>
        </motion.div>
      </section>

      <DisciplineBand />
    </>
  );
}

function DisciplineBand() {
  const strip = [...DISCIPLINES, ...DISCIPLINES];

  return (
    <div
      className="mv-marquee-wrap overflow-hidden border-y border-[#26292F] bg-[#16181D] py-4"
      aria-label="Disciplines"
    >
      <div className="mv-marquee flex w-max items-center">
        {strip.map((discipline, i) => (
          <span key={`${discipline}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap px-5 font-display text-lg tracking-tight text-[#F2F3EF] sm:text-xl">
              {discipline}
            </span>
            <Asterisk size={14} weight="bold" className="text-[#D8F34F]" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}