"use client";
import Box from "@/components/Box";
import { H2, H5 } from "@/components/Headings";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";

function Project({
  title,
  date,
  description,
  skills,
  link,
}: {
  title: string;
  date: string;
  description: string[];
  skills?: string[];
  link?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const bullets = description.map((bullet) => (
    <li key={bullet}>
      <H5>{bullet}</H5>
    </li>
  ));
  const skillList = skills
    ? skills.map((skill) => (
        <div key={skill} className="mx-1 rounded bg-gray-200 px-1">
          <H5>{skill}</H5>
        </div>
      ))
    : null;

  return (
    <div>
      <Button title={title} onClick={() => setIsOpen(true)} />
      <Modal title={title} date={date} isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="text-gray-600">{bullets}</ul>
        {skills && (
          <div className="flex flex-row pt-4 text-gray-700">
            <H5>Skills: </H5>
            {skillList}
          </div>
        )}
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
        description={[
          "Developed personal website from scratch using Next.js and React",
          "Designed and implemented custom components with Tailwind CSS",
          "Implemented dark mode (soon to be visible) and mobile responsiveness",
          "Deployed website to Vercel",
        ]}
        skills={["Next.js", "React", "Tailwind CSS"]}
      />
      <Project
        title={"Multi-Threaded KV Store"}
        date={"February 2024"}
        description={[
          "Extremely fast multi-threaded key-value store written in C",
          "Designed and implemented thread-safe hash table using djb2 hashing algorithm",
          "Ensured thread safety with POSIX mutexes and condition variables",
          "Ranked second fastest key-value store out of class of 100+ students",
        ]}
        skills={["C", "POSIX Threads", "Mutexes", "Condition Variables"]}
      />
      <Project
        title={"Distributed KV Database"}
        date={"April 2023"}
        description={[
          "Developed complete implementation of the Raft consensus algorithm as a distributed key-value store",
          "Ensured fault tolerance and leader election with Raft",
          "Designed and integrated a UDP message handling mechanism using Java Datagram Sockets, enabling efficient communication between nodes",
        ]}
        skills={["Java", "Raft", "UDP", "Distributed Systems"]}
      />
      <Project
        title={"Reliable Transport Protocol"}
        date={"March 2023"}
        description={[
          "Developed an implementation of a reliable transport protocol with TCP-like semantics",
          "Written in Python using UDP as the underlying transport protocol",
          "Implements several features of TCP such as fast retransmit",
        ]}
        skills={["Python", "UDP", "TCP"]}
      />
    </Box>
  );
}

export default ProjectsSection;
