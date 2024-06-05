import Gallery from "@/components/Gallery";
import Package from "@/components/Package";
import Image from "next/image";

export async function generateStaticParams() {
    const data = await fetch('https://www.montunobirding.com/birds.json', { cache: 'reload' }).then(res => res.json());
    return data.map(birds => ({ bird: birds.scientific_name.split(' ').join('_') }));
}

export async function generateMetadata ({params}) {
    const data = await fetch('https://www.montunobirding.com/birds.json', { cache: 'reload' }).then(res => res.json());
    const birdData = data?.find(birds => birds.scientific_name.split(' ').join('_') === params.bird);
    return {
        title: birdData?.scientific_name + ' | Montuno Birding',
        description: `Descubre todo sobre el ${birdData?.spanish_name} en los Llanos Orientales de Colombia. Conoce su nombre científico, nombre en inglés y más.`,
    }
}

export default async function Page({ params }) {
    const { bird } = params;
    console.log(bird)
    const data = await fetch('https://www.montunobirding.com/birds.json', { cache: 'reload' }).then(res => res.json());
    const birdData = data.find(birds => birds.scientific_name.split(' ').join('_') === bird);

    return (<div className="space-y-12 py-12">
        <main className="flex flex-wrap gap-4 justify-center">
            <Gallery data={birdData} />
            <div>
                <dl className="text-2xl">
                    <dt className="font-black  text-green-950">Nombre científico:</dt>
                    <dd className="indent-32 text-green-800">{birdData.scientific_name}</dd>
                    <dt className="font-black  text-green-950">Nombre en ingles:</dt>
                    <dd className="indent-32 text-green-800">{birdData.english_name}</dd>
                    <dt className="font-black  text-green-950">Nombre común:</dt>
                    <dd className="indent-32 text-green-800">{birdData.spanish_name}</dd>
                </dl>
                <></>
            </div>
        </main>
        <section className="flex justify-center gap-3 flex-wrap">
            {packages.map((pack, index) => <Package data={pack} key={index} />)}
        </section>
    </div>

    );
}

export const packages = [
    {
        title: "Exploración Ornitológica Básica",
        price: "$300.000 COP",
        duration: "1 día completo",
        description: "Ideal para principiantes y entusiastas de las aves, este plan te llevará a los mejores puntos de observación de aves en la región. Aprenderás sobre las especies locales, sus hábitats y comportamientos, mientras disfrutas de la belleza natural de los Llanos.",
        performance: [
            "Guía experto en aves.",
            "Transporte en vehículo cómodo y seguro.",
            "Uso de binoculares y guías de campo.",
            "Almuerzo tipo picnic en un entorno natural.",
            "Seguro de viaje."
        ]
    },
    {
        title: "Expedición Ornitológica Avanzada",
        price: "$550.000 COP",
        duration: "3 días / 2 noches",
        description: "Para observadores de aves experimentados, esta expedición te llevará a lugares remotos y menos explorados en busca de especies raras y endémicas. Acamparás en plena naturaleza, rodeado de los sonidos y colores de las aves.",
        performance: [
            "Guía experto en aves con amplio conocimiento de la región.",
            "Transporte en vehículo 4x4.",
            "Equipo de campamento (carpa, saco de dormir, etc.).",
            "Todas las comidas durante la expedición.",
            "Uso de equipos de observación profesionales (telescopios, grabadoras de sonido).",
            "Seguro de viaje."
        ]
    },
    {
        title: "Fotografía de Aves en los Llanos",
        price: "$800.000 COP",
        duration: "5 días / 4 noches",
        description: "Diseñado para fotógrafos aficionados y profesionales, este plan te permitirá capturar imágenes espectaculares de las aves de los Llanos. Aprenderás técnicas de fotografía de aves, composición y edición, mientras disfrutas de la diversidad de especies y paisajes.",
        performance: [
            "Guía experto en aves y fotografía de naturaleza.",
            "Transporte en vehículo 4x4.",
            "Alojamiento en cómodos hoteles o posadas.",
            "Todas las comidas durante el viaje.",
            "Talleres y sesiones prácticas de fotografía de aves.",
            "Revisión y edición de fotografías.",
            "Seguro de viaje."
        ]
    }
]
