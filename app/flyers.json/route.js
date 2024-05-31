import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            "titulo": "¡Descubre la Magia de las Aves en su Hábitat Natural!",
            "imagen": "Un ave colorida en pleno vuelo o un grupo de aves en su entorno natural.",
            "texto": [
                "Colombia: ¡El paraíso de las aves con más de 1.900 especies!",
                "26% de ellas te esperan en nuestra región.",
                "Recorridos guiados por expertos para observar aves en su esplendor.",
                "Alojamiento cómodo y acogedor para descansar después de un día lleno de avistamientos.",
                "Equipos de observación de primera calidad para no perderte ningún detalle.",
                "¡Conecta con la naturaleza y crea recuerdos inolvidables!"
            ],
            "cta": "¡Reserva tu aventura hoy mismo!"
        },
        {
            "titulo": "¡Vuela como un Ave y Siente la Libertad!",
            "imagen": "/Images/paramotor/paramotor.jpg",
            "texto": [
                "¡Vive la adrenalina del parapente a motor!",
                "Descubre la belleza de los llanos desde una perspectiva única.",
                "Instructores certificados y equipo de seguridad garantizado.",
                "Ideal para aventureros y amantes de la naturaleza.",
                "¡Una experiencia que te dejará sin aliento!"
            ],
            "cta": "¡Atrévete a volar!"
        },
        {
            "titulo": "¡Conviértete en un Experto en Aves!",
            "imagen": "Un grupo de personas observando aves con binoculares.",
            "texto": [
                "Talleres y charlas para todas las edades y niveles de conocimiento.",
                "Aprende sobre las especies de aves de nuestra región.",
                "Conoce los conceptos básicos de la observación de aves.",
                "Descubre la importancia de la conservación de las aves.",
                "¡Comparte tu pasión por las aves con otros entusiastas!"
            ],
            "cta": "¡Inscríbete ahora!"
        },
        {
            "titulo": "¡Aventura y Naturaleza en el Corazón de los Llanos!",
            "imagen": "Jinetes cabalgando por una llanura con fauna silvestre a la vista.",
            "texto": [
                "Explora la belleza salvaje de los llanos en un emocionante safari.",
                "Observa la fauna autóctona en su hábitat natural.",
                "Disfruta de cabalgatas guiadas por expertos conocedores de la zona.",
                "Deléitate con la gastronomía típica llanera.",
                "¡Sumérgete en la cultura y tradiciones llaneras!"
            ],
            "cta": "¡Vive la experiencia llanera!"
        },
        {
            "titulo": "¡Recorre Senderos con Historia y Magia Natural!",
            "imagen": "Personas caminando por un sendero rodeado de naturaleza exuberante.",
            "texto": [
                "Senderismo para todas las edades y niveles de condición física.",
                "Explora paisajes únicos en el piedemonte llanero.",
                "Disfruta de amaneceres y vistas espectaculares.",
                "Conecta con la naturaleza y relájate del estrés diario.",
                "¡Una experiencia rejuvenecedora para cuerpo y mente!"
            ],
            "cta": "¡Ponte tus botas y comienza la aventura!"
        },
        {
            "titulo": "¡Sumérgete en la Belleza de Nuestras Aguas Cristalinas!",
            "imagen": "Una cascada o río cristalino en medio de la naturaleza.",
            "texto": [
                "Recorridos personalizados a ríos, cascadas y quebradas.",
                "Descubre la riqueza hídrica de nuestra región.",
                "Admira paisajes asombrosos y exuberante vegetación.",
                "Guías expertos que te llevarán a los lugares más hermosos.",
                "¡Una experiencia refrescante y llena de encanto!"
            ],
            "cta": "¡Explora nuestros tesoros acuáticos!"
        },
        {
            "titulo": "¡Saborea la Tradición Llanera en Cada Bocado!",
            "imagen": "Platos típicos de la gastronomía llanera.",
            "texto": [
                "Descubre los sabores auténticos de nuestra cocina llanera.",
                "Platos tradicionales elaborados con ingredientes frescos y locales.",
                "Conoce los procesos de transformación de los alimentos en la zona.",
                "Comparte momentos especiales con amigos y familiares.",
                "¡Un festín para tus sentidos!"
            ],
            "cta": "¡Ven a probar lo mejor de nuestra gastronomía!"
        }
    ])
}