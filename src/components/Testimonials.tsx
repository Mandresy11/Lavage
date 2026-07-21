"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  accentHex: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    accentHex: "#f7941d",
    initials: "NR",
    name: "Nathalie R.",
    role: "Particulier — ménage régulier",
    location: "Le Gosier",
    quote:
      "Une équipe ponctuelle et soigneuse. Depuis qu'ils s'occupent de la maison, je rentre le soir l'esprit tranquille. Le crédit d'impôt immédiat est un vrai plus.",
  },
  {
    accentHex: "#1583cc",
    initials: "MD",
    name: "Marc D.",
    role: "Gérant d'un cabinet",
    location: "Pointe-à-Pitre",
    quote:
      "Nos bureaux sont impeccables chaque matin, sans que l'on ait à y penser. Les interventions se font en dehors de nos horaires, c'est exactement ce qu'il nous fallait.",
  },
  {
    accentHex: "#8dc63f",
    initials: "SL",
    name: "Sophie L.",
    role: "Propriétaire de gîtes",
    location: "Sainte-Anne",
    quote:
      "Entre deux locations, le gîte est rendu nickel : linge prêt, cuisine parfaite. Mes voyageurs le remarquent dans leurs avis, et moi je gagne un temps précieux.",
  },
  {
    accentHex: "#14477c",
    initials: "IM",
    name: "Isabelle M.",
    role: "Particulier — repassage & linge",
    location: "Petit-Bourg",
    quote:
      "Le repassage est toujours rendu soigné, plié et prêt à ranger. C'est une charge en moins chaque semaine, et la même intervenante revient à chaque fois.",
  },
  {
    accentHex: "#f7941d",
    initials: "JB",
    name: "Julien B.",
    role: "Remise en état après travaux",
    location: "Baie-Mahault",
    quote:
      "Après nos travaux de rénovation, l'appartement a été remis à neuf en une journée : poussière, traces, vitres… On n'aurait jamais fait ça seuls.",
  },
  {
    accentHex: "#1583cc",
    initials: "CT",
    name: "Claire T.",
    role: "Syndic de copropriété",
    location: "Basse-Terre",
    quote:
      "Les parties communes de notre copropriété sont enfin entretenues avec régularité. Les résidents le remarquent et le conseil syndical est ravi.",
  },
];

const PAGE_COUNT = 2;

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const page = Math.round(el.scrollLeft / el.clientWidth);
    setCurrentPage(Math.min(PAGE_COUNT - 1, Math.max(0, page)));
  }

  function goToPage(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  function scrollByPage(direction: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }

  return (
    <section id="temoignages" className="relative overflow-hidden bg-sky-soft">
      <Image
        src="/backHero.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-sky-soft/90 via-sky-soft/72 to-white/80"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute -left-10 -top-8 h-56 w-56 -scale-x-100 text-brand-blue/8"
        aria-hidden="true"
      >
        <path d="M30 58c2-14 4-24 8-32"></path>
        <path d="M38 26c-8-6-16-6-22 0 8-2 15 0 22 0z"></path>
        <path d="M38 26c-2-10-8-15-16-15 6 4 10 9 16 15z"></path>
        <path d="M38 26c2-9 8-13 16-12-6 3-11 6-16 12z"></path>
        <path d="M38 26c9-4 16-2 20 4-7-3-13-3-20-4z"></path>
        <circle cx="36" cy="29" r="2"></circle>
        <circle cx="40" cy="30" r="2"></circle>
      </svg>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-64 text-brand-green/10"
        aria-hidden="true"
      >
        <path d="M30 58c2-14 4-24 8-32"></path>
        <path d="M38 26c-8-6-16-6-22 0 8-2 15 0 22 0z"></path>
        <path d="M38 26c-2-10-8-15-16-15 6 4 10 9 16 15z"></path>
        <path d="M38 26c2-9 8-13 16-12-6 3-11 6-16 12z"></path>
        <path d="M38 26c9-4 16-2 20 4-7-3-13-3-20-4z"></path>
        <circle cx="36" cy="29" r="2"></circle>
        <circle cx="40" cy="30" r="2"></circle>
      </svg>
      <Container className="relative py-24 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">
            Témoignages
          </p>
          <h2 className="section-title section-title-center mt-4 text-3xl font-extrabold leading-tight text-navy-deep sm:text-5xl">
            Ils nous font confiance, aux quatre coins de la <span className="title-accent text-brand-blue">Guadeloupe</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mt-16">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.initials}
                  className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%_-_3rem)/3)]"
                >
                  <figure className="relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg shadow-navy/10 sm:p-8">
                    <span
                      className="pointer-events-none absolute right-6 top-4 text-7xl font-extrabold leading-none"
                      style={{ color: `${item.accentHex}22` }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <div
                      className="flex gap-1 text-brand-orange"
                      role="img"
                      aria-label="Note de 5 étoiles sur 5"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5z"></path>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 leading-relaxed text-navy/80">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-7 flex items-center gap-4 border-t border-navy/10 pt-6">
                      <span
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                        style={{ backgroundColor: item.accentHex }}
                      >
                        {item.initials}
                      </span>
                      <span>
                        <span className="block font-extrabold text-navy-deep">
                          {item.name}
                        </span>
                        <span className="block text-sm text-navy/60">{item.role}</span>
                        <span className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-brand-blue">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          >
                            <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"></path>
                            <circle cx="12" cy="10" r="2.5"></circle>
                          </svg>
                          {item.location}, Guadeloupe
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-lg hover:shadow-brand-blue/15"
                aria-label="Témoignages précédents"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 rotate-180"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <div className="flex items-center gap-2.5">
                {Array.from({ length: PAGE_COUNT }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToPage(i)}
                    className={
                      i === currentPage
                        ? "h-2.5 rounded-full transition-all duration-300 w-8 bg-brand-blue"
                        : "h-2.5 rounded-full transition-all duration-300 w-2.5 bg-navy/20 hover:bg-navy/40"
                    }
                    aria-label={`Aller à la page ${i + 1}`}
                    aria-current={i === currentPage}
                  ></button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-lg hover:shadow-brand-blue/15"
                aria-label="Témoignages suivants"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=avis+ASA+Lavage+Guadeloupe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-navy/15 bg-white px-7 py-3.5 font-bold text-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 01-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81z"
                ></path>
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.96-1.07 7.93-2.91l-3.87-3.01c-1.07.72-2.44 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.29v3.1A11.99 11.99 0 0012 24z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M5.29 14.28A7.2 7.2 0 014.91 12c0-.79.14-1.56.38-2.28v-3.1H1.29a12 12 0 000 10.76l4-3.1z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A11.99 11.99 0 001.29 6.62l4 3.1C6.23 6.88 8.88 4.77 12 4.77z"
                ></path>
              </svg>
              Avis Google
              <span className="flex gap-0.5 text-brand-orange" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5z"></path>
                  </svg>
                ))}
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
