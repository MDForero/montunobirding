import Image from "next/image";

export async function generateStaticParams() {
    const data = await fetch('https://www.montunobirding.com/aves.json', { cache: 'default' }).then(res => res.json());
    return data.map(birds => ({ bird: birds.scientific_name.split(' ').join('_') }));
}

export default async function Page({ params }) {
    const { bird } = params;
    const data = await fetch('https://www.montunobirding.com/aves.json', { cache: 'default' }).then(res => res.json());
    const birdData = data.find(birds => birds.scientific_name.split(' ').join('_') === bird);

    return (
        <main>
            <Image src={birdData.imgs[0]} alt={birdData.spanish_name} width={0} height={0} className="w-full h-[600px] object-contain" />
            <h1>{birdData.spanish_name}</h1>
        </main>
    );
}