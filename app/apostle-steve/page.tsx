import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
// import Image from "@public/apostle-steve.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Apostle Steve | Teruah Global Ministries",
  description: "His calling and ministry.",
};

// TODO: replace with Apostle Steve's real story.
const MOMENTS = [
  { label: "The calling", body: "Describe how and when Apostle Steve was called." },
  { label: "The ministry", body: "Describe the work: teaching, prayer, church planting, outreach." },
  { label: "The assignment", body: "Describe the nations, people, or generation he is sent to." },
];

export default function ApostleStevePage() {
  return (
    <main>
      <PageHero
        eyebrow="Apostle Steve"
        title="His calling and ministry."
        intro="A servant of God sent to build, equip, and send. Learn his story and the work he carries."
      />

      <section className="bg-navy pb-20">
        <div className="container-page grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Swap this block for <Image src="/apostle-steve.jpg" ... /> once you have a photo */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-navy-line bg-navy-surface">
  <Image
    src="/apostle-steve.jpg"
    alt="Portrait of Apostle Steve"
    fill
    priority
    sizes="(min-width: 1024px) 40vw, 100vw"
    className="object-cover object-top"
  />
</div>

          <div>
            <h2 className="font-serif text-3xl text-ivory md:text-4xl">Apostle Steve</h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-slate-soft">
              <p>
                Write the opening of his biography here: where he comes from, his background,
                and the moment his life took the direction it has today.
              </p>
              <p>
                Add a second paragraph about the founding of Teruah Global Ministries and what
                God has done through it so far.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              {MOMENTS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-sm border border-navy-line bg-navy-surface p-6"
                >
                  <h3 className="text-[15px] text-ivory">{m.label}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-soft">{m.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.tiktok.com/@apostle_steve_"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-gold px-6 py-3.5 text-[15px] font-medium text-gold transition-colors hover:bg-gold hover:text-navy-deep"
              >
                Watch on TikTok
              </a>
              <Link
                href="/social"
                className="rounded-sm border border-navy-line px-6 py-3.5 text-[15px] text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                All channels
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
