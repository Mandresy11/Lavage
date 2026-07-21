"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    number: "01",
    title: "La proximité avant tout",
    description:
      "Une entreprise locale, une relation humaine et durable : on prend le temps de comprendre vos besoins.",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </>
    ),
  },
  {
    number: "02",
    title: "Une équipe réactive",
    description:
      "Urgence, imprévu, changement de planning : on fait le maximum pour intervenir rapidement.",
    icon: (
      <>
        <circle cx="12" cy="7" r="2.8"></circle>
        <path d="M7.5 20c.4-2.7 2.2-4.5 4.5-4.5s4.1 1.8 4.5 4.5"></path>
        <circle cx="4.8" cy="9" r="2.2"></circle>
        <path d="M1.5 18c.3-2.2 1.7-3.7 3.6-3.7"></path>
        <circle cx="19.2" cy="9" r="2.2"></circle>
        <path d="M22.5 18c-.3-2.2-1.7-3.7-3.6-3.7"></path>
      </>
    ),
  },
  {
    number: "03",
    title: "Des prestations personnalisées",
    description: "Des solutions adaptées à vos besoins et à votre budget.",
    icon: (
      <>
        <path d="M10 10h6l-1 11h-4z"></path>
        <path d="M11 10V7h4v3"></path>
        <path d="M11 7c-2 0-3-1.5-5-1.5"></path>
        <path d="M6 3.5v0M4 6v0M6 8.5v0" strokeWidth="2.6"></path>
        <path
          d="M19 4l.7 1.8L21.5 6.5l-1.8.7L19 9l-.7-1.8-1.8-.7 1.8-.7z"
          strokeWidth="1.4"
        ></path>
      </>
    ),
  },
  {
    number: "04",
    title: "Un personnel de confiance",
    description:
      "Des intervenants sélectionnés, formés et accompagnés : soigneux, discrets, respectueux de vos lieux.",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"></path>
        <path d="M9 11.5l2 2 4-4"></path>
      </>
    ),
  },
];

export function Commitments() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="pourquoi" className="relative overflow-hidden bg-midnight">
      <Image
        alt=""
        fill
        sizes="100vw"
        src="/backHero.png"
        className="object-cover object-right opacity-10"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-midnight via-midnight/95 to-midnight/60"
        aria-hidden="true"
      ></div>
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className="pointer-events-none absolute -left-16 top-10 h-80 w-80 text-midnight-soft/80"
        aria-hidden="true"
      >
        <path d="M50 95c-2-18-1-33 3-45-8 6-19 8-30 5 9-4 17-10 22-17-10 2-20-1-27-8 10-1 19-4 26-9-8-2-14-8-16-16 8 3 16 4 23 3-3-4-4-9-3-14 5 5 11 8 17 9 7 1 13 5 16 11 4 8 3 17-2 24-6 9-14 21-16 32-1 8-2 17-1 25h-12z"></path>
      </svg>
      <Container className="relative grid gap-14 py-24 lg:grid-cols-[1fr_1.35fr] lg:gap-20 lg:py-32">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="section-eyebrow section-eyebrow-dark">
            Nos engagements
          </p>
          <h2 className="section-title section-title-on-dark mt-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Pourquoi choisir Clean <span className="title-accent text-brand-green">&</span>{" "}
            Solutions ?
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/80">
            Des services pensés pour vous simplifier la vie, au quotidien.
          </p>
          <a
            className="mt-9 hidden items-center gap-10 rounded-lg bg-brand-orange px-7 py-4 font-bold text-white shadow-xl shadow-brand-orange/25 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark lg:inline-flex"
            href="#contact"
          >
            Demander un devis gratuit
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M4 12h16M14 6l6 6-6 6"></path>
            </svg>
          </a>
          <p className="mt-14 font-sans text-4xl font-bold leading-tight text-wave-light">
            La propreté,
            <span className="ml-10 block">
              notre métier.
              <svg
                viewBox="0 0 160 12"
                className="mt-1 h-2.5 w-40 text-brand-green"
                aria-hidden="true"
              >
                <path
                  d="M4 8c30-6 60-6 78-3 20 3 50 2 74-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </p>
        </Reveal>
        <div>
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.number} delay={index * 0.09}>
                  <div
                    className={`overflow-hidden rounded-[20px] border border-l-[8px] transition-all duration-300 ${
                      isOpen
                        ? "border-[#dcebbd] border-l-[#91cf2b] bg-[#eff8da] shadow-xl shadow-black/10"
                        : "border-white/15 border-l-transparent bg-white/5 backdrop-blur-sm hover:bg-white/10"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center gap-3 px-4 py-5 text-left sm:gap-5 sm:px-7 sm:py-7"
                    >
                      <span
                        className={`text-2xl font-extrabold tracking-[-0.04em] sm:text-4xl ${
                          isOpen ? "text-[#0d376f]" : "text-white"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`hidden h-12 w-px sm:block ${
                          isOpen ? "bg-[#0d376f]/15" : "bg-white/15"
                        }`}
                        aria-hidden="true"
                      ></span>
                      <span
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 ${
                          isOpen ? "bg-[#dcefae]" : "bg-green-pastel"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 text-[#8fc72c] sm:h-8 sm:w-8"
                        >
                          {item.icon}
                        </svg>
                      </span>
                      <span
                        className={`flex-1 text-lg font-extrabold sm:text-xl ${
                          isOpen ? "text-[#0d376f]" : "text-white"
                        }`}
                      >
                        {item.title}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-[#0d376f]"
                            : "text-white/80"
                        }`}
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-6 text-[15px] leading-[1.65] text-[#326aa0] sm:pb-7 sm:pl-[214px] sm:pr-10 sm:text-[17px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.38}>
            <div className="mt-10 flex flex-wrap items-center gap-5 rounded-2xl bg-green-pastel px-6 py-6 sm:px-8">
              <span className="inline-flex items-center gap-2 rounded-xl bg-brand-green/20 px-3.5 py-2.5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-sm font-extrabold text-white">
                  %
                </span>
                <span className="text-xl font-extrabold text-navy-deep">
                  −50%
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-extrabold text-navy-deep">
                  Crédit d&#x27;impôt immédiat pour les particuliers
                </h3>
                <p className="mt-1 text-navy/75">
                  Avance immédiate de 50 % sur votre prestation éligible.*
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="hidden h-14 w-14 shrink-0 text-brand-green sm:block"
              >
                <path d="M5 12c0-3.5 3-6 7.5-6 4 0 7 2.3 7 5.5 0 1.8-.9 3.3-2.3 4.3l-.2 2.7h-2.5l-.3-1.3a10 10 0 0 1-3.4 0l-.3 1.3H8l-.2-2.6C6.2 15 5 13.6 5 12z"></path>
                <path d="M5.5 11c-1.3 0-2-.7-2-2"></path>
                <path d="M10 6.3c.3-1 1.2-1.8 2.4-1.8 1.1 0 2 .7 2.4 1.7"></path>
                <circle cx="16.5" cy="11" r="0.4" fill="currentColor" stroke="none"></circle>
                <path d="M11 11.5h3M12.5 10v3" strokeWidth="1.5"></path>
              </svg>
            </div>
            <p className="mt-4 text-sm text-white/50">
              * Sous conditions d&#x27;éligibilité en vigueur.
            </p>
          </Reveal>
          <a
            className="mt-10 flex items-center justify-center gap-3 rounded-lg bg-brand-orange px-7 py-4 font-bold text-white shadow-xl shadow-brand-orange/25 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark lg:hidden"
            href="#contact"
          >
            Demander un devis gratuit
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M4 12h16M14 6l6 6-6 6"></path>
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
