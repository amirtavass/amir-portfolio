import { HeroSection } from "@/components/HeroSection";
import About from "@/components/About";
import { ProjectShowcase } from "@/components/project/Projectshowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <ProjectShowcase />
    </>
  );
}
