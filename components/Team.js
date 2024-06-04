import React from 'react'

const Team = async () => {
    const team = await fetch('https://www.montunobirding.com/team.json', { cache: 'default' }).then(res => res.json()).then(data => data.team)
    return (<div>
        <div className="p-8 bg-white rounded-lg shadow max-w-7xl mx-auto">
            <p className="text-3xl md:text-5xl  font-bold text-center text-primary">
                Nuestro Equipo
            </p>
            <p className="mb-12 md:text-xl font-normal text-center text-gray-500 ">
            En <strong>Montuno</strong>, somos un equipo apasionado por los Llanos Orientales y su biodiversidad.
            </p>
            <div className="flex flex-col items-center md:flex-row justify-evenly ">
                {team.map(teamMate => <div key={teamMate.name} className="p-4 border">
                    <div className="mb-4 text-center opacity-90">
                        <a href="#" className="relative block">
                            <img alt="profil" src={teamMate.img} className="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 font-bold ">
                            {teamMate.name}
                        </p>
                        <p className="text-xl font-light text-gray-500">
                            {teamMate.role}
                        </p>
                        <p className="max-w-xs  font-light text-gray-500 text-md line-clamp-5 ">
                            {teamMate.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                        <a href="#">
                            <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                </path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                </path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                </path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
    )
}

export default Team