"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Sermons", "Prophetic", "Bible"];

const TEACHINGS = [
  {
    title: "The Prophetic Voice for This Season",
    category: "Prophetic",
    duration: "45:12",
  },
  {
    title: "Walking in the Glory: From Genesis to Revelation",
    category: "Bible",
    duration: "52:36",
  },
  {
    title: "The Psychology of Living Waters",
    category: "Sermons",
    duration: "48:20",
  },
  {
    title: "Spiritual Gates and Access",
    category: "Prophetic",
    duration: "46:11",
  },
  {
    title: "Gideon, Altars and Jehovah Shalom",
    category: "Sermons",
    duration: "55:07",
  },
];

export default function Teachings() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? TEACHINGS : TEACHINGS.filter((t) => t.category === active);

  return (
    <section id="teachings" className="bg-navy py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Teachings</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
              A library to grow in the Word.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-sm px-4 py-2 text-[14px] transition-colors ${
                  active === cat
                    ? "bg-gold text-navy-deep"
                    : "border border-navy-line text-slate-soft hover:text-ivory"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 divide-y divide-navy-line border-y border-navy-line">
          {filtered.map((t) => (
            <a
              key={t.title}
              href="#"
              className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-navy-surface/40"
            >
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[13px] tabular-nums text-slate-soft">{t.duration}</span>
                <div>
                  <h3 className="font-serif text-xl text-ivory group-hover:text-gold-soft transition-colors md:text-2xl">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-soft">
                    Apostle Steve · {t.category}
                  </p>
                </div>
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                className="hidden shrink-0 text-slate-soft group-hover:text-gold-soft sm:block"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
