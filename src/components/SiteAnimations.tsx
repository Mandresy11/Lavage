"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SiteAnimations() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      let intro: gsap.core.Timeline | undefined;
      let hasStarted = false;

      const startIntro = () => {
        if (hasStarted) return;
        hasStarted = true;
        intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .from("header > div", { autoAlpha: 0, y: -24, duration: 0.7 })
          .from("#accueil h1", { autoAlpha: 0, y: 42, duration: 0.8 }, "-=0.35")
          .from(
            "#accueil p",
            { autoAlpha: 0, y: 22, duration: 0.6, stagger: 0.08 },
            "-=0.45",
          )
          .from(
            "#accueil a",
            { autoAlpha: 0, y: 18, duration: 0.55, stagger: 0.08 },
            "-=0.35",
          )
          .from(
            "#accueil li",
            { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.08 },
            "-=0.3",
          );
      };

      if (document.documentElement.dataset.loaderComplete === "true") {
        startIntro();
      } else {
        window.addEventListener("site-loader-complete", startIntro, { once: true });
      }

      const introFallback = window.setTimeout(startIntro, 4000);

      gsap.fromTo(
        "#accueil > img",
        { scale: 1.06, yPercent: 0 },
        {
          scale: 1.06,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: "#accueil",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );

      return () => {
        window.removeEventListener("site-loader-complete", startIntro);
        window.clearTimeout(introFallback);
        intro?.kill();
      };
    });

    return () => media.revert();
  }, []);

  return null;
}
