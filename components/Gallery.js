'use client'
import React, { useState } from 'react'

const Gallery = ({ data }) => {
    const [img, setImg] = useState(data.img[0])
    return (
        <div className='space-y-4 border p-2'>
            <picture className=''>
                <img src={img} alt={data.name} loading='lazy' className='rounded-xl ring-green-700 ring-2 w-full object-cover h-[500px]'/>
            </picture>
            <ul className='flex gap-2 xl:justify-between justify-center flex-wrap'>
                {data.img.map((image, index) => <li key={index} className={(img === image ? ' bg-green-700 ' : ' border-4 border-green-700 ') + ' content-center  w-40 p-2 rounded-lg'}>
                    <button onClick={() => setImg(image)} className=' h-28 '>
                        <img src={image} className=' w-44 h-28 object-cover'/></button>
                </li>)}
            </ul>
        </div>
    )
}

export default Gallery