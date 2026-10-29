import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
};

export default function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <header className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-page">
        <Link
          href="/#connect"
          className="text-[13px] text-slate-soft transition-colors hover:text-gold"
        >
          ← Back to Connect
        </Link>
        <p className="mt-10 text-sm uppercase tracking-[0.08em] text-slate-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ivory md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-slate-soft">{intro}</p>
      </div>
    </header>
  );
}
