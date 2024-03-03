"use client";
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import github from "../assets/github.png";
import { ReactNode } from "react";

function H1({ title }: { title: string }) {
  return (
    <h1 className="dark:text-white font-bold py-4 lg:py-6 sm:text-5xl text-4xl text-gray-600 drop-shadow-md">
      {title}
    </h1>
  );
}

function H2({ title }: { title: string }) {
  return (
    <h2 className="mb-4 font-bold tracking-wide text-xl dark:text-white text-gray-600 ">
      {title}
    </h2>
  );
}

function H3({ title }: { title: string }) {
  return (
    <h3 className="text-xl dark:text-slate-300 text-gray-600 py-1">{title}</h3>
  );
}

function H4({ title }: { title: string }) {
  return (
    <h4 className="lg:text-nowrap dark:text-slate-300 text-gray-600 text-lg py-1">
      {title}
    </h4>
  );
}

function H5({ title }: { title: string }) {
  return (
    <h5 className="dark:text-slate-400 text-gray-600 text-sm py-1">{title}</h5>
  );
}

function Box(props: { children?: ReactNode }) {
  return (
    <div className="justify-center items-center dark:bg-slate-800 bg-gray-100 shadow-xl rounded-lg px-5 m-2 py-4">
      {props.children}
    </div>
  );
}

function ContactSection() {
  return (
    <div className="flex flex-wrap flex-row justify-around">
      <ContactItem
        title={"nolanfpollack@gmail.com"}
        link={"mailto:nolanfpollack@gmail.com"}
        image={mail}
      />
      <ContactItem
        title={"+1 727-204-9285"}
        link={"tel:1-727-204-9285"}
        image={phone}
      />
      <ContactItem
        title={"linkedin.com/in/nolan-pollack"}
        link={"https://www.linkedin.com/in/nolan-pollack/"}
        image={linkedin}
      />
      <ContactItem
        title={"github.com/nolanpollack"}
        link={"https://github.com/nolanpollack"}
        image={github}
      />
    </div>
  );
}

function ContactItem({
  title,
  link,
  image,
}: {
  title: string;
  link: string;
  image: any;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex space-x-2 dark:hover:bg-slate-600 hover:bg-gray-200 px-1.5 mx-1 text-nowrap rounded-lg py-0.5 active:bg-gray-300">
        <Image
          className="object-contain"
          src={image}
          width={15}
          height={15}
          alt={"Phone Logo"}
        />
        <p className="dark:text-slate-400 text-gray-600 flex-1">{title}</p>
      </div>
    </a>
  );
}

function EducationItem({
  school,
  degree,
  date,
}: {
  school: string;
  degree: string;
  date: string;
}) {
  return (
    <div className="py-3">
      <div className="flex flex-row justify-between items-start">
        <H3 title={school} />
        <H5 title={date} />
      </div>
      <H5 title={degree} />
    </div>
  );
}

function WorkExperience({
  title,
  company,
  date,
  children,
}: {
  title: string;
  company: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <div className="py-3">
      <div className="flex flex-row justify-between items-start">
        <H3 title={title} />
        <H5 title={date} />
      </div>
      <H4 title={company} />
      {children}
    </div>
  );
}

function ExperienceBullets({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc dark:text-slate-400 text-gray-500 list-outside mx-10 space-y-1.5 my-1">
      {children}
    </ul>
  );
}

function EducationSection() {
  return (
    <Box>
      <div className="divide-y">
        <H2 title={"Education"} />
        <EducationItem
          school={"Northeastern University"}
          degree={"Master of Science in Computer Science"}
          date={"September 2024 - May 2026"}
        />
        <EducationItem
          school={"Northeastern University"}
          degree={
            "Bachelor of Science in Computer Science and Business Administration, Concentration in FinTech"
          }
          date={"September 2020 - May 2024"}
        />
      </div>
    </Box>
  );
}

function ExperienceSection() {
  return (
    <Box>
      <div className="divide-y">
        <H2 title={"Experience"} />
        <WorkExperience
          title={"Software Engineer Co-op"}
          company={"Toast"}
          date={"May 2023 - August 2023"}
        >
          <ExperienceBullets>
            <li>
              Made numerous code contributions to the production environment
              focusing on the integration of the Sling schedule management
              platform (Python) with Toast platforms (Kotlin), ensuring seamless
              data exchange and system compatibility.
            </li>
            <li>
              Enriched partner-facing REST API by introducing a country code
              field, significantly facilitating internationalization efforts and
              enhancing live synchronization between Toast and Sling.
            </li>
            <li>
              Implemented a new table in the established Sling database,
              allowing for efficient tracking of made API calls to remove
              redundancy while maintaining data integrity and association with
              other key values within the database.
            </li>
            <li>
              Designed an engaging front-end banner using React framework on the
              homepage of Toast to drive engagement to Sling, resulting in
              dozens of new signups.
            </li>
            <li>
              Utilized PyTest and JUnit to rigorously test code, guaranteeing
              high-quality software.
            </li>
          </ExperienceBullets>
        </WorkExperience>
        <WorkExperience
          title={"Network Operations Center Engineer Co-op"}
          company={"iCorps Technologies"}
          date={"January 2022 - November 2022"}
        >
          <ExperienceBullets>
            <li>
              Spearheaded creation of 10+ scripts in Java and Powershell to
              automate previously manual reporting in a multitude of managed
              services for hundreds of clients, reducing time spent by 95%
            </li>
            <li>
              Led project management team of 4 colleagues to develop scalable
              software with extensive code reusability, allowing for future
              expansion.
            </li>
            <li>
              Utilized Selenium Webdriver to extract data from managed SaaS
              platforms, providing organized data to be used by scripts.
            </li>
            <li>
              Diagnosed and repaired 500+ technical issues for clients in fields
              including server management and networking administration.
            </li>
          </ExperienceBullets>
        </WorkExperience>
      </div>
    </Box>
  );
}

function Skill({ title }: { title: string }) {
  return (
    <p className="transition inline-flex dark:text-slate-300 text-gray-900 bg-gray-200 dark:bg-slate-900 text-sm rounded px-1 m-0.5 hover:scale-105 dark:hover:bg-slate-950 hover:bg-gray-300">
      {title}
    </p>
  );
}

function SkillCategory(props: { title: string; skills: string[] }) {
  const skillItems = props.skills.map((skill, index) => (
    <Skill key={index} title={skill} />
  ));

  return (
    <div className="pt-1 pb-3">
      <H4 title={props.title} />
      <div>{skillItems}</div>
    </div>
  );
}

function SkillsSection() {
  return (
    <Box>
      <div className="divide-y">
        <H2 title={"Skills"} />
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

function ProjectsSection() {
  return (
    <Box>
      <H2 title={"Projects"} />
      <Project
        title={"Resume Website"}
        date={"February 2024 - March 2024"}
        description={"Made website"}
      />
      <Project title={"Multi-Threaded KV Store"} date={""} description={""} />
    </Box>
  );
}

function Project({
  title,
  date,
  description,
  link,
}: {
  title: string;
  date: string;
  description: string;
  link?: string;
}) {
  return (
    <button className="transition hover:bg-transparent duration-700 w-full rounded-2xl bg-gradient-to-br from-gray-900 to-purple-800 p-1 my-2 drop-shadow-md hover:scale-105">
      <h1 className="bg-gray-100 object-fill rounded-xl px-4 py-2 font-semibold text-gray-500 text-sm">
        {title}
      </h1>
    </button>
  );
}

function LightSwitch() {
  return (
    <div>
      <input type="checkbox" name="light-switch" />
      <label htmlFor="light-switch">Toggle Light/Dark Mode</label>
    </div>
  );
}

export default function Home() {
  return (
    <main className="dark:bg-slate-900 dark:bg-none bg-gradient-to-b from-white to-purple-100 min-h-screen flex-col items-center p-4 lg:py-12 lg:px-40">
      <div className="flex flex-col items-center py-6 pt-0">
        <H1 title={"Nolan Pollack"} />
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
