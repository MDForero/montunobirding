import Bird from "@/components/Bird";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const data = await fetch('https://www.montunobirding.com/aves.json', { cache: 'default' }).then(res => res.json());

  return (
    <div>
      <section className="flex flex-wrap justify-around items-stretch gap-8 ">
        {data.map(bird => <Bird bird={bird}  key={bird.english_name}/>)}
      </section>
    </div>
  );
}  