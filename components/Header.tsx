"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#live", label: "Live" },
  { href: "#teachings", label: "Teachings" },
  { href: "#prayer", label: "Prayer" },
  { href: "#events", label: "Events" },
  { href: "#give", label: "Give" },
  { href: "#connect", label: "Connect" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur border-b border-navy-line" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Teruah Global Ministries emblem"
            width={88}
            height={74}
            className="h-9 w-auto"
            priority
          />
          <span className="font-serif text-lg tracking-tight text-ivory">
            Teruah <span className="text-gold">Global</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-slate-soft hover:text-ivory transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#give"
            className="inline-flex items-center rounded-sm border border-gold/70 px-5 py-2.5 text-[14px] font-medium text-gold hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Partner With Us
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-[1.5px] w-6 bg-ivory transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ivory transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ivory transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-20 bg-navy-deep transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 pt-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-navy-line py-4 font-serif text-2xl text-ivory"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#give"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3.5 text-[15px] font-medium text-navy-deep"
          >
            Partner With Us
          </a>
        </nav>
      </div>
    </header>
  );
}
