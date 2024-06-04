import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Bird = ({ bird }) => {
    return (<article key={bird.english_name} className=" max-w-96 h-max content-stretch">
        <h2 className="text-center font-bold text-2xl text-primary mb-3">{bird.spanish_name}</h2>
        <Image key={bird.spanish_name} src={bird.imgs[0]} alt={bird.spanish_name + '|' + bird.english_name + '|' + bird.scientific_name} width={0} height={0} className="flex rounded-full object-cover w-72 h-72 mx-auto border-4 shadow-2xl border-primary" />
        <div className="">
            <ul className="w-72 mx-auto">
                <li><span className="font-bold"> Nombre común: </span><strong className="font-normal">{bird.spanish_name}</strong></li>
                <li><span className="font-bold"> Nombre en inglés: </span><strong className="font-normal">{bird.english_name}</strong></li>
                <li><span className="font-bold"> Nombre científico: </span><strong className="font-normal">{bird.scientific_name}</strong></li>
            </ul>
        </div>
        <Link className="cursor-pointer flex justify-between bg-primary px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] float-right mr-6"
            href={`/birding/${bird.scientific_name.split(' ').join('_')}`}>
            Ver mas
            <div className='-rotate-90'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="w-5 h-5 animate-bounce"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    ></path>
                </svg>
            </div>
        </Link>
    </article>
    )
}

export default Bird