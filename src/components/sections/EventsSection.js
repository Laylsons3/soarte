import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/data/site";

export default function EventsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Eventos culturais"
          title="Celebrações que valorizam a cultura local"
          description="Recitais, apresentações públicas e festivais que aproximam a comunidade da arte." 
        />
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
