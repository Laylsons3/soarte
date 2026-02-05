import PageHeader from "@/components/PageHeader";
import EventsSection from "@/components/sections/EventsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function EventosPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Eventos"
        title="A cultura local ganha palco"
        description="Recitais, apresentações públicas e festivais que aproximam comunidades e ampliam o acesso à arte."
      />
      <EventsSection />
      <ContactSection />
    </div>
  );
}
