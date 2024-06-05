import Package from "@/components/Package";

export const metadata = {
  title: "Senderismo en el Piedemonte Llanero | Monterrey Casanare",
  keywords: ['Senderismo', 'Piedemonte Llanero', 'Monterrey Casanare', 'Naturaleza', 'Aventura', 'Caminatas', 'Belleza Natural'],
  description: "Descubre la magia natural del Piedemonte Llanero con nuestras rutas de senderismo. Explora paisajes únicos, disfruta de amaneceres espectaculares y conecta con la naturaleza en un entorno tranquilo y relajante."

}

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto space-y-24 py-12">
      <section className="bg-white  overflow-hidden relative lg:flex lg:items-center">
        <div className="text-center text-balance">
          <h1 className="lg:text-4xl text-2xl">Senderismo con MONTUNO</h1>
          <h3 className="lg:text-xl text-lg">¡Explora la Magia Natural del Piedemonte Llanero!</h3>
          <h1>Senderismo para Todos</h1>
          <p>Nuestros senderos están diseñados para que todos puedan disfrutar de la belleza natural de los llanos. No importa tu edad o condición física, tenemos una ruta perfecta para ti.</p>
        </div>
        <div className="grid grid-cols-2 w-5/6 gap-2 place-items-center mx-auto">
          <img loading='lazy' src="/Images/senderismo/IMG-20240602-WA0012.webp" className="w-full h-full object-cover rounded-lg" alt="Tree" />
          <div className="">
            <img loading='lazy' src="/Images/senderismo/IMG-20240602-WA0005.webp" className="rounded-lg w-full" alt="Tree" />
            <img loading='lazy' src="/Images/senderismo/IMG-20240602-WA0004.webp" className="rounded-lg w-full" alt="Tree" />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 ">
        <div className="space-y-4 place-self-center">
          <h2 className="text-green-900 font-black text-2xl text-center">¿Qué te Espera en Nuestros Senderos?</h2>
          <ul className="text-pretty list-disc " >
            <li name='senderos' className="  text-green-800 p-2 " >
              <strong className="font-black">Paisajes Únicos:</strong>
              <p className="font-medium ml-8 text-green-700">Descubre la diversidad del piedemonte llanero, con sus colinas, bosques y ríos.</p>
            </li>
            <li name='senderos' className="  text-green-800 p-2">
              <strong className="font-black">Amaneceres Espectaculares:</strong>
              <p className="font-medium ml-8 text-green-700">Disfruta de los colores del amanecer desde miradores privilegiados.</p>
            </li>
            <li name='senderos' className="  text-green-800 p-2">
              <strong className="font-black">Conexión con la Naturaleza:</strong>
              <p className="font-medium ml-8 text-green-700">Respira aire puro, escucha el canto de las aves y relájate en un entorno tranquilo.</p>
            </li>
            <li name='senderos' className="  text-green-800 p-2">
              <strong className="font-black">Bienestar Físico y Mental:</strong>
              <p className="font-medium ml-8 text-green-700">El senderismo es una excelente forma de ejercitarte y reducir el estrés.</p>
            </li>
          </ul>
        </div>
        <img loading='lazy' src="/Images/senderismo/Imagen de WhatsApp 2024-06-01 a las 11.50.20_8cae8801.webp" alt="Senderismo" className="object-cover w-full rounded-md" />
      </section>
      <section className="flex justify-center md:justify-between  max-w-7xl gap-4 flex-wrap ">
        {packages.map((item, index) => <Package key={index} data={item} />)}
      </section>

    </div>
  );
}
export const packages = [
  {
    title: "Explorando el Piedemonte Llanero",
    price: "$250.000 COP",
    duration: "2 días / 1 noche",
    description: "Sumérgete en la belleza natural del piedemonte llanero con este paquete de senderismo. Recorre senderos rodeados de exuberante vegetación, descubre cascadas escondidas y disfruta de vistas panorámicas impresionantes.",
    performance: [
      "Dos caminatas guiadas por senderos de diferentes niveles de dificultad.",
      "Una noche de alojamiento en nuestro cómodo lodge.",
      "Todas las comidas incluidas, con opciones vegetarianas y veganas disponibles.",
      "Transporte desde y hacia el punto de inicio del sendero."
    ]
  },
  {
    title: "Caminata Histórica por los Llanos",
    price: "$380.000 COP",
    duration: "3 días / 2 noches",
    description: "Descubre la historia y la cultura de los Llanos Orientales a través de esta caminata guiada. Recorre antiguos caminos, visita sitios históricos y aprende sobre las tradiciones y costumbres de la región.",
    performance: [
      "Tres caminatas guiadas por senderos históricos y culturales.",
      "Dos noches de alojamiento en posadas locales con encanto.",
      "Todas las comidas incluidas, con platos típicos de la región.",
      "Transporte entre los diferentes puntos de la caminata.",
      "Charlas y actividades culturales para conocer más sobre la historia de los Llanos."
    ]
  },
  {
    title: "Expedición al Cañón del Río Güejar",
    price: "$600.000 COP",
    duration: "5 días / 4 noches",
    description: "Para los amantes de la aventura y la naturaleza, esta expedición te lleva a explorar el impresionante Cañón del Río Güejar. Disfruta de caminatas desafiantes, rappel en cascadas y la oportunidad de acampar bajo las estrellas.",
    performance: [
      "Cinco días de caminatas guiadas por senderos exigentes.",
      "Rappel en cascadas y descensos emocionantes.",
      "Cuatro noches de alojamiento en campamentos equipados.",
      "Todas las comidas incluidas, preparadas por nuestro chef de montaña.",
      "Equipo de seguridad y guías expertos en actividades de aventura.",
      "Transporte desde y hacia el punto de inicio de la expedición."
    ]
  }
]
