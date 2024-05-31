import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        alojamientos: [
            {
                id: 1,
                name: 'Hotel 1',
                address: 'Calle 1 # 1-1',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 2,
                name: 'Hotel 2',
                address: 'Calle 2 # 2-2',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 3,
                name: 'Hotel 3',
                address: 'Calle 3 # 3-3',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 4,
                name: 'Hotel 4',
                address: 'Calle 4 # 4-4',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 5,
                name: 'Hotel 5',
                address: 'Calle 5 # 5-5',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 6,
                name: 'Hotel 6',
                address: 'Calle 6 # 6-6',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 7,
                name: 'Hotel 7',
                address: 'Calle 7 # 7-7',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 8,
                name: 'Hotel 8',
                address: 'Calle 8 # 8-8',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 9,
                name: 'Hotel 9',
                address: 'Calle 9 # 9-9',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 10,
                name: 'Hotel 10',
                address: 'Calle 10 # 10-10',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            {
                id: 11,
                name: 'Hotel 11',
                address: 'Calle 11 # 11-11',
                phone: '322 872 5091',
                img:'/Images/alojamientos/casa_campestre_villa_real/2.webp',
                mail: ''
            },
            
        ]
    })
}