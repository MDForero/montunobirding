import Bird from "@/components/Bird";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Avistamiento de Aves en los Llanos Orientales de Colombia | Monterrey Casanare",
  keywords: ['Avistamiento de aves', 'Colombia', 'Llanos Orientales', 'Monterrey Casanare', 'Aves endémicas', 'Guías expertos', 'Fotografía de aves', 'Naturaleza'],
  description: "Explora la diversidad de aves de Colombia en los Llanos Orientales, Monterrey Casanare, con nuestros tours guiados por expertos. ¡Vive la emoción de observar aves en su hábitat natural y captura momentos inolvidables con tu cámara!"
}

export default async function Page() {
  const data = await fetch('https://www.montunobirding.com/birds.json', { cache: 'default' }).then(res => res.json());

  return (
    <div>
      <section className="flex flex-wrap justify-around items-stretch gap-8 ">
        {data.map(bird => <Bird bird={bird} key={bird.english_name} />)}
      </section>
    </div>
  );
}  