import React from 'react';
import fabout from '../images/fondoabout.jpg'; 
import Footer from '../components/Footer'; 

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen p-0" style={{ backgroundImage: `url(${fabout})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      {/* Contenido principal */}
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-300 rounded-lg shadow-2xl">
          {/* Banner */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-gray-900">Términos y Condiciones</h1>
          </div>
          
          {/* Información */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              1. <strong>Aceptación de los Términos</strong>
              <br/>
              Al utilizar TrocaGames, aceptas estos Términos y Condiciones en su totalidad. Si no estás de acuerdo con alguno de estos términos, te pedimos abstenerte de utilizar nuestra plataforma.
            </p>
            <p className="mb-4">
              2. <strong>Propósito de TrocaGames</strong>
              <br/>
              TrocaGames es una plataforma en línea que facilita el contacto entre usuarios interesados en comprar, vender o intercambiar juegos de mesa. TrocaGames no es una parte de ninguna transacción, ni garantiza la calidad, seguridad o legalidad de los artículos listados.
            </p>
            <p className="mb-4">
              3. <strong>Registro del Usuario</strong>
              <br/>
              Para utilizar TrocaGames, debes registrarte y proporcionar información precisa y actualizada. Tú eres responsable de mantener la confidencialidad de tu contraseña.
            </p>
            <p className="mb-4">
              4. <strong>Listado de Juegos</strong>
              <br/>
              Al listar un juego en TrocaGames, garantizas que eres el propietario legítimo y que tienes el derecho de venderlo o intercambiarlo. La descripción del juego debe ser precisa y honesta, incluyendo cualquier defecto o daño.
            </p>
            <p className="mb-4">
              5. <strong>Transacciones</strong>
              <br/>
              <ol className="list-decimal ml-6">
                <li>Contacto directo: Todas las comunicaciones, negociaciones y transacciones se realizan directamente entre los usuarios. TrocaGames solo facilita el contacto inicial.</li>
                <li>Pago y envío: TrocaGames no se involucra en los métodos de pago ni en el envío de los juegos. Los usuarios son responsables de acordar los detalles de la transacción.</li>
                <li>Riesgos: Los riesgos asociados con las transacciones, incluyendo fraudes y estafas, son responsabilidad exclusiva de los usuarios.</li>
              </ol>
            </p>
            <p className="mb-4">
              6. <strong>Responsabilidad Limitada</strong>
              <br/>
              TrocaGames no se hace responsable por:
              <ul className="list-disc ml-6">
                <li>La calidad, seguridad o legalidad de los juegos listados.</li>
                <li>Las pérdidas o daños causados por cualquier transacción realizada a través de la plataforma.</li>
                <li>La conducta de los usuarios.</li>
              </ul>
            </p>
            <p className="mb-4">
              7. <strong>Propiedad Intelectual</strong>
              <br/>
              Todos los derechos de propiedad intelectual de TrocaGames pertenecen a sus propietarios. No puedes utilizar ninguna marca registrada o material protegido por derechos de autor sin autorización previa.
            </p>
            <p className="mb-4">
              8. <strong>Modificación de los Términos</strong>
              <br/>
              TrocaGames se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Te notificaremos sobre cualquier cambio significativo.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col items-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Tienes una pregunta?</h2>
            <p className="text-gray-700 mb-4">
              Contáctanos a través de nuestro correo electrónico: <a href="mailto:trocagames@gmail.com" className="text-blue-600 hover:underline">trocagames@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
