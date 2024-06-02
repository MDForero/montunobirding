'use client'
import React from 'react'
import { links, socialMedia } from './NavBar'
import Link from 'next/link'
import Image from 'next/image'
import { contactUs } from '@/app/data'

const Footer = () => {
    return (
        <footer className='lg:grid grid-cols-4 gap-5 flex flex-wrap justify-between bg-green-800 p-8 '>
            <div className='max-w-96 text-green-200 mx-auto text-justify tracking-tight'>
                <img src='/svg/logo-white.svg' className='w-44 mx-auto' />
                <p>En <strong>Montuno</strong>, te invitamos a explorar la belleza natural de los Llanos Orientales a través de experiencias únicas de ecoturismo. Conecta con la naturaleza, descubre la diversidad de aves y crea recuerdos inolvidables. <strong>¡Vive la aventura con nosotros!</strong></p>
                <ul className='flex justify-evenly h-fit w-4/5 mx-auto '>
                    {socialMedia.map(social =>
                        <li key={social.name}>
                            <Link href={social.url}><Image src={social.svg} width={50} height={0} /></Link>
                        </li>)}
                </ul>
            </div>
            <div className='min-w-96 text-green-200 mx-auto '>
                <h3 className=' text-green-50 text-xl font-bold '>Políticas </h3>
                <ul>
                    {links.map(link => <li key={link.name}>
                        <Link href={link.url}>{link.name}</Link></li>)}
                </ul>
            </div>
            <div className='min-w-96 text-green-200 mx-auto '>
                <h3 className=' text-green-50 text-xl font-bold '>Secciones </h3>
                <ul>
                    <li><Link href='/politicas/privacidad'>Política de privacidad</Link></li>
                    <li><Link href='/politicas/cookies'>Política de cookies</Link></li>
                    <li><Link href='/politicas/terminos'>Términos y condiciones</Link></li>
                    <li><Link href='/politicas/reservaciones-cancelaciones'>Reservaciones y cancelaciones</Link></li>
                </ul>
            </div>
            <div className='max-w-96 text-green-200 mx-auto '>
                <h3 className=' text-green-50 text-xl font-bold '>Contacto</h3>
            <dl>
                <dt>Correo electrónico:</dt>
                <dd className='indent-4'><Link href={contactUs[1].link}>{contactUs[1].value}</Link></dd>
                <dt>Teléfono:</dt>
                <dd className='indent-4'><Link href={contactUs[0].link}>{contactUs[0].value}</Link></dd>
                <dt>Ubicación:</dt>
                <dd className='indent-4 '><Link href={contactUs[2].link}>Conjunto Residencial Portal de La Roca, Monterrey, Casanare</Link></dd>
            </dl>
            </div>

        </footer>
    )
}

export default Footer