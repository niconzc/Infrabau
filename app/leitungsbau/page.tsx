import { getServiceBySlug } from "@/lib/data/services";
import { getProjectsByCategory } from "@/lib/data/projects";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceContent from "@/components/services/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leitungsbau – INFRA BAU GmbH",
  description:
    "Trinkwasserleitungen, Abwasserkanäle, Pumpstationen – INFRA BAU GmbH realisiert Leitungsbauprojekte für Gemeinden und Wasserverbände in Österreich.",
};

export default function LeitungsbauPage() {
  const service = getServiceBySlug("leitungsbau")!;
  const projects = getProjectsByCategory("leitungsbau");
  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent service={service} projects={projects} />
    </>
  );
}
