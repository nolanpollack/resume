"use client";
import Box from "@/components/Box";
import { H2, H5 } from "@/components/Headings";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";
import TextItem from "@/components/TextItem";
import github from "@/assets/github.svg";
import Image from "next/image";
import icon from "@/app/icon.svg";

function LinkWithIcon({
  link,
  linkIcon,
  alt,
}: {
  link: string;
  linkIcon: any;
  alt: string;
}) {
  return (
    <a
      className="flex flex-row space-x-2 rounded-lg px-1 pt-0 hover:bg-gray-200 dark:hover:bg-slate-600"
      href={link}
      target="_blank"
    >
      <Image src={linkIcon} alt={alt} width={15} height={15} />
      <H5>{link}</H5>
    </a>
  );
}

type LinkProps = {
  link: string;
  linkIcon: any;
  alt: string;
};

function Project({
  title,
  date,
  description,
  skills,
  links,
}: {
  title: string;
  date: string;
  description: string[];
  skills?: string[];
  links?: LinkProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const bullets = description.map((bullet) => (
    <li key={bullet}>
      <H5>{bullet}</H5>
    </li>
  ));
  const skillItems = skills
    ? skills.map((skill, index) => <TextItem key={index} title={skill} />)
    : null;

  const linksWithIcons = links
    ? links.map((link) => (
        <LinkWithIcon
          key={link.link}
          link={link.link}
          linkIcon={link.linkIcon}
          alt={link.alt}
        />
      ))
    : null;

  return (
    <div>
      <Button title={title} onClick={() => setIsOpen(true)} />
      <Modal title={title} date={date} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="divide-y">
          <ul className="text-pretty text-gray-600">{bullets}</ul>
          {skills && (
            <div className="mt-2 pt-3">
              <p className="mr-1 inline-flex text-gray-600 dark:text-slate-300">
                Skills:{" "}
              </p>
              {skillItems}
            </div>
          )}
          {links && (
            <div className="mt-3 pt-3">
              <div className="inline-flex flex-col">{linksWithIcons}</div>
            </div>
          )}
        </div>
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
        links={[
          {
            link: "https://nolanpollack.com",
            linkIcon: icon,
            alt: "Website Favicon",
          },
          {
            link: "https://github.com/nolanpollack/resume",
            linkIcon: github,
            alt: "GitHub Logo",
          },
        ]}
      />
      <Project
        title={"NBA Connections"}
        date={"March 2024"}
        description={[
          "Developed an application in Python that finds connections between NBA players based on teammates",
          "Utilized a graph data structure to represent the NBA players and their connections",
          "Implemented a breadth-first search algorithm to find the shortest path between two players",
          "Utilized the NBA API to gather player data",
          "Front-end in progress",
        ]}
        skills={[
          "Python",
          "Graph Data Structures",
          "Breadth-First Search",
          "API",
        ]}
      />
      <Project
        title={"Multi-Threaded KV Store"}
        date={"February 2024"}
        description={[
          "Extremely fast multi-threaded key-value store written in C",
          "Designed and implemented thread-safe hash table using djb2 hashing algorithm",
          "Ensured thread safety with POSIX mutexes and condition variables",
          "Ranked fastest key-value store out of class of 100+ students",
        ]}
        skills={[
          "C",
          "Multithreading",
          "POSIX Threads",
          "Mutexes",
          "Condition Variables",
        ]}
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
        links={[
          {
            link: "https://github.com/nolanpollack/Distributed-Key-Value-Database",
            linkIcon: github,
            alt: "GitHub Logo",
          },
        ]}
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
      <Project
        title={"Labyrinth Game"}
        date={"September 2022 - December 2022"}
        description={[
          "Designed an interactive maze-based game utilizing Java with a Maven build configuration",
          "Implemented a server component using the proxy-client pattern, communicating with JSON messages over TCP",
          "Developed clients that implement the communication-layer aspects of the server-client communication",
          "Wrote over 50 classes and thousands of lines of code ensuring test-driven development to manufacture a cohesive, complete application, with unit and integration tests for the entire platform",
        ]}
        skills={[
          "Java",
          "Multithreading",
          "Object-Oriented Design",
          "JSON",
          "JUnit",
        ]}
        links={[
          {
            link: "https://github.com/nolanpollack/labyrinth-game",
            linkIcon: github,
            alt: "GitHub Logo",
          },
        ]}
      />
      <Project
        title={"BGP Router"}
        date={"February 2023"}
        description={[
          "A simulation of a BGP Router in Java",
          "Accepts route announcements from simulated peer routers",
          "Generates new route announcements for peer routers",
          "Manages and compresses a forwarding table",
          "Forwards data packets that arrive from simulated internet users",
        ]}
        skills={["Java", "BGP", "Routing"]}
        links={[
          {
            link: "https://github.com/nolanpollack/BGP-Router",
            linkIcon: github,
            alt: "GitHub Logo",
          },
        ]}
      />
      <Project
        title={"FTP Client"}
        date={"January 2023"}
        description={[
          "Developed an FTP client that can be used for listing, copying, moving, and deleting files and directories on remote FTP servers",
        ]}
        skills={["Java", "FTP"]}
      />
    </Box>
  );
}

export default ProjectsSection;
