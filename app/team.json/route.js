import { NextResponse } from "next/server";

export async function GET () {
    return NextResponse.json({ team:[
        { name: "Rene Leal", role: "Ing. Electrónico | Guía Turístico", description:'Un apasionado por las aves y la naturaleza, que puede guiarlos por un viaje inolvidable en el imponente piedemonte llanero',  img:'/Images/seccion/contacto.webp'},
        { name: "Erika Barajas", role: "Economista | Guía turístico" , description:'Apasionada por las aves y su diversidad,', img:'/Images/seccion/contacto.webp'}
    ] });
}