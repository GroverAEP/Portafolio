import Nav from "@/components/Nav";
import TerminalHero from "@/components/TerminalHero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <TerminalHero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
