'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Banner = () => {
    const pathname = usePathname()
    if (pathname !== '/' && [ '/birding/', '/alojamiento/', '/contacto/', '/nosotros/', '/senderismo/','/safari/'].includes(pathname)) {

        return (
            <main className='max-w-screen-2xl relative' >
                <Image src={`/Images/seccion/${pathname.slice(1,-1)}.webp`} width={0} height={0} className='w-screen h-[400px] lg:h-[650px] object-cover' alt={`Es la imagen de inicio en la seccion de ${pathname}`} />
                <div className='absolute top-0 right-0 bottom-0 left-0 flex lg:justify-end lg:items-end flex-col justify-center items-center'>
                    <div className=' bg-white/40  lg:p-10'>
                        <Image src={'/svg/logo-no-background.svg'} width={0} height={0} className='lg:w-96 w-60' alt='Logo de Montuno Birding' />
                    </div>
                </div>
            </main>
        )
    }
}

export default Banner