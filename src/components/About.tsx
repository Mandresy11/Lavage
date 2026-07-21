import Image from "next/image";
import { Check, MapPin, UsersRound, UserRound, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const commitments = [
  "Des personnes qui connaissent vos lieux et vos habitudes",
  "Un interlocuteur unique, jamais de plateforme anonyme",
  "Une relation de proximité, qui dure",
];

const stats = [
  {
    value: "6",
    label: "intervenants formés, sélectionnés et accompagnés",
    icon: UserRound,
  },
  {
    value: "3",
    label: "publics accompagnés : particuliers, professionnels, saisonnier",
    icon: UsersRound,
  },
  {
    value: "100%",
    label: "local, une équipe basée en Guadeloupe, proche de ses clients",
    icon: MapPin,
  },
];

export function About() {
  return (
    <section
      id="a-propos"
      className="relative isolate overflow-hidden bg-[#203b84] py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-72 h-[650px] w-[650px] rounded-full border-[78px] border-[#294892]/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-96 left-[38%] h-[620px] w-[620px] rounded-full border-[70px] border-[#294892]/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-28 h-64 w-64 rounded-full border-[62px] border-[#172f72]/80"
      />

      <Container className="relative z-10 max-w-[1430px]">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 xl:grid-cols-[minmax(0,0.9fr)_minmax(570px,1.1fr)] xl:gap-12 2xl:grid-cols-[minmax(0,0.88fr)_minmax(570px,1.12fr)] 2xl:gap-20">
          <Reveal>
            <div className="max-w-[590px]">
              <p className="section-eyebrow section-eyebrow-dark">
                Notre entreprise
              </p>

              <h2 className="section-title section-title-on-dark mt-7 text-[36px] font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:mt-9 sm:text-[52px] xl:text-[58px]">
                Une entreprise
                <br />
                locale, une équipe
                <br />
                qui vous <span className="title-accent text-[#91d01f]">connaît</span>
              </h2>

              <p className="mt-10 max-w-[565px] text-[17px] font-medium leading-[1.7] text-white sm:text-[19px]">
                Une équipe de <strong className="font-extrabold text-[#91d01f]">6 intervenants</strong> basée en Guadeloupe, au
                service des particuliers, des professionnels et des locations
                saisonnières.
              </p>

              <ul className="mt-7 space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <Check
                      aria-hidden="true"
                      strokeWidth={3.5}
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#91d01f]"
                    />
                    <span className="text-[16px] font-bold leading-6 text-white sm:text-[17px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex max-w-[580px] items-center rounded-full bg-white px-4 py-4 text-[#0d376f] sm:mt-12 sm:px-8 sm:py-5">
                <span aria-hidden="true" className="mr-2 text-3xl font-black leading-none text-[#91c936] sm:mr-4 sm:text-4xl">
                  “
                </span>
                <p className="flex-1 text-center text-[14px] font-bold italic sm:text-[18px]">
                  Proches de vous, au service de votre quotidien.
                </p>
                <span aria-hidden="true" className="ml-2 translate-y-2 text-3xl font-black leading-none text-[#91c936] sm:ml-4 sm:text-4xl">
                  ”
                </span>
              </div>

              <a
                href="#pourquoi"
                className="mt-9 hidden items-center gap-4 rounded-full bg-brand-orange px-9 py-4 text-[16px] font-bold text-white shadow-lg shadow-[#102a68]/30 transition hover:bg-brand-orange-dark xl:inline-flex"
              >
                Découvrir nos engagements
                <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative xl:min-h-[654px]">
            <div className="relative mx-auto h-[226px] w-full max-w-[465px] overflow-hidden rounded-[28px] shadow-2xl shadow-[#10235b]/25 sm:h-[420px] sm:rounded-[34px] xl:ml-0 xl:h-[654px] xl:max-w-[430px] 2xl:max-w-[465px]">
              <Image
                src="/backsect2.png"
                alt="L’équipe Clean & Solutions en intervention en Guadeloupe"
                fill
                priority={false}
                className="object-cover object-[39%_center]"
                sizes="(min-width: 1536px) 465px, (min-width: 1280px) 430px, (min-width: 640px) 465px, 100vw"
              />
            </div>

            <div className="relative z-10 mx-3 -mt-9 flex flex-col gap-3 sm:mx-auto sm:-mt-12 sm:max-w-[430px] sm:gap-4 xl:absolute xl:left-[230px] xl:top-[118px] xl:mt-0 xl:w-[390px] xl:max-w-none xl:gap-[26px] 2xl:left-[300px] 2xl:w-[405px]">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex min-h-[106px] items-center gap-4 rounded-2xl bg-white px-5 py-3 text-[#072d65] shadow-xl shadow-[#10235b]/15 sm:min-h-[120px] sm:gap-5 sm:rounded-[18px] sm:px-6 sm:py-4"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf6d9] sm:h-16 sm:w-16">
                    <Icon aria-hidden="true" className="h-7 w-7 text-[#8dc526] sm:h-8 sm:w-8" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-[32px] font-extrabold leading-none text-[#8dc526]">
                      {value}
                    </strong>
                    <span className="mt-1.5 block text-[14px] font-semibold leading-[1.4] sm:mt-2 sm:text-[15px]">
                      {label}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#pourquoi"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-orange px-5 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#102a68]/30 transition hover:bg-brand-orange-dark sm:mx-auto sm:max-w-[465px] sm:text-[16px] xl:hidden"
            >
              Découvrir nos engagements
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
