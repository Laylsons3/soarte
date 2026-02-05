import SectionHeading from "@/components/SectionHeading";
import PartnerCard from "@/components/PartnerCard";
import { partners } from "@/data/site";

export default function PartnersSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Parceiros"
          title="Uma rede que sustenta a transformação"
          description="A Soarte cresce com apoio de instituições, empresas e pessoas que acreditam na cultura como direito." 
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner} label={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
