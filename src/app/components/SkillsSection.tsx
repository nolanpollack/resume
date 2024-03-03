import Box from "@/components/Box";
import { H2, H4 } from "@/components/Headings";
import TextItem from "@/components/TextItem";

function SkillCategory(props: { title: string; skills: string[] }) {
  const skillItems = props.skills.map((skill, index) => (
    <TextItem key={index} title={skill} />
  ));

  return (
    <div className="pb-3 pt-1">
      <H4>{props.title}</H4>
      <div>{skillItems}</div>
    </div>
  );
}

export default function SkillsSection() {
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
            "TensorFlow",
          ]}
        />
      </div>
    </Box>
  );
}
