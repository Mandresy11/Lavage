import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function Audience() {
  return (
    <section id="publics" className="relative overflow-hidden">
      <Image
        src="/image/backsection3.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/80 to-white/90"></div>
      <Container className="relative py-20 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">
            Pour qui ?
          </p>
          <h2 className="section-title section-title-center mt-4 text-4xl font-extrabold leading-tight text-navy-deep sm:text-5xl">
            Un service pensé pour <span className="title-accent text-brand-orange">votre situation</span>
          </h2>
        </Reveal>
        <div
          aria-label="Publics concernés"
          className="publics-carousel -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-8 pb-4 scroll-px-8 overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:grid lg:max-w-[1080px] lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          <div className="flex w-[78%] shrink-0 snap-start sm:w-[68%] lg:w-auto lg:min-w-0">
            <article className="flex h-full w-full flex-col rounded-[22px] bg-white p-4 shadow-lg shadow-navy/10 sm:p-5">
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/image/image2.png"
                    alt="Salon lumineux et accueillant après un ménage soigné"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <span
                  className="absolute -bottom-6 left-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-white shadow-md"
                  style={{ backgroundColor: "#f7941d" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <circle cx="9" cy="8" r="3.5"></circle>
                    <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5"></path>
                    <circle cx="16.5" cy="9.5" r="2.5"></circle>
                    <path d="M16 15.5c2.5 0 4.5 1.8 4.5 4.5"></path>
                  </svg>
                </span>
              </div>
              <p
                className="mt-9 text-[13px] font-bold uppercase tracking-widest"
                style={{ color: "#f7941d" }}
              >
                Particuliers &amp; familles
              </p>
              <h3 className="mt-2.5 text-xl font-extrabold leading-snug text-navy-deep xl:text-[22px]">
                Un quotidien plus léger
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-[15px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Ménage régulier ou ponctuel, selon votre rythme
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Repassage et entretien du linge
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Crédit d&apos;impôt immédiat de 50 % si vous êtes éligible
                  </span>
                </li>
              </ul>
              <a
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-(--btn-bg) px-6 py-3 text-[15px] font-bold text-white shadow-lg transition-colors hover:bg-(--btn-bg-hover)"
                style={
                  {
                    "--btn-bg": "#f7941d",
                    "--btn-bg-hover": "#e5820c",
                  } as React.CSSProperties
                }
                href="#fonctionnement"
              >
                Obtenir un devis
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M4 12h16M14 6l6 6-6 6"></path>
                </svg>
              </a>
            </article>
          </div>
          <div className="flex w-[78%] shrink-0 snap-start sm:w-[68%] lg:w-auto lg:min-w-0">
            <article className="flex h-full w-full flex-col rounded-[22px] bg-white p-4 shadow-lg shadow-navy/10 sm:p-5">
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/image/image3.png"
                    alt="Espace de bureaux propre et ordonné"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <span
                  className="absolute -bottom-6 left-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-white shadow-md"
                  style={{ backgroundColor: "#1583cc" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="8" width="18" height="12" rx="2"></rect>
                    <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2"></path>
                    <path d="M3 13h18"></path>
                  </svg>
                </span>
              </div>
              <p
                className="mt-9 text-[13px] font-bold uppercase tracking-widest"
                style={{ color: "#1583cc" }}
              >
                Entreprises &amp; professionnels
              </p>
              <h3 className="mt-2.5 text-xl font-extrabold leading-snug text-navy-deep xl:text-[22px]">
                Des locaux propres, sans y penser
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-[15px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Bureaux, cabinets, commerces et locaux professionnels
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Halls, cages d&apos;escalier et parties communes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Interventions planifiées, en dehors de vos horaires si besoin
                  </span>
                </li>
              </ul>
              <a
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-(--btn-bg) px-6 py-3 text-[15px] font-bold text-white shadow-lg transition-colors hover:bg-(--btn-bg-hover)"
                style={
                  {
                    "--btn-bg": "#1583cc",
                    "--btn-bg-hover": "#0f6cab",
                  } as React.CSSProperties
                }
                href="#contact"
              >
                Voir le fonctionnement
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M4 12h16M14 6l6 6-6 6"></path>
                </svg>
              </a>
            </article>
          </div>
          <div className="flex w-[78%] shrink-0 snap-start sm:w-[68%] lg:w-auto lg:min-w-0">
            <article className="flex h-full w-full flex-col rounded-[22px] bg-white p-4 shadow-lg shadow-navy/10 sm:p-5">
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/image/image1.png"
                    alt="Chambre de gîte impeccable prête à accueillir des voyageurs"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <span
                  className="absolute -bottom-6 left-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-white shadow-md"
                  style={{ backgroundColor: "#8dc63f" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path d="M4 11l8-7 8 7"></path>
                    <path d="M6 10v10h12V10"></path>
                    <path d="M10 20v-5h4v5"></path>
                  </svg>
                </span>
              </div>
              <p
                className="mt-9 text-[13px] font-bold uppercase tracking-widest"
                style={{ color: "#8dc63f" }}
              >
                Locations saisonnières
              </p>
              <h3 className="mt-2.5 text-xl font-extrabold leading-snug text-navy-deep xl:text-[22px]">
                Chaque séjour commence propre
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-[15px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Ménage complet entre chaque séjour
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Linge prêt à l&apos;emploi pour vos voyageurs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  >
                    <path d="M4 12.5l5 5L20 7"></path>
                  </svg>
                  <span className="font-semibold text-navy/85">
                    Un calendrier de locations respecté
                  </span>
                </li>
              </ul>
              <a
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-(--btn-bg) px-6 py-3 text-[15px] font-bold text-white shadow-lg transition-colors hover:bg-(--btn-bg-hover)"
                style={
                  {
                    "--btn-bg": "#8dc63f",
                    "--btn-bg-hover": "#7db335",
                  } as React.CSSProperties
                }
                href="#temoignages"
              >
                Voir les témoignages
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M4 12h16M14 6l6 6-6 6"></path>
                </svg>
              </a>
            </article>
          </div>
        </div>
        <Reveal delay={0.25}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white/70 text-navy backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </span>
              <span className="max-w-36 text-sm font-bold leading-snug text-navy">
                Intervenants de confiance
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white/70 text-navy backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15z"></path>
                  <path d="M5 19c3-5 7-8 11-10"></path>
                </svg>
              </span>
              <span className="max-w-36 text-sm font-bold leading-snug text-navy">
                Produits de qualité
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white/70 text-navy backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </span>
              <span className="max-w-36 text-sm font-bold leading-snug text-navy">
                Flexibilité des horaires
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white/70 text-navy backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5z"></path>
                </svg>
              </span>
              <span className="max-w-36 text-sm font-bold leading-snug text-navy">
                Satisfaction garantie
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
