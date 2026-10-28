"use client";

import Link from "next/link";
import { FaYoutube, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

/* ─────────── EDIT YOUR LINKS HERE ─────────── */

const LINKS = [
  {
    title: "About Teruah Global Ministries",
    desc: "Our vision, mission, and mandate.",
    href: "/about", // change to your real page, e.g. "/#about" if it's a section
  },
  {
    title: "Apostle Steve",
    desc: "His calling and ministry.",
    href: "/apostle-steve", // change to your real page
  },
  {
    title: "Social Media",
    desc: "Follow and engage with us daily.",
    href: "#social", // scrolls to the social icons on this page
  },
];
// WhatsApp number: international format, digits only (+254 111 755 539 -> 254111755539)
const WHATSAPP_NUMBER = "254111755539";
const WHATSAPP_MESSAGE = "Hello Teruah Global Ministries, I would like to connect.";
const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@apostle_steve_?is_from_webapp=1&sender_device=pc",
    Icon: FaTiktok,
  },
    {
    name: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    Icon: FaWhatsapp,
  },
  {
    name: "Email",
    href: "mailto:stephenmuthusi001@gmail.com",
    Icon: MdOutlineEmail,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/ApostleSteve.M",
    Icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Teruahglobalministries",
    Icon: FaYoutube,
  },
];

/* ──────────────────────────────────────────── */

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 transition-transform group-hover:translate-x-1"
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" stroke="#8A93A8" strokeWidth="1.3" />
  </svg>
);

export default function Connect() {
  return (
    <section id="connect" className="bg-navy py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-sm uppercase tracking-[0.08em] text-slate-soft">Connect</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Together in the Kingdom.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-slate-soft">
            Reach out, follow along, or send us a word — we would love to hear from you and
            walk with you.
          </p>

          <div id="social" className="mt-10 flex flex-wrap gap-4 scroll-mt-28">
            {SOCIALS.map(({ name, href, Icon }) => {
              const isExternal = href.startsWith("http");
              return (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  title={name}
                  {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-line text-slate-soft transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              className="group flex items-center justify-between gap-6 rounded-sm border border-navy-line bg-navy-surface p-6 transition-colors hover:border-gold"
            >
              <div>
                <h3 className="text-[15px] text-ivory">{l.title}</h3>
                <p className="mt-1 text-[13px] text-slate-soft">{l.desc}</p>
              </div>
              <Arrow />
            </Link>
          ))}

          <form
            className="mt-2 flex flex-col gap-4 rounded-sm border border-navy-line bg-navy-surface p-6 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="contact-email" className="sr-only">
              Your email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-sm border border-navy-line bg-navy-deep px-5 py-3.5 text-[15px] text-ivory placeholder:text-slate-soft focus:border-gold"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm border border-gold px-6 py-3.5 text-[15px] font-medium text-gold hover:bg-gold hover:text-navy-deep transition-colors"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}