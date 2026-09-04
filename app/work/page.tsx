"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const caseStudy = {
  number: "01",
  category: "B2B ICP RESEARCH",
  title: "B2B ICP Research",
  subtitle: "& Lead Qualification.",
  description:
    "A structured prospect research and qualification system designed to identify high-fit B2B companies before outreach begins.",
  target: "US Marketing & Digital Agencies",
  framework: "100-point ICP qualification",
  progress: "1 of 10 prospects validated",
  score: "96",
  scoreLabel: "Sample qualification score",
};

const buildSteps = [
  ["01", "ICP Definition", "Define who we should target."],
  ["02", "Prospect Research", "Find and verify potential accounts."],
  ["03", "Qualification", "Score prospects against the ICP."],
  ["04", "Outreach", "Turn qualified prospects into conversations."],
  ["05", "Automation", "Automate repeatable sales work."],
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

export default function WorkPage() {
  const [activeBuild, setActiveBuild] = useState(0);

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
        {/* orbit rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#8ff0c5]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[#d8ae63]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[12%] top-[25%] h-40 w-40 rounded-full bg-[#8ff0c5]/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff0c5]">
              MANERDZ / SELECTED WORK
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="max-w-6xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[100px]">
              BUILT IN
              <br />
              <span className="text-[#d8ae63]">PUBLIC.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              The portfolio documents systems as they are actually built,
              tested, and refined — starting with the MANERDZ Lead Engine.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 flex items-center gap-4">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ff0c5]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                LIVE BUILD / 01
              </span>

              <span className="h-px w-16 bg-white/10" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8ff0c5]/70">
                ICP VALIDATION
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="group relative overflow-hidden border border-white/10 transition-all duration-700 hover:border-[#8ff0c5]/25">
            {/* hover glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#8ff0c5]/5 blur-[90px] transition-all duration-700 group-hover:bg-[#8ff0c5]/10"
            />

            {/* TOP */}
            <div className="relative grid border-b border-white/10 lg:grid-cols-[1fr_260px]">
              <div className="p-8 md:p-12">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
                  CASE STUDY {caseStudy.number}
                </p>

                <h2 className="max-w-4xl text-4xl font-bold leading-tight transition-transform duration-500 group-hover:translate-x-1 md:text-6xl">
                  {caseStudy.title}
                  <br />
                  <span className="text-white/35">{caseStudy.subtitle}</span>
                </h2>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40">
                  {caseStudy.description}
                </p>
              </div>

              {/* SCORE */}
              <div className="relative flex items-center justify-center border-t border-white/10 p-8 lg:border-l lg:border-t-0">
                <div className="text-center">
                  <div className="text-7xl font-black tracking-[-0.06em] text-[#d8ae63]">
                    {caseStudy.score}
                    <span className="text-2xl text-white/25">/100</span>
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                    {caseStudy.scoreLabel}
                  </p>

                  {/* score bar */}
                  <div className="mx-auto mt-6 h-1.5 w-36 overflow-hidden bg-white/10">
                    <div
                      className="h-full bg-[#8ff0c5] transition-all duration-1000"
                      style={{ width: `${caseStudy.score}%` }}
                    />
                  </div>

                  <p className="mt-3 text-[8px] uppercase tracking-[0.18em] text-[#8ff0c5]/60">
                    HIGH PRIORITY FIT
                  </p>
                </div>
              </div>
            </div>

            {/* METRICS */}
            <div className="relative grid md:grid-cols-3">
              {[
                ["Target", caseStudy.target],
                ["Framework", caseStudy.framework],
                ["Progress", caseStudy.progress],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`p-8 md:p-10 ${
                    index < 2
                      ? "border-b border-white/10 md:border-r md:border-b-0"
                      : ""
                  }`}
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    {label}
                  </p>

                  <p className="mt-4 text-sm font-semibold transition-colors duration-300 group-hover:text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* ACTION */}
            <div className="relative flex flex-col gap-8 border-t border-white/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  STATUS
                </p>

                <p className="mt-2 text-sm text-white/45">
                  Validation is currently in progress.
                </p>
              </div>

              <Link
                href="/case-studies/icp-research"
                className="inline-flex w-fit border border-[#d8ae63]/40 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ff0c5] hover:bg-[#8ff0c5] hover:text-[#061512]"
              >
                View Case Study ↗
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CURRENT BUILD */}
      <section className="border-y border-white/10 bg-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <Reveal>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8ff0c5]">
                  CURRENT BUILD
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  From research
                  <br />
                  <span className="text-white/35">
                    to revenue systems.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/35">
                  The Lead Engine is being built incrementally. Each layer is
                  tested before the next one is automated.
                </p>

                {/* active stage */}
                <div className="mt-10 border-l border-[#8ff0c5]/30 pl-5">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                    ACTIVE LAYER
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#8ff0c5]">
                    {buildSteps[activeBuild][1]}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={120}>
              <div className="border border-white/10">
                {buildSteps.map(([number, title, description], index) => (
                  <button
                    key={number}
                    type="button"
                    onMouseEnter={() => setActiveBuild(index)}
                    onFocus={() => setActiveBuild(index)}
                    className={`group grid w-full gap-4 border-b border-white/10 p-6 text-left last:border-b-0 transition-all duration-500 md:grid-cols-[60px_220px_1fr] md:items-center ${
                      activeBuild === index
                        ? "bg-[#8ff0c5]/[0.035]"
                        : "hover:bg-white/[0.015]"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold transition-colors duration-300 ${
                        activeBuild === index
                          ? "text-[#8ff0c5]"
                          : "text-[#d8ae63]"
                      }`}
                    >
                      {number}
                    </span>

                    <span
                      className={`font-semibold transition-all duration-300 ${
                        activeBuild === index
                          ? "translate-x-2 text-[#8ff0c5]"
                          : "text-white"
                      }`}
                    >
                      {title}
                    </span>

                    <span className="text-sm leading-6 text-white/40">
                      {description}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <Reveal>
          <div className="grid gap-10 border-y border-white/10 py-12 md:grid-cols-[220px_1fr] md:items-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
              BUILD NOTE
            </p>

            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                The score measures{" "}
                <span className="text-[#8ff0c5]">
                  qualification fit.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40">
                The current 96/100 score reflects how strongly the researched
                prospect matches the defined ICP framework. It is not a claim
                of revenue, conversion rate, or business performance.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
              MANERDZ / WORK
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Building the system
              <br />
              <span className="text-[#8ff0c5]">
                one layer at a time.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/35">
              Research first. Prove the process. Then automate what actually
              works.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex border border-[#8ff0c5]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8ff0c5] hover:text-[#061512]"
              >
                Start a Conversation ↗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/30">
            MANERDZ.
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            B2B Lead Generation & Sales Automation
          </span>
        </div>
      </footer>
    </main>
  );
}