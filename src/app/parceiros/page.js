import PageHeader from "@/components/PageHeader";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";

export default function ParceirosPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Parceiros"
        title="Apoio que sustenta a transformação"
        description="Conecte sua organização à Soarte e fortaleça o acesso à arte e à educação em comunidades do Ceará."
      />
      <PartnersSection />
      <CTASection />
    </div>
  );
}
