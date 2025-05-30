import React from 'react';

const ContactSection = () => {
  return (
    <section className="px-10 py-16 bg-white dark:bg-gray-900" id="contacto">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Contáctanos</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
          ¿Tienes preguntas, sugerencias o necesitas más información?{' '}
          <a href="#form-contacto" className="text-lime-700 hover:underline font-bold">Escríbenos</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> 
          <form className="space-y-6" id="form-contacto">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                className="w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Campo Correo electrónico */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Campo Asunto */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                placeholder="Asunto a resolver"
                className="w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Campo Mensaje */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                rows="5"
                placeholder="Tu mensaje"
                className="w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 resize-none"
              ></textarea>
            </div>

            {/* Botón Enviar */}
            <div className="flex justify-start mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-lime-700 text-white font-semibold rounded-lg hover:bg-lime-800 transition duration-300 shadow-md"
              >
                Enviar
              </button>
            </div>
          </form>

          {/* Columna Derecha: Información de contacto adicional */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-sm dark:bg-gray-800 mt-15">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informacion de contacto adicional</h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-semibold">Correo:</span>{' '}
                <a href="mailto:reuc@ucol.mx" className="text-lime-700 hover:underline">reuc@ucol.mx</a>
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span>{' '}
                <a href="mailto:reuc@ucol.mx" className="text-lime-700 hover:underline">+52 312 123 4567</a>
              </p>
              <p>
                <span className="font-semibold">Dirección:</span>{' '}
                <span className="text-lime-700">Universidad de Colima, Av. Universidad No. 333, Colima, Col.</span>
              </p>
              <p className="font-semibold mt-6 mb-2">Redes sociales:</p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Facebook:</span>{' '}
                  <a href="https://facebook.com/REUCOficial" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">REUC Oficial</a>
                </li>
                <li>
                  <span className="font-semibold">Instagram:</span>{' '}
                  <a href="https://instagram.com/reuc__ucol" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">@reuc__ucol</a>
                </li>
                <li>
                  <span className="font-semibold">LinkedIn:</span>{' '}
                  <a href="https://linkedin.com/company/REUCUCOL" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">REUC UCOL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;