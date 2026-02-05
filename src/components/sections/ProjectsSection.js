import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function ProjectsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Projetos"
          title="Programas que ampliam oportunidades"
          description="Núcleos formativos, práticas coletivas e iniciativas culturais que transformam territórios e trajetórias." 
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
