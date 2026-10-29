import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | Teruah Global Ministries",
  description: "Our vision, mission, and mandate.",
};

// TODO: replace the text below with your ministry's real wording.
const PILLARS = [
  {
    title: "Vision",
    body: "Write your vision statement here: what God has shown you Teruah Global will become.",
  },
  {
    title: "Mission",
    body: "Write your mission here: what the ministry does, and for whom, to fulfil that vision.",
  },
  {
    title: "Mandate",
    body: "Write your mandate here: the specific assignment and scripture you carry.",
  },
];

const BELIEFS = [
  "The authority of the Word of God",
  "Prayer as the foundation of the work",
  "Raising and sending people into their calling",
  "Partnership across nations",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="About Teruah Global Ministries"
        intro="Our vision, mission, and mandate, and the convictions that shape everything we do."
      />

      <section className="bg-navy pb-20">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-sm border border-navy-line bg-navy-surface p-8"
            >
              <h2 className="font-serif text-2xl text-ivory">{p.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-serif text-3xl text-ivory md:text-4xl">What we stand for</h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-slate-soft">
              Add a short paragraph about the ministry&apos;s story: when it began, where it
              serves, and who it serves.
            </p>
          </div>
          <ul className="grid gap-3">
            {BELIEFS.map((b) => (
              <li
                key={b}
                className="rounded-sm border border-navy-line px-6 py-4 text-[15px] text-ivory"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-md font-serif text-2xl text-ivory md:text-3xl">
            Walk with us in the work.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/apostle-steve"
              className="rounded-sm border border-navy-line px-6 py-3.5 text-[15px] text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Meet Apostle Steve
            </Link>
            <Link
              href="/social"
              className="rounded-sm border border-gold px-6 py-3.5 text-[15px] font-medium text-gold transition-colors hover:bg-gold hover:text-navy-deep"
            >
              Follow along
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
