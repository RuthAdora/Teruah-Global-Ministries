const OPTIONS = [
  { title: "Ministry Support", desc: "Sow into the vision and its ongoing outreach." },
  { title: "Partnership", desc: "Become a monthly partner in advancing the Kingdom." },
  { title: "Giving Information", desc: "M-Pesa, bank transfer, and global giving options." },
];

export default function Give() {
  return (
    <section id="give" className="bg-navy-deep py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
        <div>
          <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Give</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Partner with us.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-slate-soft">
            Together we can reach more souls and advance the Kingdom of God. Every gift, of
            every size, moves the mission forward.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-[15px] font-medium text-navy-deep"
          >
            Give Now
          </a>

          <blockquote className="mt-14 border-l border-gold/50 pl-6 font-serif text-lg italic leading-relaxed text-slate-soft">
            "Each one must give as he has decided in his heart, not reluctantly or under
            compulsion, for God loves a cheerful giver."
            <footer className="mt-3 text-sm not-italic text-gold-soft">2 Corinthians 9:7</footer>
          </blockquote>
        </div>

        <div className="divide-y divide-navy-line rounded-sm border border-navy-line bg-navy-surface">
          {OPTIONS.map((o) => (
            <div key={o.title} className="flex items-center justify-between gap-6 p-7">
              <div>
                <h3 className="text-[15px] text-ivory">{o.title}</h3>
                <p className="mt-1 text-[13px] text-slate-soft">{o.desc}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#8A93A8" strokeWidth="1.3" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
