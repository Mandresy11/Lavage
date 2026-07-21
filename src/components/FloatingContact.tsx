"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageCircleMore } from "lucide-react";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const contactSection = document.querySelector("#contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.12 },
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      aria-label="Demander un devis gratuit"
      className={`fixed bottom-4 right-4 z-40 flex w-auto items-center justify-center gap-2 rounded-full border border-white/30 bg-brand-orange px-3 py-2.5 font-bold text-white shadow-[0_10px_28px_rgba(10,33,72,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:bottom-6 sm:right-6 sm:gap-3 sm:px-5 sm:py-3.5 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-9 sm:w-9">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/20" aria-hidden="true" />
        <MessageCircleMore className="relative h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm leading-tight sm:hidden">Demander un devis</span>
        <span className="hidden text-sm leading-tight sm:block">Demander un devis gratuit</span>
        <span className="mt-0.5 hidden text-[10px] font-semibold text-white/80 sm:block">
          Réponse rapide et sans engagement
        </span>
      </span>
      <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block" strokeWidth={2.5} aria-hidden="true" />
    </a>
  );
}
