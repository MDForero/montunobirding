import React from 'react'

const BannerDiv = ({ data }) => {
  console.log(data)
  return (<>
    {data && <div className='h-[480px] bg-gray-700 banner relative'>
      <img loading='lazy' src={data?.image + '.jpg'} className='w-full h-full object-cover' />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex gap-3 flex-col justify-between lg:flex-row items-center">
        <div className=" lg:w-96 lg:h-56 text-balance content-center bg-green-800 lg:bg-white text-green-100 lg:text-black p-4 lg:px-2 text-center tracking-tighter  rounded-b-full lg:rounded-ee-full lg:rounded-b-none xl:text-4xl lg:text-3xl lg:self-start  text-xl font-black  ">{data?.titulo}</div>
        <a target="_blank" href={`https://api.whatsapp.com/send/?phone=%2B573228725091&text=Estoy%20interesado%20en%20una%20aventura%20aerea%20&type=phone_number&app_absent=0`} className="px-2 h-fit py-2  inline  bg-green-800 text-green-100 self-center lg:self-end rounded-xl text-center content-center animate-bounce xl:text-xl  lg:text-lg sm:text-lg text-xl">
          <svg className='inline mr-3' width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="6"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#ffffff"></path>
            </g>
          </svg> 
          {data?.cta}</a>
        <div className="max-w-lg text-3xl text-center w-full h-56 bg-white self-end rounded-ss-full content-center lg:block hidden"><p className='align-text-bottom max-w-sm ml-20'> {data?.descripcion}</p></div>
      </div></div>}
  </>
  )
}

export default BannerDiv