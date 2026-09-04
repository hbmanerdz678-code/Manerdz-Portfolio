const scoring = [
  ["Correct Industry", 20],
  ["Company Size", 15],
  ["US Location", 15],
  ["Decision Maker", 15],
  ["Strong B2B Service", 10],
  ["Growth Signal", 10],
  ["Clear Value Proposition", 5],
  ["Contact Information", 5],
  ["Capacity Potential", 5],
];

const process = [
  ["01", "Find", "Discover potential agencies through targeted directories."],
  ["02", "Research", "Study services, customers, positioning and business context."],
  ["03", "Verify", "Validate location, company size, services and activity."],
  ["04", "Identify", "Find the founder, CEO or sales decision-maker."],
  ["05", "Analyze", "Look for hiring, expansion and other useful signals."],
  ["06", "Score", "Evaluate the company against the 100-point ICP model."],
  ["07", "Record", "Document the evidence, score and qualification decision."],
];

export default function ICPResearchCaseStudy() {
  return (
    <main className="min-h-screen bg-[#071311] text-[#f1eee8]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071311]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="/" className="text-lg font-black tracking-[0.25em] text-white">
            MANERDZ.
          </a>
          <a
            href="/#work"
            className="border border-white/15 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/60 transition hover:border-[#8ff5c2] hover:text-[#8ff5c2]"
          >
            Back to Work
          </a>
        </nav>
      </header>

      <section className="border-b border-white/10 pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
            MANERDZ AI Lead Engine · Case Study 01
          </p>

          <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            B2B ICP RESEARCH
            <br />
            <span className="text-[#8ff5c2]">& LEAD QUALIFICATION.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            A structured prospect research and qualification system designed
            to identify high-fit B2B companies before outreach begins.
          </p>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["96/100", "Sample qualification score"],
              ["1 / 10", "Prospects currently validated"],
              ["100", "Points in qualification model"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#0d1b18] p-7">
                <p className="text-4xl font-bold text-[#8ff5c2]">{value}</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/30">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
            01 — The Objective
          </p>
          <div>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Stop treating every lead the same.
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/45">
              The goal was to define and validate an Ideal Customer Profile
              for a B2B lead-generation service. Instead of collecting large
              volumes of generic contacts, the system prioritizes companies
              that match specific business criteria.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
            02 — The ICP
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">
            US Marketing & Digital Agencies
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "United States", "US-based company"],
              ["02", "5–50 Employees", "Small to mid-sized agency"],
              ["03", "Commercial Services", "SEO, PPC, web, content, etc."],
              ["04", "Decision Maker", "Founder, CEO or sales leader"],
              ["05", "Growth Signal", "Hiring, expansion or activity"],
              ["06", "Clear Value", "Understandable offer + market"],
            ].map(([number, title, text]) => (
              <div key={number} className="border border-white/10 p-7">
                <span className="text-sm text-[#8ff5c2]">{number}</span>
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
          03 — Research Framework
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">
          Find → Research → Verify → Score → Record
        </h2>

        <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, text]) => (
            <div key={number} className="border-b border-r border-white/10 p-7">
              <span className="text-xs font-bold text-[#8ff5c2]">{number}</span>
              <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/40">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
                04 — Qualification Model
              </p>
              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                100 points.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/45">
                Every prospect is evaluated against the same criteria so
                qualification stays consistent and repeatable.
              </p>
            </div>

            <div className="border border-white/10">
              {scoring.map(([label, points]) => (
                <div key={label} className="flex items-center justify-between border-b border-white/10 px-6 py-5 last:border-b-0">
                  <span className="text-sm text-white/65">{label}</span>
                  <span className="font-bold text-[#8ff5c2]">{points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
          05 — Prospect Example
        </p>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-5xl font-bold md:text-7xl">Volume Nine</h2>
            <p className="mt-4 text-white/40">Denver, Colorado · Digital Marketing Agency</p>
          </div>

          <div className="md:text-right">
            <p className="text-6xl font-bold text-[#8ff5c2]">
              96<span className="text-2xl text-white/30">/100</span>
            </p>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
              High Priority
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            ["Company Size", "10–49 employees"],
            ["Decision Maker", "CEO / Owner identified"],
            ["Services", "SEO · PPC · Social · Content · AI SEO/GEO"],
            ["Market", "US-based"],
            ["Commercial Fit", "Strong B2B service offering"],
            ["Activity Signal", "Careers + active company presence"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#0d1b18] p-7">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">{label}</p>
              <p className="mt-3 font-semibold leading-6">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl border-l border-[#8ff5c2] pl-6 text-base leading-8 text-white/45">
          The 96/100 score represents fit against the research framework. It is
          a qualification result, not a claim of revenue or campaign performance.
        </p>
      </section>

      <section className="border-y border-white/10 bg-[#0d1b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
                06 — Documentation
              </p>
              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                Research backed by a working tracker.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/45">
                The project is documented in an Excel workbook containing the
                ICP definition, scoring model, prospect research, source log,
                portfolio copy and current task checklist.
              </p>
              <p className="mt-7 text-sm text-white/30">
                The public case study summarizes the work; the full workbook
                remains supporting documentation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["ICP Definition", "100-Point Scoring", "Prospect Research", "Research Sources", "Case Study", "Project Checklist"].map((item) => (
                <div key={item} className="border border-white/10 p-6">
                  <span className="text-[#8ff5c2]">+</span>
                  <p className="mt-6 text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="border border-[#8ff5c2]/25 bg-[#8ff5c2]/5 p-8 md:p-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ff5c2]">
            Current Status
          </p>
          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            1 of 10 prospects validated.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
            The next step is to research additional agencies, compare patterns
            and refine the ICP before moving into outreach and automation.
          </p>
          <div className="mt-8 h-2 max-w-xl overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[10%] bg-[#8ff5c2]" />
          </div>
          <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/30">
            ICP validation progress · 10%
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-xs text-white/30 lg:px-12">
          <p>© 2026 MANERDZ.</p>
          <a href="/" className="transition hover:text-[#8ff5c2]">Back to MANERDZ ↗</a>
        </div>
      </footer>
    </main>
  );
}
