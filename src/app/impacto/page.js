import PageHeader from "@/components/PageHeader";
import ImpactSection from "@/components/sections/ImpactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function ImpactoPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Impacto"
        title="Transformação social em números e histórias"
        description="Mais de mil alunos já participaram das ações da Soarte, fortalecendo educação, cultura e inclusão social."
      />
      <ImpactSection />
      <TestimonialsSection />
    </div>
  );
}
