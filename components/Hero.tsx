export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep pt-36 pb-24 md:pt-48 md:pb-32">
      {/* Horizon glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-horizon" />

      {/* Globe illustration */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[58%] w-[140%] max-w-none -translate-x-1/2 opacity-90 md:top-[52%] md:w-[80%]"
        viewBox="0 0 800 800"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="400" cy="400" r="300" stroke="#22304F" strokeWidth="1" />
        <circle cx="400" cy="400" r="300" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx="400"
            cy="400"
            rx={300 - i * 0}
            ry="300"
            transform={`rotate(${i * 30} 400 400) scale(${0.15 + i * 0.17},1)`}
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity="0.25"
          />
        ))}
        <line x1="100" y1="400" x2="700" y2="400" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
        <line x1="400" y1="100" x2="400" y2="700" stroke="#22304F" strokeWidth="0.5" opacity="0.5" />
      </svg>

      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="mb-6 font-serif text-sm italic text-gold-soft">Psalm 89:15</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.08] text-ivory sm:text-6xl md:text-[4.2rem]">
            Sounding the trumpet.
            <br />
            Advancing the Kingdom.
          </h1>
          <p className="mt-7 max-w-md text-[17px] leading-relaxed text-slate-soft">
            Teruah Global Ministries, with Apostle Steve. Together we are taking the message
            of the Kingdom to the nations — one gathering, one prayer, one soul at a time.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#live"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-[15px] font-medium text-navy-deep transition-transform hover:translate-y-[-1px]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-navy-deep" />
              Watch Live
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center rounded-sm border border-navy-line px-7 py-4 text-[15px] font-medium text-ivory hover:border-gold/60 transition-colors"
            >
              See Upcoming Services
            </a>
          </div>
        </div>

        <div className="rule mt-20" />

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "120+", label: "Nations reached" },
            { value: "Weekly", label: "Global prayer meetings" },
            { value: "Sun", label: "Live Sunday service" },
            { value: "24/7", label: "Prayer wall & resources" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-2xl text-gold-soft sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-[13px] text-slate-soft">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
