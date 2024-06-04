import Package from "@/components/Package"

export default function page() {
    return (
        <div className="space-y-24 py-12">
            <section class="bg-white  overflow-hidden relative lg:flex lg:items-center max-w-7xl">
                <div class="max-w-xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-primary  sm:text-4xl">
                        <span class="block">
                            ¡Atrévete a vivir una emocionante aventura con nuestro Safari Llanero en los imponentes llanos del Casanare!
                        </span>
                    </h2>
                    <p class="text-md mt-4 text-black">
                        Descubre una experiencia única de observación de fauna silvestre, rodeada de paisajes cautivadores, gastronomía auténtica y una cultura vibrante.
                    </p>

                </div>
                <div class="grid grid-cols-2 w-5/6 gap-2 place-items-center mx-auto">
                    <img src="/Images/safari/17.webp" class="w-full h-full  bject-cover rounded-lg" alt="Tree" />
                    <div className="">
                        <img src="/Images/safari/14.webp" class="rounded-lg w-full" alt="Tree" />
                        <img src="/Images/safari/7.webp" class="rounded-lg w-full" alt="Tree" />
                    </div>
                </div>
            </section>
            <section className="space-y-12">
                <h1 className="text-center text-4xl">¿Qué te espera en nuestro Safari Llanero?</h1>
                <ul className="max-w-7xl mx-auto text-pretty flex flex-wrap justify-center gap-6 leading-5 tracking-tight">
                    <li className="max-w-xl "><strong>Observación de Fauna:</strong> Contempla la diversidad de animales que habitan en los llanos, desde aves exóticas hasta mamíferos impresionantes.</li>
                    <li className="max-w-xl "><strong>Paisajes Cautivadores:</strong> Sumérgete en la belleza de los paisajes llaneros, con sus extensas sabanas, ríos serpenteantes y atardeceres de ensueño.</li>
                    <li className="max-w-xl "><strong>Gastronomía Llanera:</strong> Deléitate con los sabores auténticos de la cocina llanera, preparada con ingredientes frescos y locales.</li>
                    <li className="max-w-xl "><strong>Cultura Vibrante:</strong> Conoce las tradiciones y costumbres de los llaneros, su música, sus bailes y su forma de vida.</li>
                </ul>
                <div className="tiraSafari w-full h-96">
                </div>
            </section>
            <section className="flex gap-2 md:justify-between items-stretch justify-center  ">
                {packages.map((data, index) =><Package key={index} data={data} />)}
            </section>
        </div>
    )
}

export const packages = [
    {
        title: "Descubriendo los Llanos",
        price: "$450.000 COP",
        duration: "3 días / 2 noches",
        description: "Sumérgete en la esencia de los Llanos Orientales con este paquete que combina la emoción del safari con la tranquilidad de la naturaleza. Recorre la sabana en busca de fauna exótica, disfruta de cabalgatas al atardecer y relájate en nuestro alojamiento acogedor.",
        performance: [
            "Dos safaris guiados para observar aves, mamíferos y reptiles.",
            "Una cabalgata guiada para explorar los paisajes llaneros.",
            "Dos noches de alojamiento en nuestro cómodo lodge.",
            "Todas las comidas incluidas, con platos típicos de la región.",
            "Transporte desde y hacia el aeropuerto de Yopal."
        ]
    },
    {
        title: "Aventura Llanera Extrema",
        price: "$700.000 COP",
        duration: "5 días / 4 noches",
        description: "Para los amantes de la adrenalina y la naturaleza, este paquete ofrece una experiencia completa en los Llanos. Además de los safaris y cabalgatas, podrás disfrutar de actividades como kayak en los ríos, senderismo por senderos naturales y fogatas nocturnas bajo las estrellas.",
        performance: [
            "Tres safaris guiados para observar la fauna llanera.",
            "Dos cabalgatas guiadas para explorar diferentes zonas de la sabana.",
            "Una excursión en kayak por el río Ariporo.",
            "Una caminata guiada por senderos naturales.",
            "Cuatro noches de alojamiento en nuestro lodge con todas las comodidades.",
            "Todas las comidas incluidas, con opciones vegetarianas y veganas disponibles.",
            "Transporte desde y hacia el aeropuerto de Yopal."
        ]
    },
    {
        title: "Safari Fotográfico en los Llanos",
        price: "$900.000 COP",
        duration: "7 días / 6 noches",
        description: "Diseñado para fotógrafos y amantes de la naturaleza, este paquete te brinda la oportunidad de capturar imágenes únicas de la fauna y flora de los Llanos. Acompañado por un guía experto en fotografía de naturaleza, aprenderás técnicas y trucos para obtener las mejores fotos.",
        performance: [
            "Cuatro safaris guiados enfocados en la fotografía de fauna.",
            "Tres cabalgatas guiadas para acceder a lugares remotos y obtener perspectivas únicas.",
            "Sesiones de revisión y edición de fotos con el guía experto.",
            "Seis noches de alojamiento en nuestro lodge con todas las comodidades.",
            "Todas las comidas incluidas, con opciones vegetarianas y veganas disponibles.",
            "Transporte desde y hacia el aeropuerto de Yopal."
        ]
    }
]
