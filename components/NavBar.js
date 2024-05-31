'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NavBar = () => {
    const [show, setShow] = useState(false)
    const pathname = usePathname()

    const links = [
        { name: 'Inicio', url: '/' },
        { name: 'Birding', url: '/birding/' },
        { name: 'Senderismo', url: '/senderismo/' },
        { name: 'Safari', url: '/safari/' },
        { name: 'Alojamiento', url: '/alojamiento/' },
        { name: 'Nosotros', url: '/nosotros/' },
        { name: 'Contacto', url: '/contacto/' }
    ]

    const socialMedia = [
        { name: 'Facebook', url: 'https://www.facebook.com/montunobirding', svg: '/svg/facebook-svgrepo-com.svg' },
        { name: 'Instagram', url: 'https://www.instagram.com/montunobirding/', svg: '/svg/instagram-svgrepo-com.svg' },
        { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=%2B573228725091&text&type=phone_number&app_absent=0', svg: '/svg/whatsapp-svgrepo-com.svg' }
    ]

    return (
        <div className='bg-white'>
            <nav className='max-w-screen-2xl flex justify-between items-center mx-auto '>
                <Image src='/svg/logo-no-background.svg' width={250} height={100} />
                <ul className={(show ? ' fixed top-0 left-0 right-0 bottom-0 bg-primary z-50 flex flex-col' : 'hidden ') + ' lg:flex mx-auto lg:gap-3 xl:gap-5  lg:text-lg xl:text-2xl'}>
                    {links.map(link => <li key={link.name}>
                        <Link className={pathname === link.url ? "lg:text-primary text-white border-b-2 lg:border-b-primary border-b-white " : ""} href={link.url}>{link.name}</Link>
                    </li>)}
                </ul>
                <ul className={(show ? ' fixed top-0 left-0 right-0 bottom-0 p-6 bg-primary z-50 flex flex-col text-lg' : 'hidden ')}>
                    {links.map(link => <li key={link.name}>
                        <Link onClick={() => setShow(!show)} className={pathname === link.url ? "text-white border-b-2  border-b-white " : " text-gray-200"} href={link.url}>{link.name}</Link>
                    </li>)}
                </ul>
                <ul className='hidden lg:flex h-fit w-fit'>
                    {socialMedia.map(social =>
                        <li key={social.name}>
                            <Link href={social.url}><Image src={social.svg} width={50} height={0} /></Link>
                        </li>)}
                </ul>
                <button className={show ? 'fixed z-50 right-0 top-0 p-6' : '' + ' lg:hidden'} onClick={() => setShow(!show)}  ><Image src={show ? '/svg/close-square-svgrepo-com.svg' : '/svg/nav-icon-svgrepo-com.svg'} width={50} height={0} /></button>
            </nav>
        </div>
    )
}

export default NavBar