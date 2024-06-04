import { contactUs } from '@/app/data'
import React from 'react'

const   Package = ({ data }) => {
    return (

        <div className="w-96 p-4 bg-white shadow-lg rounded-2xl  flex flex-col justify-around items-stretch text-pretty">
            <p className="mb-4 text-xl font-medium text-gray-800 text-center text-balance ">
                {data.title}
            </p>
            <p className="text-xl font-black text-gray-900 ">
                {data.price}
                <span className="text-xl text-gray-600">
                    / {data.duration}
                </span>
            </p>
            <p className="mt-4 text-xs text-gray-600 ">
                {data.description}
            </p>
            <ul className="w-full mt-6 mb-6 text-sm text-gray-600 ">
                {data.performance.map(item => <li key={item} className="mb-3 flex items-center ">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg"   fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    {item}
                </li>)}

            </ul>
            <a href={`https://api.whatsapp.com/send?phone=${contactUs[0].value.split(' ').join('').slice(1)}&text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20el%20paquete%20de%20${data.title}`} target='_blank' className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Elegir plan
            </a>
        </div>

    )
}

export default Package