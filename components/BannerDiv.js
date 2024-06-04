import React from 'react'

const BannerDiv = ({ data }) => {
  console.log(data)
  return (<>
    {data && <div className='h-[480px] bg-gray-700 banner relative'>
      <img src={data?.image + '.jpg'} className='w-full h-full object-cover' />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex gap-3 flex-col justify-between lg:flex-row items-center">
        <div className=" lg:w-96 lg:h-56 text-balance content-center bg-green-800 lg:bg-white text-green-100 lg:text-black p-4 lg:px-2 text-center tracking-tighter  rounded-b-full lg:rounded-ee-full lg:rounded-b-none xl:text-4xl lg:text-3xl lg:self-start  text-xl font-black  ">{data?.titulo}</div>
        <a target="_blank" href={`https://api.whatsapp.com/send/?phone=%2B573228725091&text=Estoy%20interesado%20en%20una%20aventura%20aerea%20&type=phone_number&app_absent=0`} className="px-2 h-fit py-2 bg-green-800 text-green-100 self-center lg:self-end rounded-xl text-center content-center animate-bounce xl:text-xl  lg:text-lg sm:text-lg text-xl">{data?.cta}</a>
        <div className="max-w-lg text-3xl text-center w-full h-56 bg-white self-end rounded-ss-full content-center lg:block hidden"><p className='align-text-bottom max-w-sm ml-20'>{data?.descripcion}</p></div>
      </div></div>}
  </>
  )
}

export default BannerDiv