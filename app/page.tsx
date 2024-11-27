import Hero from "@/components/hero";
import HowItWorksSection from "@/components/jak-to-dziala";
import OurPetsSection from "@/components/nasi-podopieczni";
import ProjectSection from "@/components/o-projekcie";
import OurPartnersSection from "@/components/partnerzy";
import OurTeamSection from "@/components/zespol";
import { pets } from "@/lib/pets";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <HowItWorksSection />
      <OurPetsSection pets={pets} />
      <OurTeamSection />
      <ProjectSection />
      <OurPartnersSection />
    </>
  );
}
