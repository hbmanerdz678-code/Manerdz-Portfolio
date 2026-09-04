"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const capabilities = [
    "Lead Research",
    "Prospect Qualification",
    "Recruitment & Sourcing",
    "B2B Outreach",
    "Administrative Support",
    "Research & Analysis",
    "Next.js / React",
    "Supabase / PostgreSQL",
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
            className={`transition-all duration-700 ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
        >
            {children}
        </div>
    );
}

export default function AboutPage() {
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
                {/* ambient rings */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rounded-full border border-[#8ff0c5]/10"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-20 top-40 h-40 w-40 rounded-full bg-[#8ff0c5]/10 blur-[100px]"
                />

                <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
                    <Reveal>
                        <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff0c5]">
                            MANERDZ / ABOUT
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className="max-w-6xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[100px]">
                            BUILDING
                            <br />
                            <span className="text-[#d8ae63]">BETTER SYSTEMS.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="mt-10 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
                            MANERDZ is an independent digital operation focused on B2B lead
                            generation, prospect research, sales workflows, and automation.
                        </p>
                    </Reveal>

                    <Reveal delay={260}>
                        <div className="mt-12 flex items-center gap-4">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ff0c5]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                                INDEPENDENT DIGITAL OPERATION
                            </span>

                            <span className="h-px w-16 bg-white/10" />

                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#8ff0c5]/70">
                                MANERDZ
                            </span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* THE APPROACH */}
            <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
                    <Reveal>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
                                THE APPROACH
                            </p>

                            <div className="mt-8 h-px w-20 bg-[#d8ae63]/40" />
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div>
                            <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                                Good sales systems start with
                                <span className="text-white/35"> good information.</span>
                            </h2>

                            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50">
                                <p>
                                    Before outreach, there needs to be a clear understanding of
                                    who should be contacted, why they are a fit, and what
                                    business problem the conversation can address.
                                </p>

                                <p>
                                    MANERDZ focuses on building that foundation first — then
                                    turning repeatable work into structured workflows that can
                                    eventually be assisted by AI and automation.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* PRINCIPLE */}
            <section className="border-y border-white/10 bg-black/10">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                    <Reveal>
                        <div className="relative overflow-hidden border border-[#d8ae63]/20 p-8 md:p-14">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute right-[-10%] top-[-40%] h-80 w-80 rounded-full bg-[#d8ae63]/5 blur-[100px]"
                            />

                            <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
                                OPERATING PRINCIPLE
                            </p>

                            <h2 className="relative mt-8 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
                                Build manually.
                                <br />
                                Document it.
                                <br />
                                <span className="text-[#8ff0c5]">
                                    Standardize it.
                                    <br />
                                    Automate what repeats.
                                </span>
                            </h2>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <Reveal>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8ff0c5]">
                                CAPABILITIES
                            </p>

                            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                                What I bring
                                <br />
                                <span className="text-white/35">to the system.</span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-white/35">
                                A combination of research, operations, communication, and
                                technical skills used to build practical B2B growth systems.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="grid border border-white/10 sm:grid-cols-2">
                            {capabilities.map((item, index) => (
                                <div
                                    key={item}
                                    className="group border-b border-white/10 p-6 transition-all duration-500 hover:bg-[#8ff0c5]/[0.03] sm:[&:nth-child(odd)]:border-r"
                                >
                                    <span className="text-[10px] font-bold text-[#d8ae63] transition-colors duration-300 group-hover:text-[#8ff0c5]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="mt-4 font-semibold transition-transform duration-300 group-hover:translate-x-1">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* AI DIRECTION */}
            <section className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                    <Reveal>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8ae63]">
                            THE DIRECTION
                        </p>
                    </Reveal>

                    <div className="mt-8 grid gap-10 lg:grid-cols-2">
                        <Reveal delay={100}>
                            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                                MANERDZ
                                <br />
                                <span className="text-[#8ff0c5]">Lead Engine.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={180}>
                            <div className="max-w-xl">
                                <p className="text-base leading-8 text-white/50">
                                    The long-term direction is an AI-assisted lead generation
                                    and sales system that connects research, qualification,
                                    personalization, outreach, follow-up, pipeline management,
                                    and optimization.
                                </p>

                                <p className="mt-6 text-base leading-8 text-white/50">
                                    The system is being built incrementally — proving the process
                                    first, then automating what can reliably be repeated.
                                </p>

                                <Link
                                    href="/system"
                                    className="mt-8 inline-flex border border-[#8ff0c5]/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ff0c5] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ff0c5] hover:bg-[#8ff0c5]/10"
                                >
                                    Explore the System ↗
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CONNECT */}
            <section className="border-t border-white/10 bg-[#0d1b18]">
                <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                    <Reveal>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8ff0c5]">
                            CONNECT
                        </p>

                        <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                            Let&apos;s connect
                            <br />
                            <span className="text-white/35">and build something useful.</span>
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

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
                <Reveal>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8ff0c5]">
                        MANERDZ / NEXT
                    </p>

                    <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        Let&apos;s build something
                        <br />
                        <span className="text-[#d8ae63]">repeatable.</span>
                    </h2>

                    <p className="mt-7 max-w-xl text-sm leading-7 text-white/35">
                        If you&apos;re looking to improve prospecting, build a stronger
                        pipeline, or turn repetitive sales work into a better system,
                        let&apos;s talk.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex border border-[#8ff0c5]/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8ff0c5] hover:text-[#061512]"
                        >
                            Let&apos;s Talk ↗
                        </Link>

                        <a
                            href="https://www.linkedin.com/in/harvey-bandajon-5bb05a418/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex border border-white/10 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </Reveal>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 px-6 py-8 md:px-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <span className="text-[9px] font-bold tracking-[0.25em] text-white/30">
                        MANERDZ.
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                        B2B Lead Generation &amp; Sales Automation
                    </span>
                </div>
            </footer>
        </main>
    );
}