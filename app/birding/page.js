import Bird from "@/components/Bird";
import MansoryGallery from "@/components/MansoryGallery";
import Image from "next/image";
import Link from "next/link";
import { aire, contactUs } from "../data";
import ServicesHero from "@/components/ServicesHero";

export const metadata = {
  title: "Avistamiento de Aves en los Llanos Orientales de Colombia | Monterrey Casanare",
  keywords: ['Avistamiento de aves', 'Colombia', 'Llanos Orientales', 'Monterrey Casanare', 'Aves endémicas', 'Guías expertos', 'Fotografía de aves', 'Naturaleza'],
  description: "Explora la diversidad de aves de Colombia en los Llanos Orientales, Monterrey Casanare, con nuestros tours guiados por expertos. ¡Vive la emoción de observar aves en su hábitat natural y captura momentos inolvidables con tu cámara!"
}

export const serviciosAire = [
  {
    title: "Avistamiento de Aves",
    description: "Explora la riqueza ornitológica de Colombia en los Llanos Orientales, Monterrey Casanare. Acompañado por guías expertos, descubrirás aves endémicas y migratorias en su hábitat natural.",
    images: 'bg-tira-avistamiento',
    link: "/birding"
  },
  {
    title: "Parapente a Motor",
    description: "Siente la adrenalina de volar sobre paisajes impresionantes en Monterrey Casanare. Nuestros aliados certificados te guiarán en esta emocionante experiencia llena de libertad.",
    images: 'bg-tira-paramotor',
    link: "/parapente"
  },
  {
    title: "Talleres y Charlas sobre Aves",
    description: "Aprende sobre la diversidad de aves de Colombia y la importancia de su conservación. Nuestros talleres, diseñados para todas las edades y niveles de experiencia, te brindarán los conocimientos necesarios para disfrutar al máximo de la observación de aves.",
    images: [
      '/Images/birding/Birding_1.webp',
      '/Images/birding/Birding_7.webp',
      '/Images/birding/Birding_8.webp',
    ],
    link: "/birding"
  }
]

export default async function Page() {
  return (
    <section className="flex flex-wrap justify-around items-stretch gap-8 space-y-20 my-28">
      <section className="space-y-6">
        <div >
          <h1 className="lg:text-4xl text-2xl text-center text-pretty"> Vive Montuno desde el Aire:</h1>
          <h3 className="lg:text-xl text-lg text-center text-pretty"> Avistamiento de Aves y Parapente a Motor con Montuno</h3>
        </div>
        <div className="bg-white  overflow-hidden relative lg:flex lg:items-center p-2 text-lg">
          <div className="max-w-2xl space-y-4 flex flex-col self-start">
            <p>Colombia, paraíso de más de 1.900 especies de aves, te invita a una aventura sin igual. Con Montuno, explorarás este tesoro natural desde dos perspectivas extraordinarias:</p>
            <ul className="space-y-1 text-left text-pretty list-disc indent-3" >
              <li>
                <p><strong>Avistamiento de Aves:</strong> Acompañado por guías expertos, sumérgete en la riqueza ornitológica del país. Nuestros cómodos alojamientos y equipos de observación te permitirán apreciar cada detalle de estas majestuosas criaturas.</p>
              </li>
              <li>
                <p><strong>Parapente a Motor:</strong> Siente la libertad del viento en tu rostro mientras vuelas sobre paisajes impresionantes. Nuestros aliados certificados te guiarán en esta emocionante experiencia llena de adrenalina.</p>
              </li>
              <li>
                <p><strong>Talleres y Charlas sobre Aves:</strong> Aprende sobre la diversidad de aves de Colombia y la importancia de su conservación. Nuestros talleres, diseñados para todas las edades y niveles de experiencia, te brindarán los conocimientos necesarios para disfrutar al máximo de la observación de aves.</p>
              </li>
            </ul>
            <a href={`https://web.whatsapp.com/send?phone=${contactUs[0].value.split(' ').join("").slice(1)}&text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20los%20tours%20de%20avistamiento%20de%20aves%20y%20parapente%20a%20motor%20con%20Montuno.`} className="bg-primary inline-block self-center p-2  text-white font-bold  rounded-lg hover:bg-white hover:text-primary hover:ring-primary hover:ring-2 duration-300 ease-in-out">¡Contactanos para una experiencia personalizada!</a>
          </div>
          <div className="grid grid-cols-2 max-w-2xl w-5/6 gap-2 place-items-center mx-auto">
            <img loading='lazy' src="/Images/66.webp" className="w-full h-full object-cover rounded-lg" alt="Tree" />
            <div className="">
              <img loading='lazy' src="/Images/paramotor/paramotor.jpg" className="rounded-lg w-full" alt="Tree" />
              <img loading='lazy' src="" className="rounded-lg w-full" alt="Tree" />
            </div>
          </div>
        </div>
      </section>

      {serviciosAire.map((servicio, index) => <ServicesHero key={index} data={servicio} />)}
      <section className="space-y-8">
        <h1 className="lg:text-3xl text-center"> <strong>Alas y Paisajes: Memorias de Avistamientos y Vuelos con Montuno</strong></h1>
        <MansoryGallery array={aire} />
      </section>

    </section>
  );
}  