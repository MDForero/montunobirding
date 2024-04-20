import Count from "@/components/Count";
import Image from "next/image";
import fs from 'fs'

const getFiles = async () => {
  const path = './public/Images/'
  const images = fs.readdirSync(path, (err, files) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(files)
    return files
  })
  return images
}

export default async function Home() {
  
  const files = await getFiles()

  const dateEnd = new Date("2024-05-01T00:00:01");
  return (<>
    <main className="w-screen h-screen flex flex-col justify-center items-center absolute bg-white/80 ">
      <Image
        src="/svg/logo-no-background.svg"
        alt="Logo"
        width={600}
        height={600} />
      <p className=" lg:text-4xl max-w-4xl text-center">¡Embárcate en una aventura sin igual con Montuno Birding!</p>
      <Count dateEnd={dateEnd} />
      <p className=" lg:text-4xl max-w-4xl text-center">Prepárate para descubrir un mundo de aves exóticas y paisajes impresionantes en Casanare </p>
    </main>
    <div className='grid grid-cols-4 gap-2 grid-flow-row-dense'>
      {files.filter(file => file.includes('.webp')).map((file, index) => {
        return <img key={index} loading="lazy" src={`/images/${file}`} alt={file} className='h-full object-cover w-full' />
      })}
    </div>
  </>
  );
}
