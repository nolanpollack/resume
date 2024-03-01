'use client'
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import github from "../assets/github.png";
import {ReactNode} from "react";

function H1({title}: { title: string }) {
    return <h1 className="py-4 lg:py-6 sm:text-5xl text-4xl text-gray-600">{title}</h1>
}

function H2({title}: { title: string }) {
    return <h2 className="mb-4 font-bold tracking-wide text-xl text-gray-600 ">{title}</h2>
}

function H3({title}: { title: string }) {
    return <h3 className="text-xl text-gray-600 pb-1">{title}</h3>
}

function H4({title}: { title: string }) {
    return <h4 className="text-gray-600 text-lg">{title}</h4>
}

function H5({title}: { title: string }) {
    return <h5 className="text-gray-600 text-sm">{title}</h5>
}

function WhiteBox(props: { children: ReactNode }) {
    // return <div className="relative bg-gray-200 px-6 py-3 shadow-xl shadow-gray-500/20 hover:ring-8 ring-gray-500 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    return <div
        className="justify-center items-center bg-gray-100 shadow-xl rounded-lg px-5 m-2 py-4">
        {props.children}
    </div>
}

function ContactSection() {
    return <div className="flex flex-wrap flex-row justify-around">
        <ContactItem title={"nolanfpollack@gmail.com"} link={"mailto:nolanfpollack@gmail.com"} image={mail}/>
        <ContactItem title={"727-204-9285"} link={"tel:1-727-204-9285"} image={phone}/>
        <ContactItem title={"linkedin.com/in/nolan-pollack"} link={"https://www.linkedin.com/in/nolan-pollack/"}
                     image={linkedin}/>
        <ContactItem title={"github.com/nolanpollack"} link={"https://github.com/nolanpollack"} image={github}/>
    </div>
}

function ContactItem({title, link, image}: { title: string, link: string, image: any }) {
    return <a href={link} target="_blank" rel="noreferrer">
        <div className="flex space-x-2 hover:bg-gray-200 px-1.5 mx-1 text-nowrap rounded-lg py-0.5 active:bg-gray-300">
            <Image className="object-contain" src={image} width={15} height={15} alt={"Phone Logo"}/>
            <p className="text-gray-600 flex-1">{title}</p>
        </div>
    </a>
}

function EducationItem({school, degree, date}: { school: string, degree: string, date: string }) {
    return <div className="py-4">
        <div className="flex flex-row">
            <H3 title={school}/>
            <h4 className="tracking-widest text-gray-900 ml-auto">{date}</h4>
        </div>
        <H5 title={degree}/>
    </div>
}

function WorkExperience({title, company, date, children}: {
    title: string,
    company: string,
    date: string,
    children: ReactNode
}) {
    return <div className="py-4 group">
        <div className="flex flex-row">
            <H3 title={title}/>
            <h4 className="tracking-widest text-gray-900 ml-auto">{date}</h4>
        </div>
        <H4 title={company}/>
        <ul className="">
            {children}
        </ul>
    </div>
}

function ExperienceBullets({children}: { children: ReactNode }) {
    return <ul className="list-disc text-gray-500 list-outside mx-10 space-y-1.5">
        {children}
    </ul>

}

function EducationSection() {
    return <WhiteBox>
        <div className="divide-y">
            <H2 title={"Education"}/>
            <EducationItem school={"Northeastern University"}
                           degree={"Master of Science in Computer Science"} date={"September 2024 - May 2026"}/>
            <EducationItem school={"Northeastern University"}
                           degree={"Bachelor of Science in Computer Science and Business Administration, Concentration in FinTech"}
                           date={"September 2020 - May 2024"}/>
        </div>
    </WhiteBox>
}

function ExperienceSection() {
    return <WhiteBox>
        <div className="divide-y">
            <H2 title={"Experience"}/>
            <WorkExperience title={"Software Engineer Co-op"} company={"Toast"} date={"May 2023 - August 2023"}>
                <ExperienceBullets>
                    <li>Made numerous code contributions to the production environment focusing on the
                        integration of the Sling schedule management platform (Python) with Toast platforms
                        (Kotlin), ensuring seamless data exchange and system compatibility.
                    </li>
                    <li>Enriched partner-facing REST API by introducing a country code field, significantly
                        facilitating internationalization efforts and enhancing live synchronization between
                        Toast and Sling.
                    </li>
                    <li>Implemented a new table in the established Sling database, allowing for efficient
                        tracking of made API calls to remove redundancy while maintaining data integrity and
                        association with other key values within the database.
                    </li>
                    <li>
                        Designed an engaging front-end banner using React framework on the homepage of Toast to
                        drive engagement to Sling, resulting in dozens of new signups.
                    </li>
                    <li>
                        Utilized PyTest and JUnit to rigorously test code, guaranteeing high-quality software.
                    </li>
                </ExperienceBullets>
            </WorkExperience>
        </div>
    </WhiteBox>
}

export default function Home() {
    return (
        <main className="bg-white min-h-screen flex-col items-center p-4 lg:py-12 lg:px-44">
            <div className="flex flex-col items-center py-6 pt-0">
                <H1 title={"Nolan Pollack"}/>
                <ContactSection/>
            </div>
            <div className="flex flex-col sm:flex-row">
                {/*Left Side*/}
                <div>
                    <EducationSection/>
                    <ExperienceSection/>
                </div>
                {/*Right Side*/}
                <div>
                    <WhiteBox>
                        <H2 title={"Skills"}/>
                    </WhiteBox>
                </div>
            </div>
        </main>
    );
}

