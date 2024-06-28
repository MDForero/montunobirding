import { NextResponse } from "next/server";

export async function GET () {
    return NextResponse.json({ team:[
        { name: "Rene Leal", role: "Co-fundador de Montuno", description:'Mi nombre es René, Soy Ingeniero experto en aves, guía registrado en BIRDS COLOMBIA para Casanare, certificado en Guianza de recorridos por la naturaleza, Turismo en Espacios Rurales y co- fundador de MONTUNO.',  img:'/Images/seccion/contacto.webp'},
        { name: "Erika Barajas", role: "Co-fundadora de Montuno" , description:' Economista apasionada por la naturaleza y guía experta en turismo sostenible. ¡Descubre los Llanos con su conocimiento local y compromiso con el medio ambiente!', img:'/Images/seccion/contacto.webp'}
    ] });
}