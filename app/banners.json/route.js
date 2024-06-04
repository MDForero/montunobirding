import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    [
      {
        titulo: "¡Eleva tus sentidos, siente la libertad en el aire!",
        descripcion: "Avistamiento de aves, parapente a motor y más. ¡Explora el mundo desde una nueva perspectiva!",
        cta: "¡Descubre nuestras experiencias aéreas!",
        image: '/Images/banners/somos_aire'
      },
      {
        titulo: "¡Conecta con la tierra, vive la aventura llanera!",
        descripcion: "Cabalgatas, senderismo y experiencias únicas. ¡Sumérgete en la cultura y los paisajes de los Llanos!",
        cta: "¡Explora nuestros senderos y cabalgatas!",
        image: '/Images/banners/somos_tierra'
      },
      {
        titulo: "¡Refréscate y renueva tu energía en nuestras aguas cristalinas!",
        descripcion: "Ríos, cascadas y quebradas te esperan. ¡Disfruta de la belleza natural de los Llanos!",
        cta: "¡Descubre nuestros recorridos acuáticos!",
        image: '/Images/banners/somos_agua'
      },
      {
        titulo: "¡Enciende tus sentidos con los sabores de los Llanos!",
        descripcion: "Sabores auténticos y tradición culinaria. ¡Deléitate con la gastronomía llanera!",
        cta: "¡Saborea nuestra gastronomía!",
        image: '/Images/banners/somos_fuego'
      }
    ]
  )
}
