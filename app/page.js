import BirdsInsight from "@/components/BirdsInsight";
import Count from "@/components/Count";
import Team from "@/components/Team";
import Image from "next/image";
import AdviceBanner from "@/components/AdviceBanner";
import BannerDiv from "@/components/BannerDiv";

export const metadata = {
  title: 'Montuno Birding | Ecoturismo en los Llanos Orientales de Colombia',
  keywords: ["Ecoturismo", "Llanos Orientales", 'Avistamiento de aves', 'Parapente a motor', 'Senderismo', 'Safari llanero', 'Turismo sostenible', 'Aviturismo', 'Colombia', 'Monterrey Casanare', 'Operador turístico', "Guía turístico"],
  description: "Descubre la magia de los Llanos Orientales, en Monterrey Casanare, con MONTUNO, tu operador turístico y guía experto en ecoturismo. Ofrecemos experiencias únicas de avistamiento de aves, parapente, senderismo y safaris. ¡Vive aventuras inolvidables en contacto con la naturaleza!"
}

export default async function Home() {
  const data = await fetch('http://www.montunobirding.com/flyers.json', { cache: 'reload' }).then(res => res.json()).catch(err => console.log(err))
  const banners = await fetch('http://www.montunobirding.com/banners.json', { cache: 'reload' }).then(res => res.json()).catch(err => console.log(err))
  console.log(data, banners)

  return (<>
    {/* {data && <AdviceBanner data={data[1]} />} */}
    
    <section className="space-y-32">
      <main className="w-full  flex flex-col justify-center items-center relative bg-white/80 -z-10 ">
        <Image src='/Images/principal.jpg' width={0} height={0} className="w-full h-[400px] md:h-full object-cover" />
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center bg-white/40">
          <Image
            src="/svg/logo-no-background.svg"
            alt="Logo"
            width={600}
            height={600} />
          <p className=" lg:text-4xl max-w-4xl text-center">¡Embárcate en una aventura sin igual con Montuno Birding!</p>
          <p className=" lg:text-4xl max-w-4xl text-center">Prepárate para descubrir un mundo de aves exóticas y paisajes impresionantes en Casanare </p>
        </div>
      </main>
      <BannerDiv data={banners[0]} />
      <section className="bg-white max-w-7xl mx-auto">
        <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16 flex  flex-col-reverse lg:flex-row border rounded-lg m-2 justify-evenly items-center">
          <div>

            <h2 className="text-2xl font-semibold font-display text-black line-clamp-2 max-w-2xl sm:text-3xl">
              ¡Vive la Aventura en los Llanos con MONTUNO!
            </h2>
            <p className="mt-2 max-w-xl text-base ">
              Sumérgete en la belleza natural de los Llanos Orientales y descubre experiencias únicas de ecoturismo. En MONTUNO, te ofrecemos:
            </p>

            <ul className="ml-5 list-disc text-gray-700">
              <li name="cta" className=""><strong>Avistamiento de aves:</strong>
                Explora la diversidad de especies que habitan en nuestra región.</li>
              <li name="cta" className=""><strong>Parapente a motor:</strong>
                Vuela sobre los paisajes impresionantes y siente la libertad.</li>
              <li name="cta" className=""><strong>Senderismo:</strong>
                Recorre senderos mágicos y descubre la historia de la región.</li>
              <li name="cta" className=""><strong>Safari llanero:</strong>
                Vive la emoción de un safari y conoce la cultura llanera.</li>
              <li name="cta" className=""><strong>Recorridos a fuentes hídricas:</strong>
                Refréscate en ríos, cascadas y quebradas cristalinas.</li>
              <li name="cta" className=""><strong>Talleres y charlas sobre aves:</strong>
                Aprende sobre la avifauna local y su conservación.</li>
              <li name="cta" className=""><strong>Gastronomía típica:</strong>
                Deléitate con los sabores auténticos de la cocina llanera.</li>
            </ul>
            <p>¡Y mucho más! Nuestro equipo de expertos te guiará en cada paso de tu aventura, creando recuerdos inolvidables.</p>
            <div className="mt-6 sm:flex jusitfy-start">

              <a href="https://api.whatsapp.com/send/?phone=%2B573228725091&text&type=phone_number&app_absent=0" target="_blank" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-white hover:text-primary hover:ring ring-primary ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" >
                ¡Reserva tu Experiencia Ahora!
              </a>
            </div>

          </div>

          <div className="lg:w-3/5">
            <picture className="">
              <img loading='lazy' className="object-cover w-full mx-auto maw-w-44 rounded-lg overflow-hidden" src="/Images/Cabeza_De_Hueso_2.webp" alt="Cabeza de hueso" />
            </picture>
          </div>
        </div>
      </section>
      <BannerDiv data={banners[1]} />
      <section>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl">Vive la magia de Montuno</h1>
          <h1 className="text-xl">Contamos con multiples servicios para hacer tu viaje una experiencia inolvidable </h1>
        </div>
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div className=" group w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3</div>.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bird-claw</title> <path d="M26.256 12.016c-0.234-0.35-0.569-0.663-1.019-0.912-0.91-0.503-1.792-0.468-2.518-0.117l0-0.003c-1.967 0.954-3.883 1.407-5.813 1.749-0.499-0.189-0.659-0.563-0.316-1.212 1.18-1.134 2.564-2.049 3.963-2.522 1.138-0.149 2.040-1.066 2.386-2.144 1.462-0.323 3.206-0.193 4.289 0.984-0.705-4.241-3.153-4.71-5.359-4.179-0.074-0.049-0.15-0.096-0.232-0.141-1.912-1.057-3.698 0.26-4.173 1.897-0.368 0.961-0.811 1.868-1.324 2.719-2.184 1.952-4.255 1.186-5.852-0.973-1.233-1.77-2.318-4.081-2.937-6.257h-6.281v4.337c3.526 1.653 8.709 7.788 7.595 9.588-1.244 0.606-2.6 1.117-4.137 1.62-0.172 0.037-0.338 0.091-0.497 0.161-0.012 0.004-0.023 0.007-0.035 0.011l0.003 0.003c-1.339 0.605-2.171 2.282-1.722 3.694-1.209 2.376-1.1 5.505 3.645 6.325-1.373-1.301-1.678-3.007-1.198-4.391 1.454 0.18 2.653-0.9 3.046-2.197 0.518-1.319 1.327-2.504 2.609-2.907 1.385-0.435 5.582 1.236 7.67 4.729 0.194 0.604 0.622 1.159 1.347 1.559 0.711 0.393 1.397 0.465 2.003 0.319 1.172 1.27 2.158 3.197 1.692 5.011 3.374-3.034 2.293-5.762 0.557-7.656 0.142-1.041-0.247-2.134-1.427-2.787-0.584-0.323-1.155-0.423-1.682-0.362-0.976 0.007-2.104-0.174-3.122-0.538-1.388-0.987-1.297-1.93-0.154-2.543 1.709-0.164 3.4 0.379 4.736 1.070 0.124 0.094 0.26 0.183 0.409 0.266 1.62 0.896 3.107 0.128 3.826-1.102 1.354 0.327 2.583 1.561 3.377 3.051 1.392-4.274-0.881-5.916-3.359-6.15z"></path> </g></svg>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Birding
            </h3>
            <p className=" text-gray-500 text-center leading-4 group-hover:line-clamp-none  tracking-tight line-clamp-3 ">
              Colombia: ¡El paraíso de las aves con más de 1900 especies! Descubre el 26% de ellas en nuestra región. Recorridos guiados por expertos, alojamiento acogedor y equipos de primera. ¡Conecta con la naturaleza!
            </p>
          </div>
          <div className="group w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M272.5 18.906c-12.775.17-26.23 2.553-40.344 7.594-30.165 55.31-68.313 120.904-125.72 178.5-21.19 21.26-39.23 44.94-52.28 68.313 1.294 6.312 4.984 11.65 10.72 17.406 10.992 11.032 30.86 21.618 54.593 33.25 46.313 22.695 107.284 50.39 146.374 108.467l195.625.032c-20.198-70.834-100.276-101.12-159.064-83.94-.073.03-.145.066-.22.095-1.61.633-3.27 1.138-4.967 1.563-.024.005-.04.025-.064.03-8.86 2.204-18.82 1.68-29.125-.406-24.79-5.02-52.76-19.695-61.342-45.687-28.615-86.673 16.65-179.742 78.156-223.28 2</div>3.064-16.328 49.06-25.848 74.47-24.47.144.008.29.023.436.03-24.19-22.74-53.33-37.95-87.25-37.5zm81.75 56c-19.213.01-39.414 7.59-58.625 21.188-54.644 38.682-96.652 125.024-71.188 202.156 5.127 15.53 27.25 29.162 47.282 33.22 10.015 2.027 19.218 1.518 23.717-.283 2.25-.9 3.173-1.84 3.594-2.562.422-.72.81-1.663.25-4.375-9.08-44.167-2.743-84.61 22.533-114.47 23.586-27.863 62.753-45.462 117.406-50.686-15.014-47.145-37.47-71.226-61.314-80.03-6.407-2.368-13.032-3.706-19.812-4.064-1.272-.067-2.563-.094-3.844-.094zM43.78 294.22c-5.405 12.554-9.136 24.756-10.905 36.186 7.178 27.76 51.898 55.43 91.094 61.344 1.703-5.973 5.832-11.475 10.28-14.25 51.01 28.844 86.18 60.704 102 101h229.594c.697-9.613.44-18.712-.625-27.344l-204.314-.03h-5.125l-2.75-4.345c-35.405-55.575-93.93-82.58-141.78-106.03-23.925-11.724-45.17-22.336-59.625-36.844-2.978-2.99-5.618-6.225-7.844-9.687z"></path></g></svg>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Senderismo
            </h3>
            <p className="text-gray-500 text-center leading-4 line-clamp-3 group-hover:line-clamp-none tracking-tight  ">
              ¡Explora senderos con historia y magia natural! Caminatas para todos los niveles, paisajes únicos, amaneceres espectaculares y conexión con la naturaleza. ¡Relájate y disfruta del piedemonte llanero!
            </p>
          </div>
          <div className="group  w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>lion</title> <path d="M24.162 12.116l0-0c-0.414-1.43-1.488-2.364-3.546-3.307 0.733-3.675-1.030-5.775-4.376-7.727l0.268 2.698c-2.369-1.583-5.763-3.216-8.804-3.074-1.014 0.047-2.060 0.206-3.159 0.527l3.723 3.911c-2.034 0.012-5.435 0.296-7.315 1.693l2.012 3.271-2.294 1.191v4.224l2.479 1.4-2.479 2.135v2.882c1.78-0.145 4.183 0.115 6.33-0.603-1.518 1.78-2.002 4.331-3.811 6.558 2.419-0.092 4.831-0.406 7.408-1.805l-0.602 4.776c4.108-1.53 8.165-5.386 7.817-8.677l0.058-0.275c0.239 0.142 0.491 0.269 0.755 0.379l7.263 2.574c0.397-0.859 0.828-1.723 1.284-2.586-0.286 0.111-0.597 0.173-0.922 0.173-1.405 0-2.544-1.139-2.544-2.544s1.139-2.544 2.544-2.544c1.252 0 2.291 0.904 2.504 2.094 0.758-1.281 1.561-2.552 2.391-3.8l-6.986-3.544z"></path> </g></svg>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Safari
            </h3>
            <p className="text-gray-500 text-center leading-4 line-clamp-3 group-hover:line-clamp-none tracking-tight   ">
              ¡Aventura y naturaleza en el corazón de los Llanos! Explora la belleza salvaje, observa fauna autóctona, disfruta cabalgatas guiadas y sumérgete en la cultura llanera. ¡Una experiencia única!
            </p>
          </div>
        </div>
      </section>
      <BannerDiv data={banners[2]} />
      <BirdsInsight />
      <BannerDiv data={banners[3]} />
      <Team />
    </section>
  </>
  );
}
