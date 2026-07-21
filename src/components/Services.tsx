"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Service = {
  label: string;
  tag: string;
  tagColor: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    label: "Ménage à domicile",
    tag: "Particuliers",
    tagColor: "#1583cc",
    description:
      "Entretien courant de votre logement, régulier ou ponctuel, selon vos habitudes.",
    image: "/image/menage.png",
  },
  {
    label: "Repassage & linge",
    tag: "Particuliers",
    tagColor: "#1583cc",
    description:
      "Repassage soigné et pliage de votre linge, à la pièce ou en abonnement régulier.",
    image: "/image/image1.png",
  },
  {
    label: "Bureaux & locaux professionnels",
    tag: "Entreprises",
    tagColor: "#f7941d",
    description:
      "Nettoyage régulier des bureaux, sols et sanitaires pour un cadre de travail impeccable.",
    image: "/image/image2.png",
  },
  {
    label: "Halls & parties communes",
    tag: "Entreprises",
    tagColor: "#f7941d",
    description:
      "Entretien des halls d'immeuble et parties communes selon un planning adapté à la copropriété.",
    image: "/image/image3.png",
  },
  {
    label: "Gîtes, villas & saisonnier",
    tag: "Locations saisonnières",
    tagColor: "#8dc63f",
    description:
      "Ménage complet entre chaque séjour pour accueillir vos voyageurs dans un logement impeccable.",
    image: "/backsect2.png",
  },
  {
    label: "Remise en état locative",
    tag: "Locations saisonnières",
    tagColor: "#8dc63f",
    description:
      "Nettoyage approfondi du bien avant remise en location ou changement de locataire.",
    image: "/image/backsection3.png",
  },
  {
    label: "Après déménagement ou travaux",
    tag: "Particuliers",
    tagColor: "#1583cc",
    description:
      "Nettoyage de fond après un déménagement ou des travaux, pièce par pièce.",
    image: "/image/photoDroite.png",
  },
  {
    label: "Services complémentaires",
    tag: "Tous publics",
    tagColor: "#14477c",
    description:
      "Vitres, extérieurs et prestations ponctuelles pour compléter votre entretien habituel.",
    image: "/image/image1.png",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];
  const total = SERVICES.length;

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section id="services" className="relative overflow-hidden">
      <Image
        src="/background2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white via-white/85 to-white/95"></div>
      <Container className="relative py-16 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="section-eyebrow">
              Nos services
            </p>
            <h2 className="section-title mt-6 max-w-lg text-4xl font-extrabold leading-tight text-navy-deep sm:text-5xl">
              Des prestations qui couvrent <span className="title-accent text-brand-blue">tout l&apos;entretien</span>
            </h2>
          </Reveal>
          <Reveal className="lg:max-w-sm lg:pb-2" delay={0.15}>
            <p className="text-lg leading-relaxed text-navy/75">
              Du ménage hebdomadaire à la remise en état complète, chaque
              prestation s&apos;adapte à votre situation.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative mt-8">
            <div
              className="pointer-events-none absolute -inset-6 transition-[background] duration-700"
              style={{
                background: `radial-gradient(ellipse at 70% 50%, ${active.tagColor}18 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            ></div>
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 transition-all duration-500 opacity-100 translate-y-0">
                  <span className="h-px w-12 bg-navy/30" aria-hidden="true"></span>
                  <span className="text-sm font-bold tracking-[0.3em] text-navy/50">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="mt-6 text-3xl font-extrabold leading-tight text-navy-deep transition-all duration-500 sm:text-4xl opacity-100 translate-y-0"
                  style={{ transitionDelay: "80ms" }}
                >
                  {active.label}
                </h3>
                <p
                  className="mt-3 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 opacity-100 translate-y-0"
                  style={{ color: active.tagColor, transitionDelay: "160ms" }}
                >
                  {active.tag}
                </p>
                <p
                  className="mt-6 max-w-md text-lg leading-relaxed text-navy/75 transition-all duration-500 opacity-100 translate-y-0"
                  style={{ transitionDelay: "240ms" }}
                >
                  {active.description}
                </p>
                <div className="mt-10 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-navy backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-lg hover:shadow-brand-blue/15"
                    aria-label="Service précédent"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-navy backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-lg hover:shadow-brand-blue/15"
                    aria-label="Service suivant"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-navy/10 transition-all duration-500 opacity-100 scale-100">
                  <div className="relative aspect-4/3">
                    <Image
                      src={active.image}
                      alt={active.label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 transition-[background] duration-700"
                      style={{
                        background: `linear-gradient(160deg, ${active.tagColor}26 0%, transparent 45%, rgba(16,58,102,0.55) 100%)`,
                      }}
                      aria-hidden="true"
                    ></div>
                    <span
                      className="pointer-events-none absolute right-6 top-2 text-[9rem] font-extrabold leading-none text-white/20"
                      aria-hidden="true"
                    >
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="absolute bottom-5 left-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg backdrop-blur-sm transition-colors duration-700"
                      style={{ backgroundColor: `${active.tagColor}e6` }}
                    >
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-8 w-8"
                      >
                        <path d="M8 22L24 9l16 13"></path>
                        <path d="M12 20v18h24V20"></path>
                        <path d="M20 38v-9h8v9"></path>
                        <path d="M37 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <span
                  className="pointer-events-none absolute -left-3 -top-3 h-12 w-12 rounded-tl-3xl border-l-2 border-t-2 transition-colors duration-700"
                  style={{ borderColor: active.tagColor }}
                  aria-hidden="true"
                ></span>
                <span
                  className="pointer-events-none absolute -bottom-3 -right-3 h-12 w-12 rounded-br-3xl border-b-2 border-r-2 transition-colors duration-700"
                  style={{ borderColor: active.tagColor }}
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <div className="relative mt-8 hidden grid-cols-8 gap-x-4 gap-y-5 lg:grid">
              {SERVICES.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex flex-col gap-2 text-left transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                    }`}
                    aria-label={`Aller au service : ${service.label}`}
                  >
                    <span className="h-0.5 w-full overflow-hidden rounded-full bg-navy/15">
                      <span
                        className="block h-full rounded-full bg-navy/40 transition-[width] duration-150 ease-linear"
                        style={
                          isActive
                            ? { width: "100%", backgroundColor: service.tagColor }
                            : { width: "0%" }
                        }
                      ></span>
                    </span>
                    <span className="hidden truncate text-xs font-bold text-navy lg:block">
                      {service.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-base font-bold text-white shadow-xl shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark sm:w-auto sm:px-9 sm:text-lg"
              href="#publics"
            >
              Trouver la formule adaptée
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 12h16M14 6l6 6-6 6"></path>
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
