'use client'
import { useState } from "react"

const MansoryGallery = ({ array }) => {
    const [show, setShow] = useState(false)

    return (<div className={(show ? '' : ' h-[125dvh] overflow-hidden ') + " columns-2 lg:columns-3 space-y-4"}>
        {array.map((img) => <img key={img} loading="lazy" className={" max-w-full w-full rounded-lg object-cover"} src={'/Images/' + img} alt={img} />)}
        <div className="absolute bottom-0 left-0 right-0 z-50 ">
            <button onClick={() => setShow(!show)} className="mx-auto w-fit  bg-primary flex justify-center items-center rounded-lg px-2">
                <div className='w-10 h-10 flex justify-center items-center mx-auto'>
                    <div className={`absolute ${!show ? 'rotate-[135deg] top-1' : 'top-4 -rotate-45'} border-t-2 border-r-2  w-4 h-4  border-white`}></div>
                    <div className={`absolute ${!show ? 'rotate-[135deg] top-2' : 'top-5 -rotate-45'} border-t-2 border-r-2  w-4 h-4  border-white`}></div>
                    <div className={`absolute ${!show ? 'rotate-[135deg] top-3' : 'top-3 -rotate-45'} border-t-2 border-r-2  w-4 h-4  border-white`}></div>
                </div>
                <p className="font-semibold text-white">{show ? "ver menos" : "ver mas"}</p>
            </button>
        </div>
    </div>
    )
}

export default MansoryGallery