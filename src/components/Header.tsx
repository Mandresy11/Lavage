"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { label: "Services" },
  { label: "À propos" },
  { label: "Engagements" },
  { label: "Nos clients" },
  { label: "Témoignages" },
  { label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full justify-center px-4 py-4 sm:py-5">
      <div className="relative z-10 flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-white/80 bg-white/95 py-2 pl-2.5 pr-2 shadow-[0_12px_35px_rgba(10,33,72,0.16)] backdrop-blur-xl sm:gap-4 xl:py-2.5 xl:pl-3 xl:pr-2.5">
        <div className="min-w-0 shrink-0">
          <a href="#accueil" className="flex items-center gap-2.5 rounded-full">
            <Image
              src="/logo.jpg"
              alt="Clean &amp; Solutions"
              width={96}
              height={96}
              className="h-12 w-12 shrink-0 rounded-full mix-blend-multiply xl:h-11 xl:w-11"
            />
            <span className="min-w-0 xl:hidden">
              <span className="block truncate text-[15px] font-extrabold leading-tight text-navy-deep">
                Clean <span className="text-brand-blue">&amp;</span> Solutions
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.16em] text-brand-green">
                Guadeloupe
              </span>
            </span>
          </a>
        </div>
        <nav aria-label="Navigation principale" className="hidden items-center gap-4 xl:flex xl:gap-6">
          {navLinks.map((link) => (
            link.href ? (
              <a
                key={link.label}
                className="whitespace-nowrap text-sm font-semibold text-navy transition-colors hover:text-brand-blue focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue xl:text-[15px]"
                href={link.href}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="cursor-default whitespace-nowrap text-sm font-semibold text-navy xl:text-[15px]"
              >
                {link.label}
              </span>
            )
          ))}
        </nav>
        <div className="hidden xl:block">
          <a
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
            href="#contact"
          >
            Demander un devis
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-3.5 w-3.5"
            >
              <path d="M9 6l6 6-6 6"></path>
            </svg>
          </a>
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-md shadow-navy/20 transition-colors hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue xl:hidden"
          tabIndex={0}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M6 6l12 12M18 6L6 18"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg>
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 top-full mt-2 max-h-[calc(100dvh-6rem)] w-full overflow-y-auto rounded-2xl bg-white p-4 shadow-lg shadow-navy/10 xl:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.href ? (
                  <a
                    key={link.label}
                    className="whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy/5 hover:text-brand-blue"
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="cursor-default whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold text-navy"
                  >
                    {link.label}
                  </span>
                )
              ))}
              <a
                className="mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander un devis
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                >
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
