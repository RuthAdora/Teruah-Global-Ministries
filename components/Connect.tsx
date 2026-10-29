"use client";

import { useState } from "react";
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SOCIALS } from "@/lib/socials";

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
    href: "/social", // scrolls to the social icons on this page
  },
];
// WhatsApp number: international format, digits only (+254 111 755 539 -> 254111755539)
const WHATSAPP_NUMBER = "254111755539";
const WHATSAPP_MESSAGE = "Hello Teruah Global Ministries, I would like to connect.";


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

          
        </div>
      </div>
    </section>
  );
}