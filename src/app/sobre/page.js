import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";

export default function SobrePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Sobre a Soarte"
        title="Uma OSC dedicada a ampliar o acesso à arte"
        description="Fundada em 2009 em Pacatuba–CE, a Soarte promove formação artística gratuita e continuada para crianças e jovens em situação de vulnerabilidade."
      />
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
}
