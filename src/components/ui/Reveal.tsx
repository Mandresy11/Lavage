"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = elementRef.current;
      if (!element) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(element, { autoAlpha: 1 });
        return;
      }

      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          delay,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: elementRef, dependencies: [delay], revertOnUpdate: true },
  );

  return (
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
