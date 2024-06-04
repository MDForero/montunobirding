import Link from "next/link";

export default async function Page() {
  const alojamientos = await fetch('https://montunobirding.com/alojamientos.json', {cache:'no-cache'}).then(res => res.json()).then(data => data.alojamientos).catch(err => console.log(err)) 
  return (
    <div className="md:p-16">
      <section className="flex justify-evenly flex-wrap gap-4 space-y-4 px-2 ">
        {alojamientos?.map(alojamiento =>
          <div key={alojamiento.name} className="flex max-w-6xl w-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="w-full md:max-w-lg">
              <img loading='lazy' className=" w-full object-cover max-h-80 h-full " src={alojamiento.img[0]} />
            </div>
            <div className="w-full md:w-2/3 p-4 flex flex-col items-end">
              <h1 className="text-2xl font-bold text-gray-900">
                {alojamiento.name}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {alojamiento.address}
              </p>
              <div className="flex mt-2 item-center">
                <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                  </path>
                </svg>
                <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                  </path>
                </svg>
                <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                  </path>
                </svg>
                <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                  </path>
                </svg>
                <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                  </path>
                </svg>
              </div>
              <div className="flex justify-between mt-3 item-center">
                <h1 className="text-xl font-bold text-gray-700">
                  $220
                </h1>
              </div>
                <Link className="cursor-pointer flex justify-between bg-primary px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] "
            href={`/alojamiento/${alojamiento.name.split(' ').join("-")}`}>
            Ver mas
            <div className='-rotate-90'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </div></Link>
            </div>
          </div>)}
      </section>
    </div >
  );
}  