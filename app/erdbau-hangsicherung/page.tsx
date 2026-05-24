import { getServiceBySlug } from "@/lib/data/services";
import { getProjectsByCategory } from "@/lib/data/projects";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceContent from "@/components/services/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erdbau & Hangsicherung – INFRA BAU GmbH",
  description:
    "Böschungssicherung, Felssicherung, Nagelwände, Spritzbeton – INFRA BAU GmbH, Ihr Spezialist für geotechnische Sicherungsmaßnahmen.",
};

export default function ErdbauPage() {
  const service = getServiceBySlug("erdbau-hangsicherung")!;
  const projects = getProjectsByCategory("erdbau-hangsicherung");
  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent service={service} projects={projects} />
    </>
  );
}
