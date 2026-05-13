import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CredentialsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
