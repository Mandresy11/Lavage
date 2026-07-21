import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function Process() {
  return (
    <section id="fonctionnement" className="relative overflow-hidden bg-midnight">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-blue/15 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-90 w-90 rounded-full bg-wave/10 blur-3xl"
        aria-hidden="true"
      ></div>
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-brand-blue/20"
        viewBox="0 0 1440 180"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 120c240-70 480 60 720 30s480-100 720-40" stroke="currentColor" strokeWidth="2"></path>
        <path
          d="M0 160c240-70 480 50 720 20s480-90 720-30"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        ></path>
      </svg>
      <Container className="relative py-16 sm:py-24 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow section-eyebrow-dark">Comment ça marche</p>
          <h2 className="section-title section-title-center section-title-on-dark mt-4 text-3xl font-extrabold leading-tight text-white sm:mt-6 sm:text-5xl">
            Simple, du premier appel <span className="title-accent text-brand-green">au suivi</span>
          </h2>
        </Reveal>
        <ol className="mt-10 flex flex-col gap-3 sm:mt-20 sm:grid sm:grid-cols-2 sm:gap-12 lg:grid-cols-5 lg:gap-6">
          <li className="relative">
            <Reveal className="relative grid grid-cols-[3.5rem_1fr] items-center gap-x-4 text-left sm:flex sm:flex-col sm:text-center">
              <span
                className="absolute bottom-[-1.1rem] left-7 top-14 border-l-2 border-dashed border-white/25 sm:hidden"
                aria-hidden="true"
              ></span>
              <span
                className="absolute left-[calc(50%+3rem)] top-10 hidden h-0 w-[calc(100%-6rem)] border-t-2 border-dashed border-white/25 lg:block"
                aria-hidden="true"
              >
                <span className="absolute -right-1 -top-1.25 h-2 w-2 rounded-full bg-white/40"></span>
              </span>
              <span className="relative row-span-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-wave/70 bg-midnight-soft text-white shadow-[0_0_25px_rgba(168,216,240,0.25)] sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                >
                  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"></path>
                </svg>
              </span>
              <span className="absolute left-9 top-9 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-extrabold text-white shadow-md shadow-brand-green/30 sm:static sm:mt-4 sm:h-8 sm:w-8 sm:text-sm">
                1
              </span>
              <h3 className="col-start-2 text-base font-extrabold leading-snug text-white sm:mt-4 sm:text-lg">
                Vous nous contactez
              </h3>
              <p className="col-start-2 mt-1 text-sm leading-snug text-white/70 sm:mt-2 sm:leading-relaxed">
                Par téléphone ou en demandant un devis, comme vous préférez.
              </p>
            </Reveal>
          </li>
          <li className="relative">
            <Reveal
              delay={0.12}
              className="relative grid grid-cols-[3.5rem_1fr] items-center gap-x-4 text-left sm:flex sm:flex-col sm:text-center"
            >
              <span
                className="absolute bottom-[-1.1rem] left-7 top-14 border-l-2 border-dashed border-white/25 sm:hidden"
                aria-hidden="true"
              ></span>
              <span
                className="absolute left-[calc(50%+3rem)] top-10 hidden h-0 w-[calc(100%-6rem)] border-t-2 border-dashed border-white/25 lg:block"
                aria-hidden="true"
              >
                <span className="absolute -right-1 -top-1.25 h-2 w-2 rounded-full bg-white/40"></span>
              </span>
              <span className="relative row-span-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-wave/70 bg-midnight-soft text-white shadow-[0_0_25px_rgba(168,216,240,0.25)] sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                >
                  <rect x="6" y="4" width="12" height="17" rx="2"></rect>
                  <path d="M9 4a3 3 0 016 0"></path>
                  <path d="M9 10h6M9 14h6M9 18h4"></path>
                </svg>
              </span>
              <span className="absolute left-9 top-9 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-extrabold text-white shadow-md shadow-brand-green/30 sm:static sm:mt-4 sm:h-8 sm:w-8 sm:text-sm">
                2
              </span>
              <h3 className="col-start-2 text-base font-extrabold leading-snug text-white sm:mt-4 sm:text-lg">
                On analyse vos besoins
              </h3>
              <p className="col-start-2 mt-1 text-sm leading-snug text-white/70 sm:mt-2 sm:leading-relaxed">
                Un échange simple pour comprendre vos attentes et vos contraintes.
              </p>
            </Reveal>
          </li>
          <li className="relative">
            <Reveal
              delay={0.24}
              className="relative grid grid-cols-[3.5rem_1fr] items-center gap-x-4 text-left sm:flex sm:flex-col sm:text-center"
            >
              <span
                className="absolute bottom-[-1.1rem] left-7 top-14 border-l-2 border-dashed border-white/25 sm:hidden"
                aria-hidden="true"
              ></span>
              <span
                className="absolute left-[calc(50%+3rem)] top-10 hidden h-0 w-[calc(100%-6rem)] border-t-2 border-dashed border-white/25 lg:block"
                aria-hidden="true"
              >
                <span className="absolute -right-1 -top-1.25 h-2 w-2 rounded-full bg-white/40"></span>
              </span>
              <span className="relative row-span-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-wave/70 bg-midnight-soft text-white shadow-[0_0_25px_rgba(168,216,240,0.25)] sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                >
                  <circle cx="11" cy="11" r="6.5"></circle>
                  <path d="M16 16l5 5"></path>
                </svg>
              </span>
              <span className="absolute left-9 top-9 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-extrabold text-white shadow-md shadow-brand-green/30 sm:static sm:mt-4 sm:h-8 sm:w-8 sm:text-sm">
                3
              </span>
              <h3 className="col-start-2 text-base font-extrabold leading-snug text-white sm:mt-4 sm:text-lg">
                On vous propose du sur-mesure
              </h3>
              <p className="col-start-2 mt-1 text-sm leading-snug text-white/70 sm:mt-2 sm:leading-relaxed">
                Une prestation adaptée à votre rythme et à votre budget.
              </p>
            </Reveal>
          </li>
          <li className="relative">
            <Reveal
              delay={0.36}
              className="relative grid grid-cols-[3.5rem_1fr] items-center gap-x-4 text-left sm:flex sm:flex-col sm:text-center"
            >
              <span
                className="absolute bottom-[-1.1rem] left-7 top-14 border-l-2 border-dashed border-white/25 sm:hidden"
                aria-hidden="true"
              ></span>
              <span
                className="absolute left-[calc(50%+3rem)] top-10 hidden h-0 w-[calc(100%-6rem)] border-t-2 border-dashed border-white/25 lg:block"
                aria-hidden="true"
              >
                <span className="absolute -right-1 -top-1.25 h-2 w-2 rounded-full bg-white/40"></span>
              </span>
              <span className="relative row-span-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-wave/70 bg-midnight-soft text-white shadow-[0_0_25px_rgba(168,216,240,0.25)] sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                >
                  <circle cx="12" cy="8" r="3"></circle>
                  <path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5"></path>
                  <circle cx="5.5" cy="10" r="2"></circle>
                  <path d="M2 18c0-2 1.5-3.5 3.5-3.5"></path>
                  <circle cx="18.5" cy="10" r="2"></circle>
                  <path d="M22 18c0-2-1.5-3.5-3.5-3.5"></path>
                </svg>
              </span>
              <span className="absolute left-9 top-9 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-extrabold text-white shadow-md shadow-brand-green/30 sm:static sm:mt-4 sm:h-8 sm:w-8 sm:text-sm">
                4
              </span>
              <h3 className="col-start-2 text-base font-extrabold leading-snug text-white sm:mt-4 sm:text-lg">
                L&#x27;équipe intervient
              </h3>
              <p className="col-start-2 mt-1 text-sm leading-snug text-white/70 sm:mt-2 sm:leading-relaxed">
                Selon le planning défini ensemble, chez vous ou dans vos locaux.
              </p>
            </Reveal>
          </li>
          <li className="relative">
            <Reveal
              delay={0.48}
              className="relative grid grid-cols-[3.5rem_1fr] items-center gap-x-4 text-left sm:flex sm:flex-col sm:text-center"
            >
              <span className="relative row-span-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-wave/70 bg-midnight-soft text-white shadow-[0_0_25px_rgba(168,216,240,0.25)] sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                >
                  <circle cx="12" cy="12" r="8.5"></circle>
                  <path d="M8.5 12.5l2.5 2.5 4.5-5"></path>
                </svg>
              </span>
              <span className="absolute left-9 top-9 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-extrabold text-white shadow-md shadow-brand-green/30 sm:static sm:mt-4 sm:h-8 sm:w-8 sm:text-sm">
                5
              </span>
              <h3 className="col-start-2 text-base font-extrabold leading-snug text-white sm:mt-4 sm:text-lg">
                On assure le suivi
              </h3>
              <p className="col-start-2 mt-1 text-sm leading-snug text-white/70 sm:mt-2 sm:leading-relaxed">
                Pour garantir votre satisfaction, intervention après intervention.
              </p>
            </Reveal>
          </li>
        </ol>
      </Container>
    </section>
  );
}
