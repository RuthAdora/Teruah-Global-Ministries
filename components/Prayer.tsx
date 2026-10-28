"use client";

const RESOURCES = [
  {
    title: "Prayer Wall",
    desc: "Read and share testimonies from the global family.",
  },
  {
    title: "Prayer Resources",
    desc: "Guides, prayers, and declarations for daily use.",
  },
  {
    title: "Daily Prayer Points",
    desc: "Be encouraged and equipped every day of the week.",
  },
];

export default function Prayer() {
  return (
    <section id="prayer" className="bg-navy-deep py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Prayer</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Prayer changes things.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-slate-soft">
            Submit your prayer request and let's stand with you in faith. Every request is
            covered by our prayer team, in confidence.
          </p>

          <form className="mt-10 flex flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="prayer-request" className="sr-only">
              Your prayer request
            </label>
            <input
              id="prayer-request"
              type="text"
              placeholder="Share what's on your heart"
              className="w-full rounded-sm border border-navy-line bg-navy-surface px-5 py-4 text-[15px] text-ivory placeholder:text-slate-soft focus:border-gold"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-gold px-6 py-4 text-[15px] font-medium text-navy-deep"
            >
              Submit Request
            </button>
          </form>

          <blockquote className="mt-14 border-l border-gold/50 pl-6 font-serif text-lg italic leading-relaxed text-slate-soft">
            "Call to Me, and I will answer you, and show you great and mighty things, which you
            do not know."
            <footer className="mt-3 text-sm not-italic text-gold-soft">Jeremiah 33:3</footer>
          </blockquote>
        </div>

        <div className="grid content-start gap-4">
          {RESOURCES.map((r) => (
            <div
              key={r.title}
              className="rounded-sm border border-navy-line bg-navy-surface p-7 transition-colors hover:border-gold/40"
            >
              <h3 className="font-serif text-xl text-ivory">{r.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-soft">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
