import Box from "@/components/Box";
import { H2, H3, H4, H5 } from "@/components/Headings";
import { ReactNode } from "react";

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
      <div className="flex flex-row items-start justify-between text-pretty">
        <H3>{title}</H3>
        <div className="hidden text-nowrap lg:block">
          <H5>{date}</H5>
        </div>
      </div>
      <div className="font-semibold">
        <H4>{company}</H4>
      </div>
      <div className="text-nowrap lg:hidden">
        <H5>{date}</H5>
      </div>
      {children}
    </div>
  );
}

function ExperienceBullets({ children }: { children: ReactNode }) {
  return (
    <ul className="mx-10 my-1 list-outside list-disc space-y-1.5 text-gray-500 dark:text-slate-400">
      {children}
    </ul>
  );
}

export default function ExperienceSection() {
  return (
    <Box>
      <div className="divide-y">
        <H2>{"Experience"}</H2>
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
              services for hundreds of clients, reducing time spent by 95%.
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
