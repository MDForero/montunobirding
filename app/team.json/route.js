import { NextResponse } from "next/server";

export async function GET () {
    return NextResponse.json({ team:[
        { name: "Rene Leal", role: "Ing. Electrónico | Guía Turístico", description:'Ingeniero y observador de aves apasionado. Su profundo conocimiento de la avifauna local te llevará a vivir experiencias únicas de avistamiento. ¡Prepárate para sorprenderte!',  img:'/Images/seccion/contacto.webp'},
        { name: "Erika Barajas", role: "Economista | Guía turístico" , description:' Economista apasionada por la naturaleza y guía experta en turismo sostenible. ¡Descubre los Llanos con su conocimiento local y compromiso con el medio ambiente!', img:'/Images/seccion/contacto.webp'}
    ] });
}