import React from 'react';


const HelpSection = () => {
  return (
      <section className="w-full bg-lime-600 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto"> 
        <h2 className="text-5xl sm:text-4xl text-white text-center mb-12">¿Necesitas ayuda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-center">
          <div className="text-white text-left"> 
            <p className="text-xl sm:text-2xl mb-3">Estamos aquí para apoyarte durante todo el proceso.</p>
            <ul className="list-disc list-outside ml-6 sm:ml-8 space-y-4  text-lime-900">
              <li>
                <p className="font-semibold text-xl sm:text-2xl mb-1 text-lime-900">¿Tienes dudas al llenar el formulario?</p>
                <p className="text-lg sm:text-xl text-white">Consulta nuestra guía paso a paso con ejemplos claros y recomendaciones útiles.</p>
              </li>
              <li>
                <p className="font-semibold text-xl sm:text-2xl mb-1 text-lime-900">¿No sabes qué tipo de proyecto elegir?</p>
                <p className="text-lg sm:text-xl text-white">
                  Lee nuestra descripción de modalidades académicas y elige la que más se ajuste a tu caso.
                </p>
              </li>
              <li>
                <p className="font-semibold text-xl sm:text-2xl mb-1 text-lime-900">¿Tienes problemas técnicos?</p>
                <p className="text-lg sm:text-xl text-white">
                  Escríbenos directamente y con gusto te ayudamos.
                </p>
              </li>
            </ul>

            <button className="mt-10 px-8 py-4 bg-lime-700 hover:bg-lime-800 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300">
              Ver guía de ayuda
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;