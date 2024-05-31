import BirdsInsight from "@/components/BirdsInsight";
import Count from "@/components/Count";
import Team from "@/components/Team";
import Image from "next/image";
import AdviceBanner from "@/components/AdviceBanner";


export default async function Home() {
  const data = await fetch('http://localhost:3000/flyers.json', {cache:'no-cache'}).then(res => res.json()).catch(err => console.log(err)) 
  console.log(data)
  
  return (<>
  <AdviceBanner data={data[1]}/>
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
    
    <div className="bg-white max-w-7xl mx-auto">
      <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 className="text-2xl font-semibold font-display text-black line-clamp-2 max-w-2xl sm:text-3xl">
          ¡Embárcate en una aventura sin igual con Montuno Birding!
        </h2>
        <p className="mt-2 max-w-xl text-base text-gray-400">
          Prepárate para descubrir un mundo de aves exóticas y paisajes impresionantes en Casanare
        </p>

        <div className="mt-6 sm:flex jusitfy-start">

          <a href="#" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-white hover:text-primary hover:ring ring-primary ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" >
            Contactanos
          </a>

        </div>

        <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
          <picture>
            <img className="object-cover w-1/2 mx-auto maw-w-44" src="/Images/Cabeza_De_Hueso_2.webp" alt="Cabeza de hueso" />
          </picture>
        </div>
      </div>
    </div>
    <section>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl">Vive la magia de Montuno</h1>
        <h1 className="text-xl">Contamos con multiples servicios para hacer tu viaje una experiencia inolvidable </h1>
      </div>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
              <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bird-claw</title> <path d="M26.256 12.016c-0.234-0.35-0.569-0.663-1.019-0.912-0.91-0.503-1.792-0.468-2.518-0.117l0-0.003c-1.967 0.954-3.883 1.407-5.813 1.749-0.499-0.189-0.659-0.563-0.316-1.212 1.18-1.134 2.564-2.049 3.963-2.522 1.138-0.149 2.040-1.066 2.386-2.144 1.462-0.323 3.206-0.193 4.289 0.984-0.705-4.241-3.153-4.71-5.359-4.179-0.074-0.049-0.15-0.096-0.232-0.141-1.912-1.057-3.698 0.26-4.173 1.897-0.368 0.961-0.811 1.868-1.324 2.719-2.184 1.952-4.255 1.186-5.852-0.973-1.233-1.77-2.318-4.081-2.937-6.257h-6.281v4.337c3.526 1.653 8.709 7.788 7.595 9.588-1.244 0.606-2.6 1.117-4.137 1.62-0.172 0.037-0.338 0.091-0.497 0.161-0.012 0.004-0.023 0.007-0.035 0.011l0.003 0.003c-1.339 0.605-2.171 2.282-1.722 3.694-1.209 2.376-1.1 5.505 3.645 6.325-1.373-1.301-1.678-3.007-1.198-4.391 1.454 0.18 2.653-0.9 3.046-2.197 0.518-1.319 1.327-2.504 2.609-2.907 1.385-0.435 5.582 1.236 7.67 4.729 0.194 0.604 0.622 1.159 1.347 1.559 0.711 0.393 1.397 0.465 2.003 0.319 1.172 1.27 2.158 3.197 1.692 5.011 3.374-3.034 2.293-5.762 0.557-7.656 0.142-1.041-0.247-2.134-1.427-2.787-0.584-0.323-1.155-0.423-1.682-0.362-0.976 0.007-2.104-0.174-3.122-0.538-1.388-0.987-1.297-1.93-0.154-2.543 1.709-0.164 3.4 0.379 4.736 1.070 0.124 0.094 0.26 0.183 0.409 0.266 1.62 0.896 3.107 0.128 3.826-1.102 1.354 0.327 2.583 1.561 3.377 3.051 1.392-4.274-0.881-5.916-3.359-6.15z"></path> </g></svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Birding
          </h3>
          <p className="py-4 text-gray-500 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
              <svg fill='#ffffff' viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>hotel</title><path d="M9.5,15A1.5,1.5,0,1,1,8,16.5,1.5,1.5,0,0,1,9.5,15m0-2A3.5,3.5,0,1,0,13,16.5,3.5,3.5,0,0,0,9.5,13Z"></path><path d="M25,14H17a2,2,0,0,0-2,2v6H4V10.6L16,4.14l12.53,6.74.94-1.76-13-7a1,1,0,0,0-.94,0l-13,7A1,1,0,0,0,2,10V30H4V24H28v6h2V19A5,5,0,0,0,25,14Zm-8,8V16h8a3,3,0,0,1,3,3v3Z"></path></g></svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Alojamiento
          </h3>
          <p className="py-4 text-gray-500 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
              <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>lion</title> <path d="M24.162 12.116l0-0c-0.414-1.43-1.488-2.364-3.546-3.307 0.733-3.675-1.030-5.775-4.376-7.727l0.268 2.698c-2.369-1.583-5.763-3.216-8.804-3.074-1.014 0.047-2.060 0.206-3.159 0.527l3.723 3.911c-2.034 0.012-5.435 0.296-7.315 1.693l2.012 3.271-2.294 1.191v4.224l2.479 1.4-2.479 2.135v2.882c1.78-0.145 4.183 0.115 6.33-0.603-1.518 1.78-2.002 4.331-3.811 6.558 2.419-0.092 4.831-0.406 7.408-1.805l-0.602 4.776c4.108-1.53 8.165-5.386 7.817-8.677l0.058-0.275c0.239 0.142 0.491 0.269 0.755 0.379l7.263 2.574c0.397-0.859 0.828-1.723 1.284-2.586-0.286 0.111-0.597 0.173-0.922 0.173-1.405 0-2.544-1.139-2.544-2.544s1.139-2.544 2.544-2.544c1.252 0 2.291 0.904 2.504 2.094 0.758-1.281 1.561-2.552 2.391-3.8l-6.986-3.544z"></path> </g></svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Safari
          </h3>
          <p className="py-4 text-gray-500 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
    <BirdsInsight />


    <Team />
  </section>
          </>
  );
}
