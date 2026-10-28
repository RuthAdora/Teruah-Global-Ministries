import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy-deep">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt="Teruah Global Ministries — Sounding the Trumpet, Advancing the Kingdom, Psalm 89:15"
            width={210}
            height={252}
            className="h-32 w-auto"
          />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-slate-soft">
            Sounding the trumpet, advancing the Kingdom. Psalm 89:15.
          </p>
        </div>

        <div>
          <p className="text-[13px] uppercase tracking-[0.08em] text-slate-soft">
            Connect globally
          </p>
          <ul className="mt-5 space-y-3 text-[14px] text-slate-soft">
            <li><a href="#live" className="hover:text-ivory">Live services</a></li>
            <li><a href="#teachings" className="hover:text-ivory">Teachings</a></li>
            <li><a href="#prayer" className="hover:text-ivory">Prayer</a></li>
            <li><a href="#events" className="hover:text-ivory">Events</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] uppercase tracking-[0.08em] text-slate-soft">
            Get the app
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-3 rounded-sm border border-navy-line px-4 py-2.5 text-ivory transition-colors hover:border-gold/50"
            >
              <span className="text-[13px]">Get it on Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-sm border border-navy-line px-4 py-2.5 text-ivory transition-colors hover:border-gold/50"
            >
              <span className="text-[13px]">Download on the App Store</span>
            </a>
          </div>
        </div>
      </div>

      <div className="rule" />

      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-[13px] text-slate-soft md:flex-row">
        <span>© {new Date().getFullYear()} Teruah Global Ministries. All rights reserved.</span>
        <span className="font-serif italic text-gold-soft">Same Vision. One Global Family.</span>
      </div>
    </footer>
  );
}
