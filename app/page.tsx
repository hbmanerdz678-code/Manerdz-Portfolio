"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const systemSteps = [
  {
    number: "01",
    title: "Research",
    short: "Find",
    description:
      "Find the right companies and collect useful business information.",
  },
  {
    number: "02",
    title: "Qualify",
    short: "Score",
    description:
      "Score prospects against a clearly defined ideal customer profile.",
  },
  {
    number: "03",
    title: "Personalize",
    short: "Context",
    description:
      "Create relevant messaging from real prospect context and business signals.",
  },
  {
    number: "04",
    title: "Outreach",
    short: "Connect",
    description:
      "Start targeted conversations with qualified prospects.",
  },
  {
    number: "05",
    title: "Follow Up",
    short: "Move",
    description:
      "Keep opportunities moving with structured and repeatable follow-up.",
  },
  {
    number: "06",
    title: "Optimize",
    short: "Improve",
    description:
      "Use results and data to improve the system over time.",
  },
];

const capabilities = [
  "Lead Generation",
  "ICP Development",
  "Market Research",
  "Prospect Qualification",
  "Decision-Maker Research",
  "B2B Outreach",
  "CRM Thinking",
  "Workflow Automation",
  "AI-Assisted Research",
  "Next.js",
  "React",
  "Supabase",
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
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
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function KineticNetwork() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;

    if (!root) return;

    const move = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      root.style.setProperty("--mx", `${x * 42}px`);
      root.style.setProperty("--my", `${y * 42}px`);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="kinetic-network"
      aria-hidden="true"
    >
      <div className="network-grid" />

      <div className="network-orb network-orb-a" />

      <div className="network-orb network-orb-b" />

      <div className="network-core">
        <span>MANERDZ</span>
        <small>LEAD ENGINE</small>
      </div>

      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className={`network-node node-${index + 1}`}
        />
      ))}

      {Array.from({ length: 7 }).map((_, index) => (
        <span
          key={index}
          className={`network-line line-${index + 1}`}
        />
      ))}
    </div>
  );
}

function MagneticButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  return (
    <Link
      href={href}
      onMouseMove={(event) => {
        const rect =
          event.currentTarget.getBoundingClientRect();

        setOffset({
          x:
            (event.clientX -
              rect.left -
              rect.width / 2) *
            0.08,

          y:
            (event.clientY -
              rect.top -
              rect.height / 2) *
            0.08,
        });
      }}
      onMouseLeave={() => {
        setOffset({
          x: 0,
          y: 0,
        });
      }}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      className={`magnetic group inline-flex items-center gap-4 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${secondary
          ? "border border-[#d8b56a]/60 text-[#f2f6f1] hover:border-[#8ff5c2] hover:text-[#8ff5c2]"
          : "bg-[#8ff5c2] text-[#071311] hover:bg-[#b9ffd9]"
        }`}
    >
      {children}

      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </Link>
  );
}

function HeroAssembly() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"scatter" | "circle" | "aligned" | "exit">("scatter");
  const leavingRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const startOpening = () => {
    clearTimers();
    leavingRef.current = false;
    setPhase("scatter");

    timersRef.current.push(
      window.setTimeout(() => setPhase("circle"), 220),
      window.setTimeout(() => setPhase("aligned"), 1150)
    );
  };

  const startExit = (navigateTo?: string) => {
    if (leavingRef.current) return;

    leavingRef.current = true;
    clearTimers();
    setPhase("exit");

    timersRef.current.push(
      window.setTimeout(() => setPhase("scatter"), 720)
    );

    if (navigateTo) {
      timersRef.current.push(
        window.setTimeout(() => {
          window.location.href = navigateTo;
        }, 980)
      );
    }
  };

  useEffect(() => {
    // Keep the first render identical on server and client.
    // The animated letter layout only mounts after hydration.
    setMounted(true);
    startOpening();

    const handleScroll = () => {
      if (window.scrollY > 45) {
        if (!leavingRef.current) {
          startExit();
        }
        return;
      }

      if (window.scrollY <= 45 && leavingRef.current) {
        startOpening();
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || link.target === "_blank") {
        return;
      }

      if (href.startsWith("http")) {
        return;
      }

      // If the hero is already exiting because the user scrolled away,
      // do not block the link. Let the browser navigate normally.
      if (leavingRef.current) {
        return;
      }

      event.preventDefault();
      startExit(href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick, true);

    return () => {
      clearTimers();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  if (!mounted) {
    return (
      <div
        className="hero-assembly hero-assembly-scatter"
        aria-hidden="true"
      />
    );
  }

  const text = "BUILD A BETTER PIPELINE.";
  const letters = Array.from(text);

  return (
    <div
      className={`hero-assembly hero-assembly-${phase}`}
      aria-label="Build a better pipeline"
    >
      <div className="hero-assembly-orbit" aria-hidden="true" />

      <div className="hero-orbit-letters" aria-hidden="true">
        {letters.map((char, index) => {
          const angle = (index / letters.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 142 + (index % 3) * 8;
          const circleX = Math.cos(angle) * radius;
          const circleY = Math.sin(angle) * radius;
          const scatterX = ((index * 83) % 560) - 280;
          const scatterY = ((index * 127) % 380) - 190;
          const scatterRotate = ((index * 43) % 150) - 75;

          const style = {
            "--circle-x": `${circleX}px`,
            "--circle-y": `${circleY}px`,
            "--scatter-x": `${scatterX}px`,
            "--scatter-y": `${scatterY}px`,
            "--scatter-r": `${scatterRotate}deg`,
            "--letter-delay": `${index * 16}ms`,
          } as React.CSSProperties;

          return (
            <span
              key={`${char}-${index}`}
              className="hero-orbit-letter"
              style={style}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          );
        })}
      </div>

      <div className="hero-final-title" aria-hidden={phase !== "aligned"}>
        BUILD A
        <br />
        BETTER
        <br />
        <span>PIPELINE.</span>
      </div>
    </div>
  );
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const links = [
    ["Services", "/services"],
    ["System", "/system"],
    ["Work", "/work"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 30);

      if (currentY < 40) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 8) {
        setHidden(true);
        setMenuOpen(false);
      } else if (currentY < lastScrollY.current - 8) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${hidden
          ? "-translate-y-full"
          : "translate-y-0"
        } ${scrolled
          ? "border-b border-[#8ff5c2]/10 bg-[#071311]/94 shadow-[0_15px_50px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
          : "border-b border-white/10 bg-[#071311]/82 backdrop-blur-xl"
        }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-12 ${scrolled ? "py-3" : "py-5"
          }`}
      >
        <Link
          href="/"
          className="group relative text-lg font-black tracking-[0.25em] text-[#f2f6f1] transition hover:text-[#8ff5c2]"
        >
          MANERDZ
          <span className="text-[#8ff5c2]">.</span>

          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#8ff5c2] transition-all duration-500 group-hover:w-full" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2f6f1]/45 transition hover:text-[#8ff5c2]"
            >
              {label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8ff5c2] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className={`group hidden items-center gap-3 border text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 md:flex ${scrolled
              ? "border-[#8ff5c2]/30 px-5 py-2.5 text-[#8ff5c2] hover:bg-[#8ff5c2] hover:text-[#071311]"
              : "border-[#d8b56a]/60 px-6 py-3 text-[#d8b56a] hover:border-[#8ff5c2] hover:bg-[#8ff5c2] hover:text-[#071311]"
            }`}
        >
          Let&apos;s Talk

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative grid h-10 w-10 place-items-center text-[#f2f6f1] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute h-px w-5 bg-current transition-all duration-300 ${menuOpen
                ? "rotate-45"
                : "-translate-y-1.5"
              }`}
          />

          <span
            className={`absolute h-px w-5 bg-current transition-all duration-300 ${menuOpen
                ? "-rotate-45"
                : "translate-y-1.5"
              }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#071311]/97 backdrop-blur-2xl transition-all duration-500 md:hidden ${menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
          }`}
      >
        <div className="px-6 py-7">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.28em] text-[#f2f6f1]/25">
              Navigation / System
            </span>

            <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#8ff5c2]">
              <i className="h-1.5 w-1.5 rounded-full bg-[#8ff5c2] shadow-[0_0_12px_rgba(143,245,194,0.8)]" />
              Online
            </span>
          </div>

          <div className="flex flex-col">
            {links.map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-4 text-sm uppercase tracking-[0.18em] text-[#f2f6f1]/65 transition hover:text-[#8ff5c2]"
              >
                <span>
                  <span className="mr-4 text-[8px] text-[#d8b56a]">
                    0{index + 1}
                  </span>

                  {label}
                </span>

                <span className="text-[#f2f6f1]/20 transition group-hover:translate-x-1 group-hover:text-[#8ff5c2]">
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-between bg-[#8ff5c2] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071311]"
          >
            Start a Conversation

            <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function SystemPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(
        (current) =>
          (current + 1) % systemSteps.length
      );
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const current = systemSteps[active];

  return (
    <div className="relative overflow-hidden border border-white/10 bg-[#071311]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(143,245,194,0.08),transparent_55%)]" />

      <div className="relative border-b border-white/10 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#d8b56a]">
              Live Process
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#f2f6f1]/30">
              MANERDZ / Engine Flow
            </p>
          </div>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8ff5c2]">
            <i className="h-1.5 w-1.5 rounded-full bg-[#8ff5c2] shadow-[0_0_12px_rgba(143,245,194,0.8)]" />
            Active
          </span>
        </div>
      </div>

      <div className="relative grid min-h-[420px] place-items-center p-8">
        <div className="absolute h-56 w-56 rounded-full border border-[#8ff5c2]/10" />

        <div className="absolute h-40 w-40 rounded-full border border-[#d8b56a]/15" />

        <div className="absolute h-24 w-24 rounded-full bg-[#8ff5c2]/[0.04] blur-xl" />

        <div className="relative grid h-28 w-28 place-items-center rounded-full border border-[#8ff5c2]/40 bg-[#0d1b18] text-center shadow-[0_0_70px_rgba(143,245,194,0.08)]">
          <div>
            <p className="text-[8px] font-bold tracking-[0.18em] text-[#8ff5c2]">
              MANERDZ
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-[0.18em] text-[#f2f6f1]/35">
              AI ENGINE
            </p>
          </div>
        </div>

        {systemSteps.map((step, index) => {
          const angle =
            (index / systemSteps.length) *
            Math.PI *
            2;

          const radius = 145;

          const x =
            Math.round(
              Math.cos(angle) *
              radius *
              100
            ) / 100;

          const y =
            Math.round(
              Math.sin(angle) *
              radius *
              100
            ) / 100;

          const isActive = index === active;

          return (
            <button
              key={step.number}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className="absolute h-14 w-14 transition-all duration-500"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              aria-label={`Select ${step.title}`}
            >
              <span
                className={`grid h-full w-full place-items-center rounded-full border text-[9px] font-bold transition-all duration-500 ${isActive
                    ? "border-[#8ff5c2] bg-[#8ff5c2] text-[#071311] shadow-[0_0_35px_rgba(143,245,194,0.18)]"
                    : "border-white/15 bg-[#0d1b18] text-[#f2f6f1]/40 hover:border-[#8ff5c2]/60 hover:text-[#8ff5c2]"
                  }`}
              >
                {step.number}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative border-t border-white/10 p-6 md:p-8">
        <div className="flex items-start gap-5">
          <span className="text-xs font-bold text-[#d8b56a]">
            {current.number}
          </span>

          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#8ff5c2]">
              {current.short}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {current.title}
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#f2f6f1]/40">
              {current.description}
            </p>
          </div>
        </div>

        <div className="mt-7 flex gap-1">
          {systemSteps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActive(index)}
              className={`h-1 flex-1 transition-all duration-500 ${index === active
                  ? "bg-[#8ff5c2]"
                  : "bg-white/10"
                }`}
              aria-label={`Go to ${step.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoreCard() {
  const [animatedScore, setAnimatedScore] =
    useState(0);

  useEffect(() => {
    let frame = 0;

    const target = 96;
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(
        (time - start) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setAnimatedScore(
        Math.round(target * eased)
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative text-left md:text-right">
      <p className="text-7xl font-bold tracking-[-0.06em] text-[#d8b56a]">
        {animatedScore}

        <span className="text-2xl text-[#f2f6f1]/25">
          /100
        </span>
      </p>

      <div className="mt-4 h-1 w-full overflow-hidden bg-white/10 md:ml-auto md:max-w-[190px]">
        <div
          className="h-full bg-[#8ff5c2] transition-all duration-100"
          style={{
            width: `${animatedScore}%`,
          }}
        />
      </div>

      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f2f6f1]/40">
        Volume Nine · High Priority Fit
      </p>
    </div>
  );
}

const heroAssemblyStyles = `
  .hero-assembly {
    position: relative;
    width: 100%;
    min-height: clamp(270px, 32vw, 430px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    isolation: isolate;
    overflow: visible;
  }

  .hero-assembly-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(34vw, 430px);
    height: min(34vw, 430px);
    min-width: 250px;
    min-height: 250px;
    border: 1px solid rgba(143, 245, 194, 0.16);
    border-radius: 999px;

    transform:
      translate(-50%, -50%)
      scale(0.25)
      rotate(-20deg);

    opacity: 0;

    transition:
      transform 1100ms cubic-bezier(0.16, 1, 0.3, 1),
      opacity 500ms ease;

    pointer-events: none;
  }

  .hero-assembly-circle .hero-assembly-orbit {
    opacity: 1;

    transform:
      translate(-50%, -50%)
      scale(1)
      rotate(0deg);
  }

  .hero-assembly-exit .hero-assembly-orbit {
    opacity: 1;

    transform:
      translate(-50%, -50%)
      scale(1.08)
      rotate(12deg);
  }

  .hero-orbit-letters {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    z-index: 2;
  }

  .hero-orbit-letter {
    position: absolute;
    left: 0;
    top: 0;

    display: inline-block;

    font-size: clamp(2.2rem, 5vw, 5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.075em;

    color: #f2f6f1;

    transform:
      translate3d(
        var(--scatter-x),
        var(--scatter-y),
        0
      )
      rotate(var(--scatter-r))
      scale(0.72);

    opacity: 1;

    filter: blur(4px);

    transform-origin: center;

    transition:
      transform 1000ms cubic-bezier(0.16, 1, 0.3, 1),
      opacity 500ms ease,
      filter 700ms ease;

    transition-delay: var(--letter-delay);

    will-change: transform, opacity, filter;
  }

  .hero-orbit-letter:nth-child(14),
  .hero-orbit-letter:nth-child(15),
  .hero-orbit-letter:nth-child(16),
  .hero-orbit-letter:nth-child(17),
  .hero-orbit-letter:nth-child(18),
  .hero-orbit-letter:nth-child(19),
  .hero-orbit-letter:nth-child(20),
  .hero-orbit-letter:nth-child(21),
  .hero-orbit-letter:nth-child(22) {
    color: #8ff5c2;
  }

  /*
   * PHASE 2
   * Letters rapidly converge into the orbit.
   */
  .hero-assembly-circle .hero-orbit-letter {
    transform:
      translate3d(
        var(--circle-x),
        var(--circle-y),
        0
      )
      rotate(180deg)
      scale(0.82);

    opacity: 0.92;

    filter: blur(0.5px);
  }

  /*
   * PHASE 3
   * The orbit briefly holds while the final
   * typography prepares to appear.
   */
  .hero-assembly-aligned .hero-orbit-letter {
    transform:
      translate3d(
        var(--circle-x),
        var(--circle-y),
        0
      )
      rotate(180deg)
      scale(0.88);

    opacity: 0;

    filter: blur(5px);

    transition:
      transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 420ms ease,
      filter 450ms ease;

    transition-delay: 0ms;
  }

  /*
   * EXIT
   * The letters expand away from the center
   * instead of simply disappearing.
   */
  .hero-assembly-exit .hero-orbit-letter {
    transform:
      translate3d(
        calc(var(--circle-x) * 1.28),
        calc(var(--circle-y) * 1.28),
        0
      )
      rotate(220deg)
      scale(0.72);

    opacity: 0;

    filter: blur(5px);

    transition:
      transform 650ms cubic-bezier(0.76, 0, 0.24, 1),
      opacity 350ms ease,
      filter 400ms ease;

    transition-delay: 0ms;
  }

  .hero-final-title {
    position: relative;
    z-index: 3;

    width: 100%;

    font-size: clamp(4rem, 9vw, 9rem);
    font-weight: 900;
    line-height: 0.82;
    letter-spacing: -0.075em;

    color: #f2f6f1;

    opacity: 0;

    transform:
      translateY(28px)
      scale(0.96);

    filter: blur(10px);

    transition:
      opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 950ms cubic-bezier(0.16, 1, 0.3, 1),
      filter 800ms ease;

    pointer-events: none;
  }

  .hero-final-title span {
    color: #8ff5c2;
  }

  /*
   * Final title arrives with a slight overshoot.
   */
  .hero-assembly-aligned .hero-final-title {
  opacity: 1;
  transform: translateY(0) scale(1.015);
  filter: blur(0);

  transition:
    opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 950ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 800ms ease;

 animation: heroTitleSettle 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes heroTitleSettle {
  0% {
    transform: translateY(18px) scale(0.97);
    filter: blur(6px);
  }

  58% {
  transform: translateY(-5px) scale(1.035);
  filter: blur(0);
}
  }

  100% {
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

  /*
   * Exit title moves upward and fades.
   */
  .hero-assembly-exit .hero-final-title {
    opacity: 0;

    transform:
      translateY(-22px)
      scale(0.98);

    filter: blur(8px);

    transition:
      opacity 350ms ease,
      transform 500ms cubic-bezier(0.76, 0, 0.24, 1),
      filter 400ms ease;
  }

  @media (max-width: 767px) {
    .hero-assembly {
      min-height: 255px;
    }

    .hero-assembly-orbit {
      width: 235px;
      height: 235px;
      min-width: 235px;
      min-height: 235px;
    }

    .hero-orbit-letter {
      font-size: clamp(1.75rem, 8vw, 3rem);
    }

    .hero-assembly-circle .hero-orbit-letter {
      transform:
        translate3d(
          calc(var(--circle-x) * 0.72),
          calc(var(--circle-y) * 0.72),
          0
        )
        rotate(180deg)
        scale(0.78);
    }

    .hero-assembly-aligned .hero-orbit-letter {
      transform:
        translate3d(
          calc(var(--circle-x) * 0.72),
          calc(var(--circle-y) * 0.72),
          0
        )
        rotate(180deg)
        scale(0.84);
    }

    .hero-assembly-exit .hero-orbit-letter {
      transform:
        translate3d(
          calc(var(--circle-x) * 0.92),
          calc(var(--circle-y) * 0.92),
          0
        )
        rotate(220deg)
        scale(0.72);
    }

    .hero-final-title {
      font-size: clamp(3.35rem, 15vw, 5.5rem);
      line-height: 0.86;
      letter-spacing: -0.07em;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-orbit-letter,
    .hero-assembly-orbit,
    .hero-final-title {
      transition: none !important;
    }
  }
`;

export default function Home() {
  return (
    <>
      <style jsx global>{heroAssemblyStyles}</style>
      <main
        id="top"
        className="min-h-screen overflow-hidden bg-[#071311] text-[#f2f6f1] selection:bg-[#8ff5c2] selection:text-[#071311]"
      >
        <Navigation />

        {/* =========================================
          HERO
          ========================================= */}

        <section className="relative min-h-[760px] overflow-hidden border-b border-white/10 pt-24 kinetic-hero md:min-h-screen">
          <div className="pointer-events-none absolute inset-0 z-[2]">
            <KineticNetwork />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[1]">
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ff5c2]/[0.035] blur-[150px]" />

            <div className="absolute -right-48 top-16 h-[650px] w-[650px] rounded-full border border-[#d8b56a]/10" />

            <div className="absolute -right-24 top-40 h-[850px] w-[850px] rounded-full border border-white/[0.035]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] flex-col justify-center px-6 py-20 md:min-h-[calc(100vh-6rem)] lg:px-12 xl:px-20">
            <Reveal>
              <div className="max-w-6xl">
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#8ff5c2]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#8ff5c2]">
                    B2B Lead Generation · Sales Automation
                  </p>
                </div>

                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f2f6f1]/35">
                  MANERDZ / Revenue Systems
                </p>

                <HeroAssembly />

                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                  <div>
                    <p className="max-w-2xl text-lg leading-8 text-[#f2f6f1]/60 md:text-xl">
                      I help B2B businesses find the right
                      prospects, qualify better opportunities,
                      and build repeatable sales workflows with
                      research, automation and AI-assisted
                      processes.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <MagneticButton href="/contact">
                        Build Your Pipeline
                      </MagneticButton>

                      <MagneticButton
                        href="/work"
                        secondary
                      >
                        See the Work
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="border-l border-[#d8b56a]/40 pl-6">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#f2f6f1]/30">
                      Core Approach
                    </p>

                    <p className="mt-3 text-2xl font-semibold leading-tight">
                      AI + Automation
                      <br />
                      <span className="text-[#f2f6f1]/35">
                        + Human Control
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="system-status-float">
              <div className="status-head">
                <span>SYSTEM STATUS</span>

                <span className="status-live">
                  <i />
                  ENGINE ACTIVE
                </span>
              </div>

              <div className="status-row">
                <span>RESEARCH</span>
                <b>READY</b>
              </div>

              <div className="status-row">
                <span>QUALIFICATION</span>
                <b>READY</b>
              </div>

              <div className="status-row">
                <span>OUTREACH</span>
                <b className="in-progress">
                  BUILDING
                </b>
              </div>

              <div className="status-row">
                <span>AI ENGINE</span>
                <b>EVOLVING</b>
              </div>

              <div className="data-wave">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-5 text-[8px] uppercase tracking-[0.28em] text-[#f2f6f1]/30">
              <span>
                Targeted prospecting · Repeatable systems
              </span>

              <Link
                href="/services"
                className="hidden transition hover:text-[#8ff5c2] sm:block"
              >
                Explore services ↓
              </Link>

              <span>01 / 05</span>
            </div>
          </div>
        </section>

        {/* =========================================
          IDEA
          ========================================= */}

        <section className="border-b border-white/10 bg-[#0d1b18]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-28 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56a]">
                The Idea
              </p>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                  Better prospecting starts with{" "}
                  <span className="text-[#8ff5c2]">
                    better targeting, better research,
                  </span>{" "}
                  and a process that can repeat.
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#f2f6f1]/40">
                  MANERDZ is being built around a simple
                  principle: good sales systems start with good
                  information.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================================
          SERVICES
          ========================================= */}

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
            <Reveal>
              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
                    Services
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                    What I build.
                  </h2>
                </div>

                <Link
                  href="/services"
                  className="text-xs uppercase tracking-[0.2em] text-[#d8b56a] transition hover:text-[#8ff5c2]"
                >
                  Open service system ↗
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid border-l border-t border-white/10 md:grid-cols-3">
                {[
                  [
                    "01",
                    "Lead Research",
                    "Find companies that match a clearly defined ideal customer profile.",
                  ],
                  [
                    "02",
                    "Prospect Qualification",
                    "Evaluate fit, decision makers and business signals.",
                  ],
                  [
                    "03",
                    "Sales Automation",
                    "Turn repetitive prospecting and follow-up into a repeatable workflow.",
                  ],
                ].map(
                  ([number, title, description]) => (
                    <Link
                      key={number}
                      href="/services"
                      className="group relative overflow-hidden border-b border-r border-white/10 p-7 transition duration-500 hover:bg-[#8ff5c2]/[0.04] md:p-9"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#8ff5c2] transition-transform duration-500 group-hover:scale-x-100" />

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#d8b56a]">
                          {number}
                        </span>

                        <span className="text-xl text-[#f2f6f1]/20 transition group-hover:text-[#8ff5c2]">
                          ↗
                        </span>
                      </div>

                      <h3 className="mt-14 text-2xl font-semibold transition group-hover:text-[#8ff5c2]">
                        {title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#f2f6f1]/40">
                        {description}
                      </p>
                    </Link>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================================
          SYSTEM
          ========================================= */}

        <section className="border-b border-white/10 bg-[#0d1b18]">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <Reveal>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56a]">
                    The System
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                    MANERDZ
                    <br />
                    <span className="hero-mint">
                      Lead Engine.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-md text-sm leading-7 text-[#f2f6f1]/40">
                    An evolving system connecting research,
                    qualification, outreach, follow-up and
                    optimization into one repeatable process.
                  </p>

                  <Link
                    href="/system"
                    className="mt-8 inline-flex text-xs uppercase tracking-[0.2em] text-[#8ff5c2]"
                  >
                    Explore the system ↗
                  </Link>
                </div>
              </Reveal>

              <Reveal>
                <SystemPreview />
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================
          WORK
          ========================================= */}

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
            <Reveal>
              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56a]">
                    Selected Work
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                    Built in public.
                  </h2>
                </div>

                <Link
                  href="/work"
                  className="text-xs uppercase tracking-[0.2em] text-[#8ff5c2]"
                >
                  View all work ↗
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <Link
                href="/case-studies/icp-research"
                className="group relative block overflow-hidden border border-white/10 bg-[#0d1b18] transition duration-500 hover:border-[#8ff5c2]/40"
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(143,245,194,0.06),transparent_32%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative border-b border-white/10 p-6 md:p-9">
                  <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d8b56a]">
                        Case Study 01
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
                        B2B ICP Research
                        <br />
                        <span className="text-[#f2f6f1]/35">
                          & Lead Qualification
                        </span>
                      </h3>
                    </div>

                    <ScoreCard />
                  </div>
                </div>

                <div className="relative grid md:grid-cols-3">
                  {[
                    [
                      "Target",
                      "US Marketing & Digital Agencies",
                    ],
                    [
                      "Framework",
                      "100-point ICP qualification",
                    ],
                    [
                      "Progress",
                      "1 of 10 prospects validated",
                    ],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border-b border-r border-white/10 p-7 last:border-r-0 md:border-b-0"
                    >
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#f2f6f1]/25">
                        {label}
                      </p>

                      <p className="mt-3 font-semibold leading-6">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative flex items-center justify-between gap-6 border-t border-white/10 p-6 md:p-8">
                  <p className="max-w-2xl text-sm leading-7 text-[#f2f6f1]/40">
                    A repeatable research framework for finding,
                    verifying, qualifying and prioritizing B2B
                    prospects before outreach.
                  </p>

                  <span className="hidden border border-[#8ff5c2]/60 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8ff5c2] transition group-hover:bg-[#8ff5c2] group-hover:text-[#071311] md:inline-block">
                    View Case Study ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* =========================================
          CAPABILITIES
          ========================================= */}

        <section className="border-b border-white/10 bg-[#0d1b18]">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <Reveal>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56a]">
                    Capabilities
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                    Strategy + execution + technology.
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex flex-wrap content-start gap-2.5">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-4 py-2.5 text-xs text-[#f2f6f1]/50 transition duration-300 hover:-translate-y-1 hover:border-[#8ff5c2]/50 hover:bg-[#8ff5c2]/[0.04] hover:text-[#8ff5c2]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================
          ABOUT
          ========================================= */}

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <Reveal>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
                    About MANERDZ
                  </p>

                  <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                    A practical revenue system, not another
                    generic lead list.
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <p className="text-base leading-8 text-[#f2f6f1]/45">
                    MANERDZ combines lead generation, research,
                    qualification, automation and technology into
                    one focused direction—starting manually,
                    documenting what works, then using automation
                    and AI to create leverage.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-5">
                    <Link
                      href="/about"
                      className="text-xs uppercase tracking-[0.2em] text-[#d8b56a] transition hover:text-[#8ff5c2]"
                    >
                      More about MANERDZ ↗
                    </Link>

                    <a
                      href="https://www.linkedin.com/in/harvey-bandajon-5bb05a418/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-[0.2em] text-[#f2f6f1]/35 transition hover:text-[#8ff5c2]"
                    >
                      LinkedIn ↗
                    </a>

                    <a
                      href="https://t.me/HARVEY_BANDAJON"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-[0.2em] text-[#f2f6f1]/35 transition hover:text-[#8ff5c2]"
                    >
                      Telegram ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================
          FINAL CTA
          ========================================= */}

        <section className="border-t border-white/10 bg-[#0d1b18]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-32 md:flex-row md:items-end lg:px-12">
            <Reveal>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8b56a]">
                  Let&apos;s Work Together
                </p>

                <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-8xl">
                  Ready to build a better pipeline?
                </h2>
              </div>
            </Reveal>

            <Reveal>
              <MagneticButton href="/contact">
                Start a Conversation
              </MagneticButton>
            </Reveal>
          </div>
        </section>

        {/* =========================================
          FOOTER
          ========================================= */}

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-[#f2f6f1]/30 md:flex-row md:items-center md:justify-between lg:px-12">
            <p>
              © 2026 MANERDZ. All rights reserved.
            </p>

            <p className="uppercase tracking-[0.2em]">
              B2B Lead Generation · Sales Automation
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://www.linkedin.com/in/harvey-bandajon-5bb05a418/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#8ff5c2]"
              >
                LinkedIn
              </a>

              <a
                href="https://t.me/HARVEY_BANDAJON"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#8ff5c2]"
              >
                Telegram
              </a>

              <a
                href="#top"
                className="transition hover:text-[#8ff5c2]"
              >
                Top ↑
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}