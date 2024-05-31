export default function Page() {
  return (
    <div>
      <h1>Senderismo con MONTUNO</h1>
      <h3>¡Explora la Magia Natural del Piedemonte Llanero!</h3>
      <h1>Senderismo para Todos</h1>

      <p>Nuestros senderos están diseñados para que todos puedan disfrutar de la belleza natural de los llanos. No importa tu edad o condición física, tenemos una ruta perfecta para ti.</p>

      <section className="grid lg:grid-cols-2 ">
        <div className="space-y-4 place-self-center">
          <h2 className="text-green-900 font-bold text-2xl text-center">¿Qué te Espera en Nuestros Senderos?</h2>
          <details name='senderos' className=" open:text-green-950 text-green-800 p-2" open>
            <summary className="font-bold">Paisajes Únicos:</summary>
            <p className="font-medium ml-8 text-green-700">Descubre la diversidad del piedemonte llanero, con sus colinas, bosques y ríos.</p>
          </details>
          <details name='senderos' className=" open:text-green-950 text-green-800 p-2">
            <summary className="font-bold">Amaneceres Espectaculares:</summary>
            <p className="font-medium ml-8 text-green-700">Disfruta de los colores del amanecer desde miradores privilegiados.</p>
          </details>
          <details name='senderos' className=" open:text-green-950 text-green-800 p-2">
            <summary className="font-bold">Conexión con la Naturaleza:</summary>
            <p className="font-medium ml-8 text-green-700">Respira aire puro, escucha el canto de las aves y relájate en un entorno tranquilo.</p>
          </details>
          <details name='senderos' className=" open:text-green-950 text-green-800 p-2">
            <summary className="font-bold">Bienestar Físico y Mental:</summary>
            <p className="font-medium ml-8 text-green-700">El senderismo es una excelente forma de ejercitarte y reducir el estrés.</p>
          </details>
        </div>
        <img src="/Images/senderismo/5.webp" alt="Senderismo" className="object-cover w-full" />
      </section>

      Senderos con Historia
      Nuestros senderos te llevarán a través de territorios llenos de historia y leyendas. Conoce más sobre la cultura llanera y su rica tradición.

      ¡Vive la Aventura!

      Ponte tus botas de montaña, prepara tu mochila y únete a nosotros en una caminata inolvidable. ¡Explora, descubre y conecta con la naturaleza en su estado más puro!

      Reserva tu Experiencia de Senderismo Hoy Mismo
      x
      [Botón de llamada a la acción:"Reservar"]

      ¡Te Esperamos en los Senderos de MONTUNO!
    </div>
  );
}  