import { H1 } from "@/components/Headings";
import ContactSection from "@/app/components/ContactSection";
import EducationSection from "@/app/components/EducationSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-full flex-col items-center bg-gradient-to-b from-white to-purple-100 p-4 lg:px-40 lg:py-12 dark:bg-slate-900 dark:bg-none">
      <div className="flex flex-col items-center py-6 pt-0">
        <H1>{"Nolan Pollack"}</H1>
        <ContactSection />
      </div>
      <div className="flex flex-col sm:flex-row">
        {/*Left Side*/}
        <div>
          <EducationSection />
          <ExperienceSection />
        </div>
        {/*Right Side*/}
        <div>
          <SkillsSection />
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}
