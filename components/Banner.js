'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Banner = () => {
    const pathname = usePathname()
    switch (pathname) {
        case '/birding/':
            return (
                <main className='max-w-screen-2xl relative' >
                    <Image src={`/Images/seccion/${pathname.slice(1, -1)}.webp`} width={0} height={0} className='w-screen object-contain' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                    <div className='absolute top-0 right-0 bottom-32 left-0 flex   flex-col justify-center items-end'>
                        <h1 className='text-primary text-4xl md:text-6xl lg:text-8xl font-bold text-center'>Somos Aire</h1>
                    </div>
                </main>
            )
        case '/alojamiento/':
            return (
                <main className='max-w-screen-2xl relative' >
                    <Image src={`/Images/seccion/${pathname.slice(1, -1)}.webp`} width={0} height={0} className='w-screen object-contain' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                    <div className='absolute top-0 right-0 bottom-0 left-0 flex   flex-col justify-center items-center'>
                        <h1 className='text-primary text-4xl md:text-6xl lg:text-8xl font-bold text-center'>Alojamientos</h1>
                    </div>
                </main>
            )
        case '/contacto/':
            return (
                <main className='max-w-screen-2xl relative' >
                    <Image src={`/Images/seccion/${pathname.slice(1, -1)}.webp`} width={0} height={0} className='w-screen object-contain' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                    <div className='absolute top-0 right-0 bottom-32 left-0 flex   flex-col justify-center items-end'>
                        <h1 className='text-primary text-4xl md:text-6xl lg:text-8xl font-bold text-center'>Contacto</h1>
                    </div>
                </main>
            )
        case '/nosotros/':
            return (
                <main className='max-w-screen-2xl relative' >
                    <Image src={`/Images/seccion/${pathname.slice(1, -1)}.webp`} width={0} height={0} className='w-screen object-contain' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                    <div className='absolute top-0 right-0 bottom-32 left-0 flex   flex-col justify-center items-end'>
                        <h1 className='text-primary text-4xl md:text-6xl lg:text-8xl font-bold text-center'>Nosotros</h1>
                    </div>
                </main>
            )
        case '/senderismo/':
            return (
                <main className='max-w-screen-2xl relative' >
                    <Image src={`/Images/seccion/${pathname.slice(1, -1)}.webp`} width={0} height={0} className='w-screen object-contain' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                    <div className='absolute top-0 right-0 bottom-32 left-0 flex   flex-col justify-center items-end'>
                        <h1 className='text-primary text-4xl md:text-6xl lg:text-8xl font-bold text-center'>Somos Agua</h1>
                    </div>
                </main>
            )
        case '/safari/':
            return (
                <main className='max-w-screen-2xl relative' >
                    <Image src={`/Images/seccion/${pathname.slice(1, -1)}.webp`} width={0} height={0} className='w-screen object-contain' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                    <div className='absolute top-0 right-0 bottom-32 left-0 flex   flex-col justify-center items-end'>
                        <h1 className='text-primary text-4xl md:text-6xl lg:text-8xl font-bold text-center'>Somos Tierra</h1>
                    </div>
                </main>
            )

        default:
    }
}


export default Banner