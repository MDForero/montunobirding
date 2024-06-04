'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NavBar = () => {
    const [show, setShow] = useState(false)
    const pathname = usePathname()





    return (
        <nav className='max-w-screen-2xl flex justify-between items-center mx-auto w-full px-3'>
            <Image src='/svg/logo-no-background.svg' width={250} height={100} />
            <ul className={'hidden lg:flex mx-auto lg:gap-3 xl:gap-5  lg:text-lg xl:text-2xl'}>
                {links.map(link => <li key={link.name}>
                    <Link className={pathname === link.url ? "lg:text-primary text-white border-b-2 lg:border-b-primary border-b-white " : ""} href={link.url}>{link.name}</Link>
                </li>)}
            </ul>
            <ul className={(show ? ' fixed top-0 left-0 right-0 bottom-0 p-6  bg-primary z-50 flex flex-col text-lg' : 'hidden ')}>
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
            <button className={show ? ' z-50  ' : '' + ' relative lg:hidden '} onClick={() => setShow(!show)}  >
                {
                    !show ?
                        <svg className='border-4 p-1 border-primary fill-primary'  width="40" height="40" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h27.65v5.219h-27.65z" /><path d="m0 9.39h27.65v5.219h-27.65z" /><path d="m0 18.781h27.65v5.219h-27.65z" /></svg>
                        :
                        <svg className='border-4' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z" fill="#ffffff" />
                                                    </svg>
                }
            </button>
        </nav>
    )
}
export const socialMedia = [
    { name: 'Facebook', url: 'https://www.facebook.com/montunobirding', svg: '/svg/facebook-svgrepo-com.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/montunobirding/', svg: '/svg/instagram-svgrepo-com.svg' },
    { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=%2B573228725091&text&type=phone_number&app_absent=0', svg: '/svg/whatsapp-svgrepo-com.svg' }
]
export const links = [
    { name: 'Inicio', url: '/' },
    { name: 'Birding', url: '/birding/' },
    { name: 'Senderismo', url: '/senderismo/' },
    { name: 'Safari', url: '/safari/' },
    { name: 'Alojamiento', url: '/alojamiento/' },
    { name: 'Nosotros', url: '/nosotros/' },
    { name: 'Contacto', url: '/contacto/' }
]
export default NavBar