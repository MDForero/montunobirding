import Package from "@/components/Package"
import { contactUs } from "../data"
import ServicesHero from "@/components/ServicesHero"
import MansoryGallery from "@/components/MansoryGallery"

export const metadata = {
    title: "Safari Llanero en los Llanos Orientales de Colombia | Monterrey Casanare",
    keywords: ['Safari llanero', 'Llanos Orientales', 'Monterrey Casanare', 'Fauna silvestre', 'Cabalgatas', 'Naturaleza', 'Aventura', 'Cultura llanera'],
    description: "Vive la emoción de un safari llanero en los Llanos Orientales, Monterrey Casanare. Observa la fauna silvestre en su hábitat natural, disfruta de cabalgatas y sumérgete en la cultura y tradiciones llaneras."
}

export const somosTierra = [
    {
        title: 'Safari Llanero',
        description: 'Embárcate en una emocionante expedición para avistar la impresionante fauna silvestre de los llanos. Nuestros guías expertos te llevarán a los mejores lugares para observar chigüiros, caimanes, aves exóticas y mucho más.',
        images: [
            "/Images/safari/15.webp",
            "/Images/safari/Safari_6.webp",
            "/Images/safari/31.webp"
        ],
        cta: '¡Contactanos para una experiencia personalizada!'
    },

    {
        title: 'Senderismo en el Piedemonte Llanero',
        description: 'Recorre senderos mágicos que te conducirán a través de paisajes espectaculares, amaneceres inolvidables y una conexión profunda con la naturaleza.Ideal para todos los niveles, el senderismo con Tierra es una experiencia rejuvenecedora.',
        images: [
            "/Images/senderismo/IMG-20240602-WA0012.webp",
            "/Images/senderismo/IMG-20240602-WA0005.webp",
            "/Images/senderismo/IMG-20240602-WA0004.webp"
        ],
        cta: '¡Contactanos para una experiencia personalizada!'
    },

    {
        title: 'Inmersión Cultural',
        description: 'Sumérgete en la cultura llanera, disfruta de su deliciosa gastronomía, conoce a su gente amable y aprende sobre sus tradiciones centenarias.',
        images: [
            "/Images/cultura/IMG-20240602-WA0006.webp",
            "/Images/cultura/IMG-20240602-WA0007.webp",
            "/Images/cultura/IMG-20240602-WA0008.webp"
        ],
        cta: '¡Contactanos para una experiencia personalizada!'
    }
]

export const galleryTierra = [
    '1.webp',
    '10.webp',
    '11.webp',
    '12.webp',
    '13.webp',
    '14.webp',
    '15.webp',
    '16.webp',
    '17.webp',
    '18.webp',
    '19.webp',
    '2.webp',
    '20.webp',
    '21.webp',
    '22.webp',
    '23.webp',
    '24.webp',
    '25.webp',
    '26.webp',
    '27.webp',
    '28.webp',
    '29.webp',
    '3.webp',
    '30.webp',
    '31.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
    '9.webp',
    'Safari_0.webp',
    'Safari_1.webp',
    'Safari_2.webp',
    'Safari_3.webp',
    'Safari_4.webp',
    'Safari_5.webp',
    'Safari_6.webp',
]

export default function page() {
    return (
        <div className="space-y-24 py-12 mt-20 ">
            <section className="bg-white container px-2 py-4 border-2 rounded-md shadow-2xl">
                <div className="text-center text-pretty ">
                    <h1 className="lg:text-4xl text-2xl"> Aventuras Auténticas en los Llanos de Casanare</h1>
                    <h3 className="lg:text-xl text-lg"> Descubre la magia del Casanare a través de safaris, senderismo y naturaleza pura</h3>
                </div>
                <div className="animationTira bg-tira-safari w-full h-[600px] bg-auto">
                </div>

            </section>
            <div className="bg-white  overflow-hidden relative lg:flex lg:items-center p-2 text-lg">
                <div className="max-w-2xl space-y-4 flex flex-col self-start">
                    <p className="bold">Sumérgete en la esencia de los llanos colombianos con Tierra, la experiencia de aventura de Montuno. Explora la vasta sabana, descubre su rica fauna y disfruta de la calidez de su gente. Te ofrecemos:</p>
                    <ul className="space-y-1 text-left text-pretty list-disc indent-3 text-gray-700 text-sm" >
                        <li>
                            <p><strong> Safari Llanero: </strong>Embárcate en una emocionante expedición para avistar la impresionante fauna silvestre de los llanos. Nuestros guías expertos te llevarán a los mejores lugares para observar chigüiros, caimanes, aves exóticas y mucho más.</p>
                        </li>
                        <li>
                            <p><strong>Senderismo en el Piedemonte Llanero:</strong> Recorre senderos mágicos que te conducirán a través de paisajes espectaculares, amaneceres inolvidables y una conexión profunda con la naturaleza. Ideal para todos los niveles, el senderismo con Tierra es una experiencia rejuvenecedora.</p>
                        </li>
                        <li>
                            <p ><strong>Inmersión Cultural:</strong> Sumérgete en la cultura llanera, disfruta de su deliciosa gastronomía, conoce a su gente amable y aprende sobre sus tradiciones centenarias.</p>
                        </li>
                    </ul>
                    <a href={`https://web.whatsapp.com/send?phone=${contactUs[0].value.split(' ').join("").slice(1)}&text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20los%20tours%20de%20avistamiento%20de%20aves%20y%20parapente%20a%20motor%20con%20Montuno.`} className="bg-primary inline-block self-center p-2 text-pretty text-center  text-white font-bold  rounded-lg hover:bg-white hover:text-primary hover:ring-primary hover:ring-2 duration-300 ease-in-out">¡Contactanos para una experiencia personalizada!</a>
                </div>
                <div className="grid grid-cols-2 max-w-2xl w-5/6 gap-2 place-items-center mx-auto">
                    <img loading='lazy' src="/Images/safari/15.webp" className="w-full h-full object-cover rounded-lg" alt="Tree" />
                    <div className="">
                        <img loading='lazy' src="/Images/safari/Safari_6.webp" className="rounded-lg w-full" alt="Tree" />
                        <img loading='lazy' src="/Images/safari/31.webp" className="rounded-lg w-full" alt="Tree" />
                    </div>
                </div>
            </div>

            {somosTierra.map((item, index) => <ServicesHero key={index} data={item} />)}
            <section>
                <MansoryGallery array={galleryTierra} />
            </section>

        </div>
    )
}

