import React from 'react'
import Bird from './Bird'

const BirdsInsight = async () => {
    const data = await fetch('https://www.montunobirding.com/aves.json', { cache: 'default' }).then(res => res.json()).catch(err => console.log(err))
    const birds = data.slice(0, 3)
    return (
        <section>

            <div className="relative z-20 flex items-center bg-white ">
                <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                    <div className="flex flex-col ">
                        <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl">
                        ¡Adéntrate en el mundo del Birding!
                        </h1>
                        <h3 className='w-full text-xl font-light text-center leading-5 text-gray-800 tracking-tighter '>Descubre las aves más raras y exóticas de Colombia.¡Y muchos más ejemplares podrás encontrar en Casanare!</h3>
                        <h2 className="w-full max-w-4xl leading-5 mx-auto text-xl font-light text-center text-gray-500 tracking-tighter">
                        Este departamento colombiano alberga una increíble biodiversidad de aves, lo que lo convierte en un destino ideal para los amantes del birding. Desde los imponentes llanos hasta las majestuosas cordilleras, Casanare ofrece una variedad de hábitats que albergan una gran cantidad de especies únicas.
                        </h2>
                        
                    </div>
                    <div className="relative block w-full mx-auto mt-6 md:mt-0">

                        <div className='flex justify-evenly flex-wrap items-center gap-4'>
                            {birds.map(bird => <Bird bird={bird} key={bird.english_name}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BirdsInsight