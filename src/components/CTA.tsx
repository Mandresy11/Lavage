import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="contact" className="bg-white">
      <Container className="py-16 sm:py-24 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-blue/10 bg-sky-soft px-5 py-10 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
              <div>
                <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-brand-blue sm:px-4 sm:text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M12 4l1.8 4.7L18.5 10l-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.3z"></path>
                  </svg>
                  Service de nettoyage professionnel
                </span>
                <h2 className="section-title mt-6 max-w-xl text-3xl font-extrabold leading-tight text-navy-deep sm:text-4xl lg:text-5xl">
                  Besoin d&apos;un service de nettoyage{" "}
                  <span className="title-accent text-brand-blue">fiable et adapté</span>
                  {" "}
                  à votre quotidien ?
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy/75">
                  Parlez-nous de votre besoin : on vous répond rapidement avec
                  un{" "}
                  <strong className="font-bold text-brand-blue">
                    devis clair et personnalisé
                  </strong>
                  , sans engagement.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-blue px-5 py-4 font-bold text-white shadow-xl shadow-brand-blue/25 transition-all hover:-translate-y-0.5 hover:bg-brand-blue-dark sm:gap-3 sm:px-8"
                    href="#coordonnees"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0"
                    >
                      <rect x="4" y="5" width="16" height="15" rx="2"></rect>
                      <path d="M4 9.5h16M8.5 3v4M15.5 3v4"></path>
                      <path d="M8 13.5h2.5M13.5 13.5H16M8 16.8h2.5"></path>
                    </svg>
                    Demander un devis
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
                  <a
                    className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-brand-blue/30 bg-white px-8 py-4 font-bold text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                    href="#coordonnees"
                  >
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
                      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"></path>
                    </svg>
                    Nous contacter
                  </a>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <Image
                  src="/image/photoDroite.png"
                  alt=""
                  width={720}
                  height={720}
                  className="w-full mix-blend-multiply"
                />
                <div className="absolute right-0 top-6 flex w-36 flex-col items-center rounded-full bg-white px-4 py-6 text-center shadow-xl shadow-brand-blue/15 sm:top-10 sm:w-40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-7 w-7 text-brand-blue"
                  >
                    <rect x="4" y="5" width="16" height="15" rx="2"></rect>
                    <path d="M4 9.5h16M8.5 3v4M15.5 3v4"></path>
                    <path d="M8 13.5h2.5M13.5 13.5H16M8 16.8h2.5"></path>
                  </svg>
                  <p className="mt-2 text-sm font-extrabold leading-tight text-brand-blue">
                    Devis gratuit
                  </p>
                  <p className="mt-0.5 text-xs font-semibold leading-snug text-navy/60">
                    et sans engagement
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 grid gap-6 border-t border-navy/10 pt-8 md:grid-cols-3 md:gap-0 lg:mt-6">
              <div className="flex items-center gap-3 md:px-6 md:pl-0">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
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
                    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"></path>
                    <path d="M9 11.5l2 2 4-4"></path>
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-extrabold text-navy-deep">
                    Fiable &amp; sécurisé
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-navy/60">
                    Intervenants vérifiés et assurés
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 md:border-l md:border-navy/10 md:px-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
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
                    <circle cx="12" cy="12" r="8.5"></circle>
                    <path d="M12 7.5V12l3 3"></path>
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-extrabold text-navy-deep">
                    Réponse rapide
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-navy/60">
                    Devis sous 24h maximum
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 md:border-l md:border-navy/10 md:px-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
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
                    <path d="M4 4h7l9 9-7 7-9-9z"></path>
                    <circle cx="8.5" cy="8.5" r="1.3"></circle>
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-extrabold text-navy-deep">
                    Sans engagement
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-navy/60">
                    Devis gratuit et personnalisé
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
