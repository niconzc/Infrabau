import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import JobsCTA from "@/components/home/JobsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <About />
      <Stats />
      <JobsCTA />
    </>
  );
}
