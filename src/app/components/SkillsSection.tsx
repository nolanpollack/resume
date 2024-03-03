import Box from "@/components/Box";
import { H2, H4 } from "@/components/Headings";

function Skill({ title }: { title: string }) {
  return (
    <p className="text-md m-0.5 inline-flex rounded bg-gray-200 px-1 text-gray-900 transition hover:scale-105 hover:bg-gray-300 sm:text-sm dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-950">
      {title}
    </p>
  );
}

function SkillCategory(props: { title: string; skills: string[] }) {
  const skillItems = props.skills.map((skill, index) => (
    <Skill key={index} title={skill} />
  ));

  return (
    <div className="pb-3 pt-1">
      <H4>{props.title}</H4>
      <div>{skillItems}</div>
    </div>
  );
}

function SkillsSection() {
  return (
    <Box>
      <div className="divide-y">
        <H2>{"Skills"}</H2>
        <SkillCategory
          title={"Programming Languages"}
          skills={[
            "Java",
            "Kotlin",
            "Python",
            "C",
            "SQL",
            "TypeScript",
            "JavaScript",
          ]}
        />
        <SkillCategory
          title={"Tools / Frameworks"}
          skills={[
            "Git/GitHub",
            "Docker",
            "Jira",
            "Confluence",
            "DataDog",
            "Postman",
            "Gradle/Maven",
            "React",
            "Next.js",
            "JUnit",
            "PyTest",
          ]}
        />
      </div>
    </Box>
  );
}

export default SkillsSection;
