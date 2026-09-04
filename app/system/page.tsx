"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const steps = [
  [
    "01",
    "RESEARCH",
    "Identify target companies, industries, services, decision makers and useful business signals.",
  ],
  [
    "02",
    "QUALIFY",
    "Score prospects against the ICP and prioritize the accounts with the strongest fit.",
  ],
  [
    "03",
    "PERSONALIZE",
    "Turn research into relevant messaging based on the prospect and their business context.",
  ],
  [
    "04",
    "OUTREACH",
    "Start targeted conversations with qualified prospects through the right channel.",
  ],
  [
    "05",
    "FOLLOW UP",
    "Keep opportunities moving with structured reminders, sequences and CRM updates.",
  ],
  [
    "06",
    "OPTIMIZE",
    "Use response and pipeline data to improve targeting and workflow decisions over time.",
  ],
];

function EngineNode({
  number,
  title,
  active,
  onHover,
}: {
  number: string;
  title: string;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onFocus={onHover}
      className={`group relative flex w-full items-center gap-4 text-left transition-all duration-500 ${
        active ? "translate-x-2" : ""
      }`}
    >
      <span
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-500 ${
          active
            ? "border-[#8ff5c2] bg-[#8ff5c2]/10 text-[#8ff5c2] shadow-[0_0_30px_rgba(143,245,194,0.18)]"
            : "border-white/15 bg-[#071311] text-white/40 group-hover:border-[#8ff5c2]/60 group-hover:text-[#8ff5c2]"
        }`}
      >
        <span className="absolute inset-1 rounded-full border border-white/5" />
        {number}
      </span>

      <span
        className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
          active ? "text-[#8ff5c2]" : "text-white/45 group-hover:text-white/80"
        }`}
      >
        {title}
      </span>
    </button>
  );
}

export default function SystemPage() {
  const [activeStep, setActiveStep] = useState(0);
  const engineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = engineRef.current;

    if (!root) return;

    const move = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      root.style.setProperty("--engine-x", `${x * 18}px`);
      root.style.setProperty("--engine-y", `${y * 18}px`);
    };

    root.addEventListener("mousemove", move);

    return () => root.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#071311] text-[#f2f6f1]">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071311]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="/"
            className="font-black tracking-[0.25em] transition-colors duration-300 hover:text-[#8ff5c2]"
          >
            MANERDZ<span className="text-[#8ff5c2]">.</span>
          </Link>

          <Link
            href="/"
            className="border border-white/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-[#8ff5c2] hover:bg-[#8ff5c2]/5 hover:text-[#8ff5c2]"
          >
            Back Home ↗
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[5%] h-96 w-96 rounded-full bg-[#8ff5c2]/10 blur-[130px]"
        />

        <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
          MANERDZ / SYSTEM
        </p>

        <h1 className="relative mt-7 max-w-6xl text-[clamp(4rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">
          THE LEAD{" "}
          <span className="text-[#8ff5c2]">ENGINE.</span>
        </h1>

        <p className="relative mt-8 max-w-2xl text-lg leading-8 text-white/50">
          A living framework for turning research into qualified conversations,
          then turning what works into a repeatable sales system.
        </p>
      </section>

      {/* ENGINE VISUAL */}
      <section className="border-y border-white/10 bg-[#0d1b18]">
        <div
          ref={engineRef}
          className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12"
        >
          {/* ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ff5c2]/5 blur-[100px]"
          />

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* LEFT SIDE */}
            <div className="relative z-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b56a]">
                SYSTEM FLOW
              </p>

              <div className="mt-8 space-y-5">
                {steps.map(([number, title], index) => (
                  <EngineNode
                    key={number}
                    number={number}
                    title={title}
                    active={activeStep === index}
                    onHover={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT SIDE ENGINE */}
            <div className="relative flex min-h-[520px] items-center justify-center">
              {/* outer rings */}
              <div
                className="absolute h-[380px] w-[380px] rounded-full border border-[#8ff5c2]/10 transition-transform duration-700"
                style={{
                  transform:
                    "translate(var(--engine-x), var(--engine-y))",
                }}
              />

              <div
                className="absolute h-[300px] w-[300px] rounded-full border border-[#8ff5c2]/10 transition-transform duration-700"
                style={{
                  transform:
                    "translate(var(--engine-x), var(--engine-y))",
                }}
              />

              <div
                className="absolute h-[220px] w-[220px] rounded-full border border-[#d8b56a]/10 transition-transform duration-700"
                style={{
                  transform:
                    "translate(var(--engine-x), var(--engine-y))",
                }}
              />

              {/* orbit nodes */}
              {steps.map(([number, title], index) => {
                const angle = index * 60 - 90;
                const radius = 185;

                const x =
                  Math.cos((angle * Math.PI) / 180) * radius;
                const y =
                  Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <button
                    key={number}
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    className="absolute left-1/2 top-1/2 z-20 transition-all duration-700"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    aria-label={`Activate ${title}`}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border text-[9px] font-bold transition-all duration-500 ${
                        activeStep === index
                          ? "scale-125 border-[#8ff5c2] bg-[#8ff5c2]/10 text-[#8ff5c2] shadow-[0_0_35px_rgba(143,245,194,0.25)]"
                          : "border-white/15 bg-[#071311] text-white/40"
                      }`}
                    >
                      {number}
                    </span>
                  </button>
                );
              })}

              {/* connection spokes */}
              <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-[#8ff5c2]/10" />

              {/* core */}
              <div
                className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[#8ff5c2]/40 bg-[#071311]/95 text-center shadow-[0_0_80px_rgba(143,245,194,0.08)] transition-transform duration-700"
                style={{
                  transform:
                    "translate(var(--engine-x), var(--engine-y))",
                }}
              >
                <div className="absolute inset-3 rounded-full border border-[#8ff5c2]/10" />

                <span className="relative text-xl font-black tracking-[0.18em]">
                  MANERDZ
                </span>

                <span className="relative mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#8ff5c2]">
                  AI ENGINE
                </span>

                <span className="relative mt-4 flex items-center gap-2 text-[7px] uppercase tracking-[0.2em] text-white/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8ff5c2]" />
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* active data signal */}
              <div
                key={activeStep}
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-2 w-2 rounded-full bg-[#8ff5c2] shadow-[0_0_25px_8px_rgba(143,245,194,0.22)] animate-[engineSignal_1.2s_ease-out]"
              />

              {/* active label */}
              <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 text-center">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  CURRENT PROCESS
                </span>

                <div className="mt-2 text-sm font-bold tracking-[0.15em] text-[#8ff5c2]">
                  {steps[activeStep][1]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP DETAILS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="space-y-0 border-y border-white/10">
          {steps.map(([number, title, text], index) => (
            <article
              key={number}
              onMouseEnter={() => setActiveStep(index)}
              className={`group grid gap-6 border-b border-white/10 py-10 last:border-b-0 transition-all duration-500 md:grid-cols-[90px_260px_1fr] md:items-center ${
                activeStep === index ? "bg-white/[0.015]" : ""
              }`}
            >
              <span
                className={`text-sm font-bold transition-colors duration-300 ${
                  activeStep === index
                    ? "text-[#8ff5c2]"
                    : "text-[#d8b56a]"
                }`}
              >
                {number}
              </span>

              <h2
                className={`text-2xl font-semibold transition-all duration-300 ${
                  activeStep === index
                    ? "translate-x-2 text-[#8ff5c2]"
                    : "text-white"
                }`}
              >
                {title}
              </h2>

              <p className="max-w-2xl text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-12">
        <div
          className="relative overflow-hidden border border-[#8ff5c2]/20 bg-[#8ff5c2]/[0.04] p-8 md:p-14"
        >
          <div
            aria-hidden="true"
            className="absolute right-[-10%] top-[-40%] h-80 w-80 rounded-full bg-[#8ff5c2]/10 blur-[100px]"
          />

          <p className="relative text-[10px] uppercase tracking-[0.3em] text-[#d8b56a]">
            AI + Automation + Human Control
          </p>

          <h2 className="relative mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Build manually. Document it. Standardize it.
            <span className="text-white/30">
              {" "}
              Automate what repeats.
            </span>
          </h2>

          <div className="relative mt-10 flex flex-wrap gap-3">
            {[
              "RESEARCH",
              "QUALIFY",
              "PERSONALIZE",
              "OUTREACH",
              "FOLLOW UP",
              "OPTIMIZE",
            ].map((item, index) => (
              <span
                key={item}
                className={`border px-3 py-2 text-[8px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeStep === index
                    ? "border-[#8ff5c2]/60 bg-[#8ff5c2]/10 text-[#8ff5c2]"
                    : "border-white/10 text-white/30"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/30">
            MANERDZ.
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            AI + Automation + Human Control
          </span>
        </div>
      </footer>
    </main>
  );
}