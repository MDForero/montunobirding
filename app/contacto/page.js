import Image from "next/image";
import { contactUs } from "../data";

export default function Page() {
  return (
    <div className="space-y-32 mt-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-neutral-900">Contáctanos</h1>
        <p className="text-neutral-600 text-center max-w-3xl">Si tienes alguna pregunta o deseas reservar un tour, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
      </div>
      <section className=" max-w-7xl mx-auto flex justify-around items-center flex-wrap gap-8">

        {contactUs.map(contact => <div key={contact.value} className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-80 h-56 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
        >
          <svg
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute blur z-10 fill-primary duration-500 group-hover:blur-none group-hover:scale-105"
          >
            <path
              transform="translate(110 110)"
              d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
            ></path>
          </svg>

          <div className="z-20 flex flex-col justify-center items-center text-white">
            <Image src={contact.svg} width={50} height={0} />
            <a href={`${contact.link}`} className="font-bold">{contact.value}</a>
          </div>
        </div>)}
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.8400055803927!2d-72.88729822430878!3d4.879225535149511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad3d956e77dd3%3A0x652825442536fda2!2sMontuno%20Birding!5e0!3m2!1ses!2sco!4v1714418565434!5m2!1ses!2sco" width="100%" height="450" w allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}  