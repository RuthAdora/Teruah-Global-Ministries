import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SOCIALS } from "@/lib/socials";

export const metadata: Metadata = {
  title: "Social Media | Teruah Global Ministries",
  description: "Follow and engage with us daily.",
};

export default function SocialPage() {
  return (
    <main>
      <PageHero
        eyebrow="Social Media"
        title="Follow and engage with us daily."
        intro="Choose where you want to meet us: watch, message, or write. Every channel reaches the same team."
      />

      <section className="bg-navy pb-24">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIALS.map(({ name, handle, desc, action, href, Icon }) => {
            const isExternal = href.startsWith("http");
            return (
              <a
                key={name}
                href={href}
                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex flex-col rounded-sm border border-navy-line bg-navy-surface p-8 transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-line text-slate-soft transition-colors group-hover:border-gold group-hover:text-gold">
                  <Icon size={20} />
                </span>
                <h2 className="mt-6 font-serif text-2xl text-ivory">{name}</h2>
                <p className="mt-1 text-[13px] text-gold">{handle}</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-soft">{desc}</p>
                <span className="mt-8 text-[14px] text-ivory transition-colors group-hover:text-gold">
                  {action} →
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
