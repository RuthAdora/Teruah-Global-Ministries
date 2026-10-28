const SCHEDULE = [
  { name: "Sunday Service", cadence: "Sundays · 9:00 AM (EAT)" },
  { name: "Teruah Experience", cadence: "Monthly gathering" },
  { name: "Global Prayer Meeting", cadence: "Weekly · 9:00 PM (EAT)" },
];

export default function Live() {
  return (
    <section id="live" className="bg-navy-deep py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Live</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Join us, from anywhere in the world.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-sm border border-navy-line bg-gradient-to-br from-navy-surface to-navy-deep p-8 md:p-12">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-[13px] font-medium tracking-wide text-red-400">LIVE NOW</span>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-ivory md:text-4xl">Sunday Service</h3>
              <p className="mt-2 max-w-sm text-[15px] text-slate-soft">
                Worship, the Word, and ministry — streaming live for the global family.
              </p>
              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-[15px] font-medium text-navy-deep"
              >
                <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l14 8-14 8V0z" />
                </svg>
                Watch Live
              </button>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-navy-line rounded-sm border border-navy-line bg-navy-surface">
            <div className="p-6">
              <p className="text-[13px] uppercase tracking-[0.08em] text-slate-soft">
                Service schedule
              </p>
            </div>
            {SCHEDULE.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-6">
                <div>
                  <div className="text-[15px] text-ivory">{item.name}</div>
                  <div className="mt-1 text-[13px] text-slate-soft">{item.cadence}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#8A93A8" strokeWidth="1.3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
