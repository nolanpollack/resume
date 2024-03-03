import mail from "@/assets/mail.svg";
import phone from "@/assets/phone.svg";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import Image from "next/image";

function ContactItem({
  title,
  link,
  image,
  alt,
}: {
  title: string;
  link: string;
  image: any;
  alt: string;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="mx-1 flex space-x-2 text-nowrap rounded-lg px-1.5 py-0.5 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-slate-600">
        <Image
          className="fill-purple-600 object-contain"
          src={image}
          width={15}
          height={15}
          alt={alt}
        />
        <p className="flex-1 text-gray-600 dark:text-slate-400">{title}</p>
      </div>
    </a>
  );
}

function ContactSection() {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <ContactItem
        title={"nolanfpollack@gmail.com"}
        link={"mailto:nolanfpollack@gmail.com"}
        image={mail}
        alt={"Mail Logo"}
      />
      <ContactItem
        title={"+1 727-204-9285"}
        link={"tel:1-727-204-9285"}
        image={phone}
        alt={"Phone Logo"}
      />
      <ContactItem
        title={"linkedin.com/in/nolan-pollack"}
        link={"https://www.linkedin.com/in/nolan-pollack/"}
        image={linkedin}
        alt={"LinkedIn Logo"}
      />
      <ContactItem
        title={"github.com/nolanpollack"}
        link={"https://github.com/nolanpollack"}
        image={github}
        alt={"GitHub Logo"}
      />
    </div>
  );
}

export default ContactSection;
