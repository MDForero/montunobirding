import Package from "@/components/Package"

export const metadata = {
    title: "Safari Llanero en los Llanos Orientales de Colombia | Monterrey Casanare",
    keywords: ['Safari llanero', 'Llanos Orientales', 'Monterrey Casanare', 'Fauna silvestre', 'Cabalgatas', 'Naturaleza', 'Aventura', 'Cultura llanera'],
    description: "Vive la emoción de un safari llanero en los Llanos Orientales, Monterrey Casanare. Observa la fauna silvestre en su hábitat natural, disfruta de cabalgatas y sumérgete en la cultura y tradiciones llaneras."
}

export default function page() {
    return (
        <div className="space-y-24 py-12">
            <section className="bg-white  overflow-hidden relative lg:flex lg:items-center max-w-7xl">
                <div className="max-w-xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-primary  sm:text-4xl">
                        <span className="block">
                            ¡Atrévete a vivir una emocionante aventura con nuestro Safari Llanero en los imponentes llanos del Casanare!
                        </span>
                    </h2>
                    <p className="text-md mt-4 text-black">
                        Descubre una experiencia única de observación de fauna silvestre, rodeada de paisajes cautivadores, gastronomía auténtica y una cultura vibrante.
                    </p>

                </div>
                <div className="grid grid-cols-2 w-5/6 gap-2 place-items-center mx-auto">
                    <img loading='lazy' src="/Images/safari/17.webp" className="w-full h-full  bject-cover rounded-lg" alt="Tree" />
                    <div className="">
                        <img loading='lazy' src="/Images/safari/14.webp" className="rounded-lg w-full" alt="Tree" />
                        <img loading='lazy' src="/Images/safari/7.webp" className="rounded-lg w-full" alt="Tree" />
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
           
        </div>
    )
}

