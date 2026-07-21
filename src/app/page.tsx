import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Commitments } from "@/components/Commitments";
import { Audience } from "@/components/Audience";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Commitments />
      <Audience />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
