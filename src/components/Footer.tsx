import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="coordonnees" className="border-t border-white/10 bg-navy-night text-white">
      <Container className="pb-8 pt-20 lg:pt-28">
        <div className="flex w-full flex-col justify-between gap-14 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex w-full flex-col gap-6 lg:max-w-md lg:items-start">
            <div className="flex items-center gap-3">
              <a aria-label="Retour à l'accueil" className="shrink-0 rounded-full ring-2 ring-white/15" href="#accueil">
                <Image
                  alt="Clean & Solutions"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                  src="/logo.jpg"
                />
              </a>
              <div>
                <p className="font-sans text-2xl font-bold leading-tight text-white">Clean & Solutions</p>
                <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue">Nettoyage en Guadeloupe</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/65">Services de nettoyage pour les particuliers, les professionnels et les locations saisonnières en Guadeloupe. Proches de vous, au service de votre quotidien.</p>
            <ul className="flex items-center gap-6 text-white/60">
              <li>
                <a aria-label="Facebook (lien à compléter)" className="block transition-colors hover:text-brand-blue" href="#">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="Instagram (lien à compléter)" className="block transition-colors hover:text-brand-orange" href="#">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5"></rect>
                    <circle cx="12" cy="12" r="4.5"></circle>
                    <circle cx="17.8" cy="6.2" r="1.2" fill="currentColor" stroke="none"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid w-full gap-10 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-3 lg:gap-12">
            <div>
              <h3 className="mb-5 font-extrabold text-white">Coordonnées</h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <p className="font-bold text-white/85">Téléphone</p>
                  <p className="mt-1 leading-5">[Numéro à compléter]</p>
                </li>
                <li>
                  <p className="font-bold text-white/85">Email</p>
                  <p className="mt-1 leading-5">[Adresse email à compléter]</p>
                </li>
                <li>
                  <p className="font-bold text-white/85">Adresse</p>
                  <p className="mt-1 leading-5">[Adresse à compléter]</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 font-extrabold text-white">Horaires</h3>
              <div className="space-y-6 text-sm leading-6 text-white/60">
                <p>[Horaires d&apos;ouverture à compléter]</p>
                <div>
                  <p className="font-bold text-white/85">Zone d&apos;intervention</p>
                  <p className="mt-1">[Communes desservies à compléter]</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-5 font-extrabold text-white">Navigation</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a className="font-semibold transition-colors hover:text-brand-blue" href="#accueil">Accueil</a></li>
                <li><a className="font-semibold transition-colors hover:text-brand-blue" href="#services">Nos services</a></li>
                <li><a className="font-semibold transition-colors hover:text-brand-blue" href="#a-propos">À propos</a></li>
                <li><a className="font-semibold transition-colors hover:text-brand-blue" href="#pourquoi">Pourquoi nous ?</a></li>
                <li><a className="font-semibold transition-colors hover:text-brand-blue" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-xs font-semibold text-white/45 sm:flex-row sm:items-center">
          <p>© {year}Clean & Solutions · Tous droits réservés</p>
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <li><a className="transition-colors hover:text-brand-blue" href="#">Mentions légales</a></li>
            <li><a className="transition-colors hover:text-brand-blue" href="#">Politique de confidentialité</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
