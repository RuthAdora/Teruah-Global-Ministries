const EVENTS = [
  {
    day: "27",
    mon: "SEP",
    title: "Teruah Experience",
    detail: "Monthly Gathering · 9:00 PM – 12:00 AM (EAT)",
  },
  {
    day: "12",
    mon: "OCT",
    title: "Global Prayer Conference",
    detail: "Online · 7:00 PM – 10:00 PM (EAT)",
  },
  {
    day: "08",
    mon: "NOV",
    title: "The Glory Conference",
    detail: "Nairobi, Kenya · Details coming soon",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-navy py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Events</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Worship. Word. Prayer. Revival.
            </h2>
          </div>
          <a href="#connect" className="text-[15px] font-medium text-gold-soft">
            View all events
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {EVENTS.map((ev) => (
            <div
              key={ev.title}
              className="flex gap-5 rounded-sm border border-navy-line bg-navy-surface p-7"
            >
              <div className="shrink-0 text-center">
                <div className="font-serif text-3xl text-gold-soft">{ev.day}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.08em] text-slate-soft">
                  {ev.mon}
                </div>
              </div>
              <div className="border-l border-navy-line pl-5">
                <h3 className="font-serif text-lg leading-snug text-ivory">{ev.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-soft">{ev.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
