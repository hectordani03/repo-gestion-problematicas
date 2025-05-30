import React from 'react';
import helpIllustration from '@/assets/help.png';

const HelpSection = () => {
  return (
    <section className="bg-lime-600 py-20 px-6 sm:px-8 lg:px-12 text-white">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Contenido */}
        <div className="w-7/12 ml-10">
          <h2 className="text-4xl font-extrabold mb-6">¿Necesitas ayuda?</h2>
          <p className="text-xl sm:text-2xl mb-8 font-semibold">
            Estamos aquí para apoyarte durante todo el proceso.
          </p>

          <ul className="space-y-6">
            <li>
              <h3 className="text-xl sm:text-2xl font-semibold text-lime-800">
                ¿Tienes dudas al llenar el formulario?
              </h3>
              <p className="text-lg sm:text-xl text-white font-semibold">
                Consulta nuestra guía paso a paso con ejemplos claros y recomendaciones útiles.
              </p>
            </li>
            <li>
              <h3 className="text-xl sm:text-2xl font-semibold text-lime-800">
                ¿No sabes qué tipo de proyecto elegir?
              </h3>
              <p className="text-lg sm:text-xl text-white font-semibold">
                Lee nuestra descripción de modalidades académicas y elige la que más se ajuste a tu caso.
              </p>
            </li>
            <li>
              <h3 className="text-xl sm:text-2xl font-semibold text-lime-800">
                ¿Tienes problemas técnicos?
              </h3>
              <p className="text-lg sm:text-xl text-white font-semibold">
                Escríbenos directamente y con gusto te ayudamos.
              </p>
            </li>
          </ul>

          <button className="mt-10 px-8 py-4 bg-lime-700 text-white hover:bg-lime-800 font-semibold rounded-xl shadow-lg transition-colors duration-300">
            Ver guía de ayuda
          </button>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center">
          <img
            src={helpIllustration}
            alt="Ilustración de ayuda o soporte"
            className="w-auto h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
