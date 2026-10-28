export default function About() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-page grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Welcome</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            A global family, gathered around the Word.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-slate-soft">
            Teruah Global Ministries is a house of prayer, prophecy, and apostolic teaching led
            by Apostle Steve. Whether you join us from the sanctuary or from the other side of
            the world, you are part of one family, one vision, one Kingdom.
          </p>
          <a
            href="#connect"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-gold-soft"
          >
            Learn about our vision and mandate
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
        </div>

        <div className="relative rounded-sm border border-navy-line bg-navy-surface p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Featured message</p>
          <h3 className="mt-4 font-serif text-3xl text-ivory">The Glory That Restores</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-soft">
            A word for the weary and the waiting — how the presence of God restores what was
            taken, and rebuilds what was broken, in less time than it took to lose it.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label="Watch The Glory That Restores"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-navy-deep"
            >
              <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
                <path d="M0 0l14 8-14 8V0z" />
              </svg>
            </button>
            <div>
              <div className="text-[14px] text-ivory">Apostle Steve</div>
              <div className="text-[13px] text-slate-soft">58:12 · Sunday Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
