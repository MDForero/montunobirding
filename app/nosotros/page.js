import Team from "@/components/Team";

export default async function Page() {
  const aboutUs = [
    {
      title: "Mision",
      content: "Our mission is to provide the best possible experience for our customers and to make them feel at home.",
      imgs: [
        {
          src: "/Images/Alcaravan_Venezolano.webp",
          alt: "Tree",
        },
        {
          src: "/Images/Aruco.webp",
          alt: "Tree",
        },
        {
          src: "/Images/Arrendajo_Culiamarillo.webp",
          alt: "Tree",
        },
      ]
    },
    {
      title: "Mision",
      content: "Our mission is to provide the best possible experience for our customers and to make them feel at home.",
      imgs: [
        {
          src: "/Images/Atrapamoscas_Cuidapuentes.webp",
          alt: "Tree",
        },
        {
          src: "/Images/Atrapamoscas_Garrochero.webp",
          alt: "Tree",
        },
        {
          src: "/Images/Barranquero_Coronado.webp",
          alt: "Tree",
        },
      ]
    },
  ]
  return (
    <>
      <section className="max-w-7xl mx-auto">
        {aboutUs.map(item => <div key={item.title} className="bg-white overflow-hidden relative lg:flex lg:items-center ">
          <div className="sm:w-full w-96 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">
                {item.title}
              </span>
            </h2>
            <p className="text-md mt-4 text-gray-400">
              {item.content}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 p-8 lg:p-24 w-11/12">
            <img src={item.imgs[0].src} className="rounded-lg w-full h-full object-cover" alt={item.imgs[0].alt} />
            <div>
              <img src={item.imgs[1].src} className="mb-8 rounded-lg  w-full" alt={item.imgs[1].alt} />
              <img src={item.imgs[2].src} className="rounded-lg w-full" alt={item.imgs[2].alt} />
            </div>
          </div>
        </div>)}
      </section>
      <Team />
    </>
  );
}  