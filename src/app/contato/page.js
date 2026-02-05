import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

export default function ContatoPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contato"
        title="Fale com a Soarte"
        description="Estamos prontos para construir projetos culturais com sua comunidade, empresa ou instituição."
      />
      <ContactSection />
      <CTASection />
    </div>
  );
}
