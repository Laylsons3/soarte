import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <EventsSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}
