import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        alojamientos: [
            {
                id: 1,
                name: "Alojamiento para 38 personas",
                rooms: 14,
                ability: 38,
                description: "Amplio y cómodo alojamiento ideal para grupos y familias. Disfruta de piscina, habitaciones con baño privado y cocina equipada. ¡Tus mascotas también son bienvenidas!",
                performance: [
                    "Baño privado en cada habitación",
                    "Piscina",
                    "Amplio estacionamiento",
                    "Cocina equipada con menaje",
                    "Ideal para grupos y familias",
                    "Admitimos mascotas"
                ],
                img: [
                    '/Images/alojamientos/casa_campestre_villa_real/2.webp',
                    '/Images/alojamientos/casa_campestre_villa_real/4.webp',
                    '/Images/alojamientos/casa_campestre_villa_real/3.webp',
                    '/Images/alojamientos/casa_campestre_villa_real/1.webp',
                ],
                mail: ''
            },
            {
                id: 2,
                name: "AnaGris Cottage",
                rooms: 2,
                ability: 6,
                description: "Acogedor alojamiento perfecto para parejas y familias pequeñas. Relájate en el jacuzzi, disfruta del área de juegos para niños y cocina tus comidas favoritas.",
                performance: [
                    "Jacuzzi",
                    "Área de juegos para niños",
                    "Estacionamiento privado",
                    "Cocina equipada con menaje",
                    "Perfecto para parejas y familias pequeñas",
                    "Admitimos mascotas"
                ],
                img: [
                    '/Images/alojamientos/anagris/IMG-20240411-WA0041.webp',
                    '/Images/alojamientos/anagris/IMG-20240411-WA0026.webp',
                    '/Images/alojamientos/anagris/IMG-20240411-WA0035.webp',
                    '/Images/alojamientos/anagris/IMG-20240411-WA0032.webp'
                ],
                mail: ''
            },

        ]
    })
}
