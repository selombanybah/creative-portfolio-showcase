import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, EnvelopeSimple, MapPin, X } from "@phosphor-icons/react";
import { toast } from "sonner";
import { BRAND, PROJECT_TYPES, SOCIALS } from "../constants";

const EASE = [0.22, 1, 0.36, 1] as const;

type Values = { name: string; email: string; type: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", email: "", type: PROJECT_TYPES[0], message: "" };

const FIELD_BASE =
  "w-full rounded-lg border bg-[#0E0F12] px-4 py-3 text-[16px] text-[#F2F3EF] placeholder:text-[#9BA0A8]/70 transition-colors focus:outline-none";

function buildMailto(values: Values) {
  const subject = `New project enquiry — ${values.type}`;
  const body = [
    `Hi Mara,`,
    ``,
    values.message,
    ``,
    `—`,
    values.name,
    values.email,
  ].join("\n");
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [draftHref, setDraftHref] = useState<string | null>(null);

  const update = (key: keyof Values, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Enter an email address like name@studio.com.";
    }
    if (values.message.trim().length < 20) {
      next.message = "A sentence or two about the project, please (20 characters minimum).";
    }
    return next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);

    if (Object.keys(next).length > 0) {
      toast.error("Check the highlighted fields before continuing.");
      const firstInvalid = Object.keys(next)[0];
      const field = document.getElementById(`contact-${firstInvalid}`);
      field?.focus();
      return;
    }

    const href = buildMailto(values);
    setDraftHref(href);
    window.location.href = href;
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setDraftHref(null);
  };

  return (
    <section id="contact" className="bg-[#0E0F12] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-[#9BA0A8]">
              <span className="text-[#D8F34F]">03</span> Contact
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] text-[#F2F3EF] text-balance">
              Tell me what you are making.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#E6E7E2]/85 text-pretty">
              A few lines about the project, the timeline and who it is for is plenty to start.
              This form does not send anything to a server — it prepares a draft in your own email
              app so you can read it before sending.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-[16px] text-[#F2F3EF] underline decoration-[#D8F34F] decoration-2 underline-offset-4 transition-colors hover:text-[#D8F34F]"
              >
                <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
                {BRAND.email}
              </a>
              <p className="flex items-center gap-2 text-[15px] text-[#9BA0A8]">
                <MapPin size={18} weight="bold" aria-hidden="true" />
                {BRAND.location} · {BRAND.timezone}
              </p>
              <p className="flex items-center gap-2 text-[15px] text-[#9BA0A8]">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[#D8F34F]"
                  aria-hidden="true"
                />
                {BRAND.availability}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#26292F] bg-[#16181D] p-5 sm:p-8">
            <AnimatePresence mode="wait">
              {draftHref ? (
                <motion.div
                  key="ready"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <CheckCircle size={30} weight="fill" className="text-[#D8F34F]" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-2xl font-semibold text-[#F2F3EF]">
                    Your email draft is ready
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#E6E7E2]/85 text-pretty">
                    Your mail app should have opened with the subject and message filled in. Nothing
                    has been sent yet — review it there and hit send when it looks right.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={draftHref}
                      className="inline-flex items-center gap-2 rounded-full bg-[#D8F34F] px-5 py-3 font-display text-[15px] font-semibold text-[#0E0F12] transition-colors hover:bg-[#e6ff6a]"
                    >
                      Reopen the draft
                      <ArrowRight size={16} weight="bold" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-full border border-[#26292F] px-5 py-3 text-[15px] text-[#E6E7E2] transition-colors hover:border-[#D8F34F]/60 hover:text-[#F2F3EF]"
                    >
                      <X size={16} weight="bold" aria-hidden="true" />
                      Edit the message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={false}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.24, ease: EASE }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="contact-name"
                      label="Your name"
                      error={errors.name}
                    >
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(event) => update("name", event.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        placeholder="Jordan Reyes"
                        className={`${FIELD_BASE} ${
                          errors.name ? "border-[#FF8A7A]" : "border-[#26292F] focus:border-[#D8F34F]"
                        }`}
                      />
                    </Field>

                    <Field id="contact-email" label="Email" error={errors.email}>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={(event) => update("email", event.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        placeholder="you@company.com"
                        className={`${FIELD_BASE} ${
                          errors.email ? "border-[#FF8A7A]" : "border-[#26292F] focus:border-[#D8F34F]"
                        }`}
                      />
                    </Field>
                  </div>

                  <Field id="contact-type" label="What do you need?">
                    <select
                      id="contact-type"
                      name="type"
                      value={values.type}
                      onChange={(event) => update("type", event.target.value)}
                      className={`${FIELD_BASE} border-[#26292F] focus:border-[#D8F34F]`}
                    >
                      {PROJECT_TYPES.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="contact-message" label="Project details" error={errors.message}>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={(event) => update("message", event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      placeholder="What are you building, roughly when, and what is not working about the current version?"
                      className={`${FIELD_BASE} resize-y ${
                        errors.message
                          ? "border-[#FF8A7A]"
                          : "border-[#26292F] focus:border-[#D8F34F]"
                      }`}
                    />
                  </Field>

                  <div className="flex flex-wrap items-center gap-4 border-t border-[#26292F] pt-5">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D8F34F] px-6 py-3.5 font-display text-[15px] font-semibold text-[#0E0F12] transition-colors hover:bg-[#e6ff6a] active:scale-[0.99]"
                    >
                      Prepare my email
                      <ArrowRight size={17} weight="bold" aria-hidden="true" />
                    </button>
                    <p className="text-[13px] text-[#9BA0A8]">
                      Opens your mail app — nothing is stored.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <footer className="mt-16 border-t border-[#26292F] pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-[#F2F3EF]">{BRAND.name}</p>
              <p className="mt-1 text-[13px] text-[#9BA0A8]">
                © 2025 {BRAND.name}. Portfolio content and case studies are illustrative.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[15px] text-[#9BA0A8] transition-colors hover:text-[#F2F3EF]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className="text-[15px] text-[#D8F34F] transition-colors hover:text-[#F2F3EF]">
                  Back to top ↑
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] uppercase tracking-[0.16em] text-[#9BA0A8]">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[13px] text-[#FF8A7A]">
          {error}
        </p>
      )}
    </div>
  );
}