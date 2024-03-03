import { H2, H3, H5 } from "@/components/Headings";
import Box from "@/components/Box";

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
      <div className="flex flex-row items-start justify-between">
        <H3>{school}</H3>
        <div className="hidden text-nowrap lg:block">
          <H5>{date}</H5>
        </div>
      </div>
      <H5>{degree}</H5>
      <div className="text-nowrap lg:hidden">
        <H5>{date}</H5>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <Box>
      <div className="divide-y">
        <H2>{"Education"}</H2>
        <EducationItem
          school={"Northeastern University"}
          degree={"Master of Science in Computer Science"}
          date={"Expected May 2026"}
        />
        <EducationItem
          school={"Northeastern University"}
          degree={
            "Bachelor of Science in Computer Science and Business Administration, Concentration in FinTech"
          }
          date={"May 2024"}
        />
      </div>
    </Box>
  );
}

export default EducationSection;
