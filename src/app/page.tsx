'use client'
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import github from "../assets/github.png";

function H1({title}: { title: string }) {
    return <h1 className="py-4 lg:py-6 lg:text-5xl text-2xl text-gray-600">{title}</h1>
}

function H2({title}: { title: string }) {
    return <h2 className="mb-4 font-bold tracking-wide text-xl text-gray-600 ">{title}</h2>
}

function H3({title}: { title: string }) {
    return <h3 className="text-lg text-gray-600">{title}</h3>
}

function H4({title}: { title: string }) {
    return <h4 className="text-gray-600 text-sm">{title}</h4>
}

function P({title}: { title: string }) {
    return <p className="text-gray-600">{title}</p>
}

function WhiteBox(props: { children: React.ReactNode }) {
    // return <div className="relative bg-gray-200 px-6 py-3 shadow-xl shadow-gray-500/20 hover:ring-8 ring-gray-500 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    return <div className="justify-center items-center bg-gray-100 shadow-xl rounded-lg max-content px-5 m-2 py-4">
        {props.children}
    </div>
}

function ContactSection() {
    return <div className="flex flex-col sm:flex-row justify-around sm:space-x-10">
        <ContactItem title={"nolanfpollack@gmail.com"} link={"mailto:nolanfpollack@gmail.com"} image={mail}/>
        <ContactItem title={"727-204-9285"} link={"tel:1-727-204-9285"} image={phone}/>
        <ContactItem title={"linkedin.com/in/nolan-pollack"} link={"https://www.linkedin.com/in/nolan-pollack/"}
                     image={linkedin}/>
        <ContactItem title={"github.com/nolanpollack"} link={"https://github.com/nolanpollack"} image={github}/>
    </div>
}

function ContactItem({title, link, image}: { title: string, link: string, image: any }) {
    return <a href={link} target="_blank" rel="noreferrer">
        <div className="flex space-x-2">
            <Image className="object-contain" src={image} width={15} height={15} alt={"Phone Logo"}/>
            <P title={title}/>
        </div>
    </a>
}

function EducationItem({school, degree, date}: { school: string, degree: string, date: string }) {
    return <div className="py-4">
        <div className="flex flex-row">
            <H3 title={school}/>
            <h4 className="tracking-widest text-gray-900 ml-auto">{date}</h4>
        </div>
        <H4 title={degree}/>
    </div>
}

export default function Home() {
    return (
        <main className="bg-white min-h-screen flex-col items-center p-12 px-52">
            <div className="flex flex-col items-center p-6 pt-0">
                <H1 title={"Nolan Pollack"}/>
                <ContactSection/>
            </div>
            <WhiteBox>
                <div className="divide-y">
                    <H2 title={"Education"}/>
                    <EducationItem school={"Northeastern University"}
                                   degree={"Master of Science in Computer Science"} date={"September 2024 - May 2026"}/>
                    <EducationItem school={"Northeastern University"}
                                   degree={"Bachelor of Science in Computer Science and Business Administration, Concentration in FinTech"}
                                   date={"September 2020 - May 2024"}/>
                </div>
            </WhiteBox>
        </main>
    );
}
