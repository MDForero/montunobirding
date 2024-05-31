export async function generateStaticParams() {
    const alojamientos = await fetch('https://www.montunobirding.com/alojamientos.json', { cache: 'default' }).then(res => res.json()).then(data => data.alojamientos)
    return alojamientos.map(alojamiento => ({ alojamiento: alojamiento.name.split(' ').join('-') }))
}
export default async function page({ params }) {
    const { alojamiento } = params
    const data = await fetch('https://www.montunobirding.com/alojamientos.json', { cache: 'default' }).then(res => res.json()).then(data => data.alojamientos)
    const hotel = data.find(alojamientos => alojamientos.name.split(' ').join('-') === alojamiento)

    return <>
    <main className=" w-screen h-[700px] relative">
        <img loading='lazy' src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
    </main>
    </>
}
