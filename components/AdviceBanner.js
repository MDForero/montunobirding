'use client'
import React, { useState } from 'react'

const AdviceBanner = ({ data }) => {
  const [show, setShow] = useState(true)
  return (
    <section className={show ? 'fixed top-0 left-0 right-0 bottom-0 h-screen flex justify-center items-center  z-50' : 'hidden'}>
      <div className=' relative  lg:w-4/5 w-full m-auto  grid grid-rows-4 h-full lg:h-4/5 border-4 border-green-700'>
        <img src={data?.imagen} className='w-full h-full absolute object-cover top-0 left-0 right-0 bottom-0 -z-10' />
        <div className=' relative row-span-4 flex  items-center flex-col '>
          <button onClick={() => setShow(false)} className=' absolute top-2 right-2 rounded-full bg-white md:bg-green-700 w-10 h-10 text-2xl'>X</button>
          <h1 className=' bg-blob p-4 lg:text-5xl font-semibold  max-w-xl text-center  flex'>{data?.titulo}</h1>
        </div>
        <footer className='grid lg:grid-cols-2 text-sm lg:text-base tracking-tighter leading-tight row-start-5 bg-white p-5'>
          <ul >{
            data?.texto.map((item, index) => <li className='list-parachute -mt-2 lg:mt-0 ml-8' key={index}>{item}</li>)
          }</ul>
          <button className='bg-green-700 place-self-end p-2 rounded-lg hover:ring-2 hover:ring-green-700 hover:bg-white duration-200 ease-linear '>{data?.cta}</button>
        </footer>
      </div>
    </section>
  )
}

export default AdviceBanner