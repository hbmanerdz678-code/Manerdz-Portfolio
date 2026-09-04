"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const focusAreas = [
  "Lead Generation",
  "Prospect Research",
  "B2B Outreach",
  "Sales Automation",
];

const processSteps = [
  [
    "01",
    "UNDERSTAND",
    "We identify the business problem and the outcome you're after.",
  ],
  [
    "02",
    "MAP",
    "We determine the right prospects, workflow, and process.",
  ],
  [
    "03",
    "BUILD",
    "We create the system layer by layer and improve what works.",
  ],
];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#061512] text-[#f3f0e8]">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061512]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="text-lg font-black tracking-[0.2em] transition-colors duration-300 hover:text-[#8ff0c5]"
          >
            MANERDZ<span className="text-[#8ff0c5]">.</span>
          </Link>

          <Link
            href="/"
            className="border border-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 transition-all duration-300 hover:border-[#8ff0c5] hover:bg-[#8ff0c5]/5 hover:text-[#8ff0c5]"
          >
            Back Home ↗
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* visual rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-[#8ff0c5]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-44 h-[300px] w-[300px] rounded-full border border-[#d8ae63]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[15%] top-[25%] h-40 w-40 rounded-full bg-[#8ff0c5]/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff0c5]">
              MANERDZ / CONTACT
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="max-w-6xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[100px]">
              READY TO BUILD
              <br />
              <span className="text-[#d8ae63]">A BETTER PIPELINE?</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              If you need targeted prospect research, B2B lead generation, or
              a repeatable sales workflow, let&apos;s start with the problem
              you&apos;re trying to solve.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 flex items-center gap-4">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ff0c5]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                OPEN TO B2B GROWTH PROJECTS
              </span>

              <span className="h-px w-16 bg-white/10" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8ff0c5]/70">
                LET&apos;S TALK
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
                START HERE
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Tell me what
                <br />
                <span className="text-white/35">needs to move.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
                No complicated process. Send the goal, the current challenge,
                and what you&apos;re trying to improve.
              </p>

              <div className="mt-10 h-px w-20 bg-[#d8ae63]/40" />
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={120}>
            <div className="border border-white/10">
              {/* EMAIL */}
              <a
                href="mailto:hbmanerdz678@gmail.com"
                className="group block border-b border-white/10 p-7 transition-all duration-500 hover:bg-[#8ff0c5]/[0.03] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    EMAIL
                  </p>

                  <span className="text-[#8ff0c5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <p className="mt-4 break-all text-xl font-semibold transition-colors duration-300 group-hover:text-[#8ff0c5] md:text-2xl">
                  hbmanerdz678@gmail.com
                </p>
              </a>

              {/* AVAILABILITY */}
              <div className="border-b border-white/10 p-7 md:p-10">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  AVAILABILITY
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ff0c5]" />

                  <p className="text-lg font-semibold">
                    Open to B2B growth projects
                  </p>
                </div>
              </div>

              {/* FOCUS */}
              <div className="p-7 md:p-10">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  FOCUS
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {focusAreas.map((item) => (
                    <span
                      key={item}
                      className="border border-[#8ff0c5]/20 bg-[#8ff0c5]/[0.03] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#8ff0c5]/60 hover:text-[#8ff0c5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT CONNECTION */}
      <section className="border-y border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8ff0c5]">
              DIRECT CONNECTION
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Prefer a direct
              <br />
              <span className="text-white/35">conversation?</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_280px]">
            {/* LINKEDIN */}
            <Reveal delay={100}>
              <a
                href="https://www.linkedin.com/in/harvey-bandajon-5bb05a418/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-white/10 bg-[#061512] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#8ff0c5]/40 hover:bg-[#8ff0c5]/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                    PROFESSIONAL NETWORK
                  </span>

                  <span className="text-[#8ff0c5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold transition-colors duration-300 group-hover:text-[#8ff0c5]">
                  LinkedIn
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  Connect with me professionally and follow what I&apos;m
                  building.
                </p>

                <p className="mt-8 break-all text-[10px] uppercase tracking-[0.12em] text-[#8ff0c5]/60">
                  linkedin.com/in/harvey-bandajon
                </p>
              </a>
            </Reveal>

            {/* TELEGRAM */}
            <Reveal delay={180}>
              <a
                href="https://t.me/HARVEY_BANDAJON"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-white/10 bg-[#061512] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#8ff0c5]/40 hover:bg-[#8ff0c5]/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                    DIRECT MESSAGE
                  </span>

                  <span className="text-[#8ff0c5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold transition-colors duration-300 group-hover:text-[#8ff0c5]">
                  Telegram
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  Message me directly for projects, questions, or
                  collaboration.
                </p>

                <p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-[#8ff0c5]/60">
                  @HARVEY_BANDAJON
                </p>
              </a>
            </Reveal>

            {/* QR */}
            <Reveal delay={260}>
              <div className="group flex h-full flex-col items-center justify-center border border-white/10 bg-[#061512] p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#8ff0c5]/40">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                  SCAN TO MESSAGE
                </p>

                <div className="mt-6 overflow-hidden rounded-xl bg-white p-3 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/images/telegram-qr.png"
                    alt="Telegram QR code for Harvey Bandajon"
                    className="h-44 w-44 object-contain"
                  />
                </div>

                <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-[#8ff0c5]/60">
                  TELEGRAM
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8ff0c5]">
            FIRST CONVERSATION
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Simple process.
            <br />
            <span className="text-white/35">Clear direction.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid border border-white/10 md:grid-cols-3">
          {processSteps.map(([number, title, description], index) => (
            <button
              key={number}
              type="button"
              onMouseEnter={() => setActiveProcess(index)}
              onFocus={() => setActiveProcess(index)}
              className={`group relative border-b border-white/10 p-7 text-left transition-all duration-500 last:border-b-0 md:border-r md:border-b-0 md:p-9 md:last:border-r-0 ${
                activeProcess === index
                  ? "bg-[#8ff0c5]/[0.04]"
                  : "hover:bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold transition-colors duration-300 ${
                    activeProcess === index
                      ? "text-[#8ff0c5]"
                      : "text-[#d8ae63]"
                  }`}
                >
                  {number}
                </span>

                <span
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeProcess === index
                      ? "bg-[#8ff0c5] shadow-[0_0_15px_rgba(143,240,197,0.5)]"
                      : "bg-white/10"
                  }`}
                />
              </div>

              <h3
                className={`mt-6 text-xl font-bold transition-all duration-300 ${
                  activeProcess === index
                    ? "translate-x-2 text-[#8ff0c5]"
                    : "text-white"
                }`}
              >
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/55">
                {description}
              </p>
            </button>
          ))}
        </div>

        {/* process indicator */}
        <div className="mt-6 flex items-center gap-3">
          {processSteps.map(([number], index) => (
            <span
              key={number}
              className={`h-1 transition-all duration-500 ${
                activeProcess === index
                  ? "w-16 bg-[#8ff0c5]"
                  : "w-6 bg-white/10"
              }`}
            />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="relative overflow-hidden border border-[#8ff0c5]/20 p-8 md:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-10%] top-[-40%] h-80 w-80 rounded-full bg-[#8ff0c5]/10 blur-[100px]"
              />

              <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
                MANERDZ
              </p>

              <h2 className="relative mt-7 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Better targeting.
                <br />
                Better process.
                <br />
                <span className="text-[#8ff0c5]">Better pipeline.</span>
              </h2>

              <p className="relative mt-7 max-w-xl text-sm leading-7 text-white/35">
                Start with the problem. Build the process. Then automate what
                actually works.
              </p>

              <div className="relative mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:hbmanerdz678@gmail.com"
                  className="inline-flex border border-[#8ff0c5]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8ff0c5] hover:text-[#061512]"
                >
                  Start a Conversation ↗
                </a>

                <a
                  href="https://t.me/HARVEY_BANDAJON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border border-white/10 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                >
                  Telegram ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[10px] uppercase tracking-[0.18em] text-white/30 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© 2026 MANERDZ. All rights reserved.</span>

          <span>B2B Lead Generation · Sales Automation</span>
        </div>
      </footer>
    </main>
  );
}