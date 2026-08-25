"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Virtual Assistance",
    description:
      "I help businesses stay organized, productive, and moving forward by handling the tasks that take time away from what matters most.",
    items: ["Admin Support", "Research", "Data Entry", "Task Management"],
  },
  {
    number: "02",
    title: "Recruitment Support",
    description:
      "From candidate sourcing to communication and coordination, I help businesses build a smoother and more efficient recruitment process.",
    items: [
      "Candidate Sourcing",
      "Screening",
      "Interview Coordination",
      "Recruitment Admin",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "I create clean, responsive websites designed to give businesses a professional online presence and turn visitors into potential customers.",
    items: [
      "Landing Pages",
      "Business Websites",
      "Responsive Design",
      "Website Maintenance",
    ],
  },
];

const skills = [
  "Virtual Assistance",
  "Recruitment",
  "Lead Generation",
  "Research",
  "Administrative Support",
  "Customer Support",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
];

const reasons = [
  {
    number: "01",
    title: "Reliable",
    description:
      "You can count on me to take responsibility for the work assigned to me.",
  },
  {
    number: "02",
    title: "Adaptable",
    description:
      "I can learn new tools, processes, and systems when the job requires it.",
  },
  {
    number: "03",
    title: "Proactive",
    description:
      "I don't just wait for instructions. I look for ways to keep things moving.",
  },
  {
    number: "04",
    title: "Growth Mindset",
    description:
      "I'm continuously developing my skills so I can bring more value to every project.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen bg-[#0b0b0a] text-[#f1eee8] selection:bg-[#c8a46a] selection:text-[#0b0b0a]"
    >
      {/* ================= NAVIGATION ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0a]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#top"
            className="text-lg font-bold tracking-[0.25em] text-white transition hover:text-[#c8a46a]"
          >
            MANERDZ.
          </a>

          <div className="hidden items-center gap-12 text-[11px] uppercase tracking-[0.18em] text-white/50 md:flex">
            <a
              href="#about"
              className="transition duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              className="transition duration-300 hover:text-white"
            >
              Services
            </a>

            <a
              href="#work"
              className="transition duration-300 hover:text-white"
            >
              Work
            </a>

            <a
              href="#contact"
              className="transition duration-300 hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden border border-[#c8a46a]/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8a46a] transition duration-300 hover:bg-[#c8a46a] hover:text-[#0b0b0a] md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0b0a] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.18em] text-white/70">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>

              <a href="#work" onClick={() => setMenuOpen(false)}>
                Work
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c8a46a]/5 blur-[120px]" />

          <div className="absolute right-[-10%] top-[15%] h-[300px] w-[300px] rounded-full border border-[#c8a46a]/10" />

          <div className="absolute right-[-5%] top-[20%] h-[450px] w-[450px] rounded-full border border-[#c8a46a]/5" />

          <div className="absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rotate-45 border border-[#c8a46a]/5" />

          <div className="absolute left-[8%] top-[35%] h-px w-24 bg-[#c8a46a]/20" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* HERO LEFT */}

            <div>
              <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.35em] text-[#c8a46a]">
                Virtual Assistant · Recruiter · Aspiring Web Developer
              </p>

              <h1 className="text-[clamp(4rem,11vw,9rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
                MANERDZ
                <span className="text-[#c8a46a]">.</span>
              </h1>

              <div className="mt-10">
                <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl">
                  I help businesses{" "}
                  <span className="text-[#c8a46a]">get things done.</span>
                </h2>

                <div className="mt-7 max-w-xl">
                  <p className="text-base leading-7 text-white/45">
                    Reliable support, recruitment assistance, and modern web
                    development for businesses that want to keep moving
                    forward.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#work"
                      className="bg-[#c8a46a] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b0b0a] transition duration-300 hover:bg-[#e0c58f]"
                    >
                      View My Work
                    </a>

                    <a
                      href="#contact"
                      className="border border-white/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#c8a46a] hover:text-[#c8a46a]"
                    >
                      Let's Work Together
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PROFILE */}

            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[350px]">
              <div className="absolute -inset-10 rounded-full border border-[#c8a46a]/5" />

              <div className="absolute -inset-5 rounded-full border border-[#c8a46a]/10" />

              <div className="absolute inset-10 rounded-full bg-[#c8a46a]/10 blur-3xl" />

              <div className="profile-float relative">
                <div className="profile-frame overflow-hidden border border-[#c8a46a]/50 bg-[#151513] p-1.5 shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                       src="/images/manerdz-1.png"
                      alt="Manerdz"
                      className="block aspect-[4/5] w-full object-cover object-[center_18%]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/70 via-transparent to-transparent" />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0b0a]/10 via-transparent to-[#c8a46a]/5" />
                  </div>
                </div>

                {/* LOCATION */}

                <div className="octagon-box absolute -bottom-5 -left-5 border border-[#c8a46a]/20 bg-[#10100f]/95 px-6 py-4 shadow-xl backdrop-blur-xl">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    Based in
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Philippines
                  </p>
                </div>

                {/* AVAILABILITY */}

                <div className="octagon-box absolute -right-4 top-8 flex items-center gap-2 border border-[#c8a46a]/20 bg-[#10100f]/95 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-[#c8a46a]" />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                    Available
                  </span>
                </div>

                <div className="absolute -right-8 bottom-10 hidden text-[9px] uppercase tracking-[0.3em] text-white/20 lg:block">
                  30° / 123°
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/25">
            <span className="h-px w-12 bg-white/20" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="border-y border-white/10 bg-[#10100f]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_2fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
              What I do
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              I provide the support businesses need to{" "}
              <span className="text-white/35">
                operate better, hire smarter, and grow online.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
              About Me
            </p>

            <div className="mt-10 hidden text-8xl font-black tracking-[-0.06em] text-white/5 lg:block">
              01
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              More than just another pair of hands.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/45">
              <p>
                I'm Manerdz — a Virtual Assistant, Recruiter, and aspiring Web
                Developer focused on helping businesses get more done.
              </p>

              <p>
                I believe good support is about more than completing tasks.
                It's about understanding what needs to happen, communicating
                clearly, and making sure things keep moving.
              </p>

              <p>
                Whether you need help managing day-to-day operations, finding
                the right people, or building your online presence, I bring a
                practical and dependable approach to the work.
              </p>
            </div>

            <div className="mt-9 border-l border-[#c8a46a] pl-6">
              <p className="text-lg font-medium text-white">
                "Reliable work. Clear communication. Always moving forward."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="border-y border-white/10 bg-[#10100f]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
                Services
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                How I can help.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              Flexible support for businesses that need someone dependable to
              take ownership of important tasks.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-b border-r border-white/10 p-7 transition duration-300 hover:bg-[#171715] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#c8a46a]">
                    {service.number}
                  </span>

                  <span className="text-xl text-white/20 transition group-hover:text-[#c8a46a]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-14 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-white/45"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#c8a46a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
              Skills & Tools
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Built to adapt.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-2.5 text-xs text-white/55 transition duration-300 hover:border-[#c8a46a]/50 hover:text-[#c8a46a]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}

      <section
        id="work"
        className="work-section border-y border-white/10 bg-[#10100f]"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {/* WORK HEADER */}

          <div className="work-header flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
                Selected Work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Things I've worked on.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              A selection of websites and digital projects I've built while
              developing my skills and helping businesses improve their online
              presence.
            </p>
          </div>

          {/* MAGIC LAND CAFE */}

          <article className="work-project group overflow-hidden border border-white/10 bg-[#0b0b0a] transition duration-500 hover:border-[#c8a46a]/40">
            {/* PROJECT TOP BAR */}

            <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-7">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c8a46a]">
                  Project 01
                </span>

                <span className="h-px w-6 bg-white/10" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Featured Project
                </span>
              </div>

              <a
                href="https://magic-land-cafe-849hs3xlj-hbmanerdz678-codes-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex w-fit items-center gap-3 border border-[#c8a46a]/70 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#c8a46a] transition duration-300 hover:bg-[#c8a46a] hover:text-[#0b0b0a]"
              >
                View Live Website

                <span className="text-base transition-transform duration-300 group-hover/link:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* HERO SCREENSHOT */}

            <div className="relative overflow-hidden border-b border-white/10">
              <img
                src="/images/website-hero.png"
                alt="Magic Land Cafe website"
                className="block aspect-[16/8] w-full object-cover object-top transition duration-700 group-hover:scale-[1.01]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/60 via-transparent to-transparent" />
            </div>

            {/* PROJECT INFORMATION */}

            <div className="p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.25em] text-[#c8a46a]">
                    WEB DEVELOPMENT
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Magic Land Cafe
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                    A modern café website designed around the atmosphere,
                    story, food, and experience of the business. Built to give
                    the café a stronger digital presence while keeping the
                    experience visual, simple, and memorable.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "React",
                      "Tailwind CSS",
                      "Responsive Design",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden text-right md:block">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Built for
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                    Digital Presence
                  </p>
                </div>
              </div>
            </div>

            {/* SCREENSHOTS */}

            <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-2">
              <div className="group/image relative overflow-hidden bg-[#0b0b0a]">
                <img
                  src="/images/website-1.png"
                  alt="Magic Land Cafe website preview"
                  className="block aspect-[16/10] w-full object-cover object-top opacity-75 transition duration-700 group-hover/image:scale-[1.03] group-hover/image:opacity-100"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/50 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="border border-white/10 bg-[#0b0b0a]/80 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
                    Website Preview
                  </span>
                </div>
              </div>

              <div className="group/image relative overflow-hidden bg-[#0b0b0a]">
                <img
                  src="/images/website-2.png"
                  alt="Magic Land Cafe website preview"
                  className="block aspect-[16/10] w-full object-cover object-top opacity-75 transition duration-700 group-hover/image:scale-[1.03] group-hover/image:opacity-100"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/50 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="border border-white/10 bg-[#0b0b0a]/80 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
                    Website Preview
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div className="flex items-center gap-4 py-7">
            <span className="h-px w-10 bg-[#c8a46a]/40" />

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              More projects coming soon
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY ME ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
              Why Work With Me
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Simple work ethic. Serious results.
            </h2>
          </div>

          <div>
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="grid grid-cols-[40px_1fr] gap-5 border-t border-white/10 py-6"
              >
                <span className="text-xs font-bold text-[#c8a46a]">
                  {reason.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-white/40">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="border-t border-white/10 bg-[#10100f]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a46a]">
                Let's Work Together
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
                Have something that needs to get done?
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-md text-base leading-7 text-white/40">
                If you're looking for someone reliable to support your
                business, I'd love to hear what you're working on.
              </p>

              <a
                href="mailto:hbmanerdz678@gmail.com"
                className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#c8a46a] pb-3 text-lg font-medium text-[#c8a46a] transition hover:text-white"
              >
                hbmanerdz678@gmail.com
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-white/30 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© 2026 MANERDZ. All rights reserved.</p>

          <p className="uppercase tracking-[0.2em]">
            Virtual Assistant · Recruiter · Aspiring Web Developer
          </p>

          <a href="#top" className="transition hover:text-[#c8a46a]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}