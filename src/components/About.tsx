import { motion, useReducedMotion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";
import { AWARDS, BIO, CAPABILITIES, FACTS, PORTRAIT, TESTIMONIALS } from "../data/about";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="border-b border-[#26292F] bg-[#0E0F12] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-[#9BA0A8]">
          <span className="text-[#D8F34F]">02</span> About
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <motion.div
            initial={reduce ? false : { y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative">
              <span
                className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-[#D8F34F]/40"
                aria-hidden="true"
              />
              <img
                src={PORTRAIT.url}
                alt={PORTRAIT.alt}
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-xl border border-[#26292F] object-cover grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[13px] uppercase tracking-[0.16em] text-[#9BA0A8]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-display text-[17px] text-[#F2F3EF]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div>
            <h2 className="max-w-xl font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] text-[#F2F3EF] text-balance">
              Design is a decision, not a decoration.
            </h2>

            <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-[#E6E7E2]/85">
              {BIO.map((paragraph, index) => (
                <p key={index} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[13px] uppercase tracking-[0.18em] text-[#9BA0A8]">
                What I do
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {CAPABILITIES.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-full border border-[#26292F] bg-[#16181D] px-3.5 py-1.5 text-sm text-[#E6E7E2]"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-[#26292F] pt-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-16">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#F2F3EF]">
              Selected recognition
            </h3>
            <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-[#9BA0A8] text-pretty">
              A short list. I would rather have a client call back than a shelf of trophies.
            </p>
          </div>

          <ol className="divide-y divide-[#26292F] border-y border-[#26292F]">
            {AWARDS.map((award, index) => (
              <li key={award.title}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                  <span className="font-mono text-[13px] text-[#D8F34F]">
                    0{index + 1}
                  </span>
                  <span className="font-display text-[17px] font-medium text-[#F2F3EF]">
                    {award.title}
                  </span>
                  <span className="text-[15px] text-[#9BA0A8]">{award.detail}</span>
                  <span className="ml-auto font-mono text-[13px] text-[#9BA0A8]">
                    {award.year}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold text-[#F2F3EF]">
              What they said afterwards
            </h3>
            <p className="text-[13px] uppercase tracking-[0.16em] text-[#9BA0A8]">
              Illustrative client feedback
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                initial={reduce ? false : { y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : index * 0.06 }}
                className={`rounded-xl border border-[#26292F] bg-[#16181D] p-6 sm:p-7 ${
                  index === 0 ? "lg:mr-16" : index === 1 ? "lg:ml-16" : "lg:mr-8 lg:ml-8"
                }`}
              >
                <Quotes size={22} weight="fill" className="text-[#D8F34F]" aria-hidden="true" />
                <p className="mt-3 font-display text-[19px] leading-[1.5] text-[#F2F3EF] text-pretty sm:text-[21px]">
                  {testimonial.quote}
                </p>
                <footer className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#9BA0A8]">
                  <span className="font-medium text-[#E6E7E2]">{testimonial.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{testimonial.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}