import PageHeader from "@/components/PageHeader";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ImpactSection from "@/components/sections/ImpactSection";

export default function ProjetosPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projetos"
        title="Iniciativas que ampliam oportunidades culturais"
        description="A Soarte desenvolve programas formativos, práticas coletivas e eventos que fortalecem comunidades no Ceará."
      />
      <ProjectsSection />
      <ImpactSection />
    </div>
  );
}
