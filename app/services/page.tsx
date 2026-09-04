"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "LEAD RESEARCH",
    short: "RESEARCH",
    description:
      "Build a focused prospect universe around your ideal customer profile.",
    outputs: [
      "ICP research",
      "Target account research",
      "Decision-maker research",
      "Data verification",
    ],
  },
  {
    number: "02",
    title: "PROSPECT QUALIFICATION",
    short: "QUALIFY",
    description:
      "Turn raw prospects into prioritized opportunities using a repeatable scoring framework.",
    outputs: [
      "ICP scoring",
      "Lead qualification",
      "Growth signals",
      "Priority tiers",
    ],
  },
  {
    number: "03",
    title: "SALES AUTOMATION",
    short: "AUTOMATE",
    description:
      "Connect research, qualification, outreach and follow-up into a practical workflow.",
    outputs: [
      "Workflow design",
      "CRM automation",
      "Follow-ups",
      "AI-assisted processes",
    ],
  },
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
        threshold: 0.15,
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

export default function ServicesPage() {
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
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[15%] h-80 w-80 rounded-full bg-[#8ff5c2]/10 blur-[120px]"
        />

        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
            MANERDZ / SERVICES
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="relative mt-7 max-w-5xl text-[clamp(4rem,9vw,8rem)] font-black leading-[0.84] tracking-[-0.07em]">
            BUILD THE{" "}
            <span className="text-[#8ff5c2]">PIPELINE.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Three connected service layers designed to move from target-market
            research to qualified opportunities and repeatable sales workflows.
          </p>
        </Reveal>

        {/* PIPELINE SIGNAL */}
        <Reveal delay={260}>
          <div className="mt-16 flex max-w-3xl items-center gap-3 overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="flex items-center gap-3"
              >
                <div className="group flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8ff5c2]/30 bg-[#8ff5c2]/5 text-[9px] font-bold text-[#8ff5c2] transition-all duration-300 group-hover:border-[#8ff5c2] group-hover:bg-[#8ff5c2]/10">
                    {service.number}
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-[#8ff5c2]">
                    {service.short}
                  </span>
                </div>

                {index < services.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-gradient-to-r from-[#8ff5c2]/40 to-transparent"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 120}>
              <article className="group relative grid gap-8 border-b border-white/10 py-14 last:border-b-0 md:grid-cols-[100px_0.8fr_1fr]">
                {/* hover signal */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#8ff5c2]/5 transition-all duration-500 group-hover:w-full" />

                {/* NUMBER */}
                <div className="relative">
                  <span className="text-sm font-bold text-[#d8b56a] transition-all duration-300 group-hover:text-[#8ff5c2]">
                    {service.number}
                  </span>

                  <div className="mt-4 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-[#8ff5c2]/50" />
                </div>

                {/* TITLE + DESCRIPTION */}
                <div className="relative">
                  <h2 className="text-3xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-lg text-white/40 transition-colors duration-500 group-hover:text-white/60">
                    {service.description}
                  </p>
                </div>

                {/* OUTPUTS */}
                <div className="relative flex flex-wrap content-start gap-2">
                  {service.outputs.map((item) => (
                    <span
                      key={item}
                      className="border border-[#8ff5c2]/20 bg-[#8ff5c2]/5 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#8ff5c2]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#8ff5c2]/60 hover:bg-[#8ff5c2]/10 hover:text-[#8ff5c2]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OPERATING PRINCIPLE */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#d8b56a]/5 blur-[110px]"
        />

        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b56a]">
            Operating Principle
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            AI handles research and repetitive work.
            <span className="text-white/30">
              {" "}
              Humans keep control of important decisions.
            </span>
          </h2>
        </Reveal>

        {/* PRINCIPLE GRID */}
        <Reveal delay={180}>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              ["01", "AI", "Research, scoring, personalization"],
              ["02", "AUTOMATION", "Workflows, CRM, follow-up"],
              ["03", "HUMAN", "Strategy, judgment, approval"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="group bg-[#071311] p-7 transition-colors duration-500 hover:bg-[#0d1b18]"
              >
                <span className="text-[9px] font-bold text-[#d8b56a]">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-semibold transition-colors duration-300 group-hover:text-[#8ff5c2]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
              NEXT STEP
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
              LET&apos;S BUILD
              <br />
              YOUR <span className="text-[#8ff5c2]">PIPELINE.</span>
            </h2>

            <p className="mt-7 max-w-xl text-white/40">
              Start with the market, the prospects and the workflow. Then build
              the system around what actually works.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-4 border border-[#8ff5c2]/40 bg-[#8ff5c2]/5 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ff5c2] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ff5c2] hover:bg-[#8ff5c2]/10"
            >
              Start a Conversation
              <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
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