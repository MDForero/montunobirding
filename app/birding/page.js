import Bird from "@/components/Bird";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const data = await fetch('http:127.0.0.1:3000/aves.json', { cache: 'default' }).then(res => res.json());

  return (
    <div>
      <section className="flex flex-wrap justify-around items-center space-y-8">
        <article></article>
        {data.map(bird => <Bird bird={bird}  key={bird.english_name}/>)}
      </section>
    </div>
  );
}  