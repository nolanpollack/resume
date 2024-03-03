import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github.png";
import Image from "next/image";

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
      <div className="mx-1 flex space-x-2 text-nowrap rounded-lg px-1.5 py-0.5 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-slate-600">
        <Image
          className="object-contain"
          src={image}
          width={15}
          height={15}
          alt={"Phone Logo"}
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

export default ContactSection;
