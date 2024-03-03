import Box from "@/components/Box";
import { H2, H5 } from "@/components/Headings";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";

function Project({
  title,
  date,
  description,
  link,
}: {
  title: string;
  date: string;
  description: string[];
  link?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const bullets = description.map((bullet) => <H5 key={bullet}>{bullet}</H5>);

  return (
    <div>
      <Button title={title} onClick={() => setIsOpen(true)} />
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul>{bullets}</ul>
      </Modal>
    </div>
  );
}

function ProjectsSection() {
  return (
    <Box>
      <H2>{"Projects"}</H2>
      <Project
        title={"Resume Website"}
        date={"February 2024 - March 2024"}
        description={["Made website"]}
      />
      <Project
        title={"Multi-Threaded KV Store"}
        date={""}
        description={[
          "Extremely fast multi-threaded key-value store written in C",
          "Designed and implemented thread-safe hash table using djb2 hashing algorithm",
          "Ensured thread safety with POSIX mutexes and condition variables",
          "Ranked second fastest key-value store out of class of 100+ students",
        ]}
      />
    </Box>
  );
}

export default ProjectsSection;
