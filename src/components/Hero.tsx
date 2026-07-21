import Image from "next/image";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-dvh overflow-hidden">
      <Image
        alt=""
        fill
        sizes="100vw"
        src="/backHero.png"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/60 to-transparent"></div>
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col px-6 lg:px-10">
        <div className="flex flex-1 flex-col justify-center pb-36 pt-32 lg:pb-40 lg:pt-40">
          <div className="max-w-xl">
            <h1 className="text-[42px] font-extrabold leading-[1.08] text-navy-deep sm:text-6xl lg:text-7xl">
              Un intérieur<br />impeccable,<br />
              <em className="font-bold italic text-brand-orange">sans stress</em>
            </h1>
            <p className="mt-7 text-xl font-bold text-navy sm:text-2xl">
              Proches de vous, au service de votre quotidien.
            </p>
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-navy/75 sm:text-lg">
              Ménage à domicile, locaux professionnels<br className="hidden sm:block" /> et locations saisonnières en Guadeloupe.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-blue/25 transition-colors hover:bg-brand-blue-dark"
                href="#services"
              >
                Nos services
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </a>
              <a
                className="inline-flex items-center rounded-full border-2 border-brand-blue bg-white/90 px-8 py-3.5 text-base font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                href="#contact"
              >
                Nous contacter
              </a>
            </div>
            <ul className="mt-12 flex items-start">
              <li className="flex min-w-0 flex-col items-center gap-2 px-4 text-center sm:px-9 pl-0 sm:pl-0">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-navy sm:h-14 sm:w-14"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="15" r="7"></circle>
                  <path d="M11 40c0-7.2 5.8-13 13-13s13 5.8 13 13"></path>
                  <path d="M35 30c1.5-2 4-2.5 6-1.5"></path>
                </svg>
                <span className="whitespace-pre-line text-sm font-bold leading-snug text-navy">
                  Particuliers
                </span>
              </li>
              <li className="flex min-w-0 flex-col items-center gap-2 px-4 text-center sm:px-9 border-l border-navy/20">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-navy sm:h-14 sm:w-14"
                  aria-hidden="true"
                >
                  <rect x="12" y="8" width="24" height="32" rx="1.5"></rect>
                  <path d="M12 40h24"></path>
                  <path d="M18 15h3M27 15h3M18 22h3M27 22h3M18 29h3M27 29h3"></path>
                  <path d="M22 40v-6h4v6"></path>
                </svg>
                <span className="whitespace-pre-line text-sm font-bold leading-snug text-navy">
                  Entreprises
                </span>
              </li>
              <li className="flex min-w-0 flex-col items-center gap-2 px-4 text-center sm:px-9 border-l border-navy/20">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-navy sm:h-14 sm:w-14"
                  aria-hidden="true"
                >
                  <path d="M24 18c-2 8-3 15-3 22"></path>
                  <path d="M24 18c-4-5-10-6-14-3 5 1 9 2 14 3z"></path>
                  <path d="M24 18c-1-6 2-11 7-12-2 4-4 8-7 12z"></path>
                  <path d="M24 18c4-4 10-4 13 0-4 0-9 0-13 0z"></path>
                  <path d="M24 18c-6-2-11 0-13 4 4-1 9-2 13-4z"></path>
                  <path d="M14 42c3-2 6-2 9 0 3-2 6-2 9 0"></path>
                </svg>
                <span className="whitespace-pre-line text-sm font-bold leading-snug text-navy">
                  {"Locations\nsaisonnières"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-20 w-full sm:h-24 lg:h-28"
          aria-hidden="true"
        >
          <path
            d="M0,64 C240,110 480,10 720,40 C960,70 1200,110 1440,60 L1440,120 L0,120 Z"
            fill="var(--color-wave)"
            opacity="0.65"
          ></path>
          <path
            d="M0,88 C260,40 520,110 780,80 C1040,50 1260,70 1440,92 L1440,120 L0,120 Z"
            fill="var(--color-wave-light)"
          ></path>
        </svg>
      </div>
    </section>
  );
}
