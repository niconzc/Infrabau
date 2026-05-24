import { getServiceBySlug } from "@/lib/data/services";
import { getProjectsByCategory } from "@/lib/data/projects";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceContent from "@/components/services/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freileitungsbau – INFRA BAU GmbH",
  description:
    "Mastfundamente für 110-kV- und 380-kV-Leitungen, Tiefbau Energieinfrastruktur – INFRA BAU GmbH, Spezialist im alpinen Gelände.",
};

export default function FreileitungsbauPage() {
  const service = getServiceBySlug("freileitungsbau")!;
  const projects = getProjectsByCategory("freileitungsbau");
  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent service={service} projects={projects} />
    </>
  );
}
