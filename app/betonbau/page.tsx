import { getServiceBySlug } from "@/lib/data/services";
import { getProjectsByCategory } from "@/lib/data/projects";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceContent from "@/components/services/ServiceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Betonbau – INFRA BAU GmbH",
  description:
    "Brücken, Stützmauern, Tiefgründungen – INFRA BAU GmbH realisiert anspruchsvolle Betonbauwerke in Österreich.",
};

export default function BetonbauPage() {
  const service = getServiceBySlug("betonbau")!;
  const projects = getProjectsByCategory("betonbau");
  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent service={service} projects={projects} />
    </>
  );
}
