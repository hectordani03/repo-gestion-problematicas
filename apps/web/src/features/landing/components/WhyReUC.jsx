// src/components/WhyReUC.jsx
import React from 'react';

const WhyReUC = () => {
  return (
    <section className="py-16 px-6 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna Izquierda: Ilustración */}
        <div className="flex justify-center md:justify-start"> 
          <img />
        </div>
        {/* Columna Derecha: Texto y lista */}
        <div className="text-left"> 
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100"> ¿Por qué <span className='text-lime-700'>ReUC</span>?</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6"> {/* Ajuste del tamaño del párrafo */}
            Porque creemos que los conocimientos deben ponerse al servicio de la sociedad.
            <br />
            <span className='text-lime-700 font-semibold'> ReUC</span> no solo impulsa el aprendizaje práctico de los estudiantes, sino que también genera soluciones innovadoras, sustentables y accesibles para quienes enfrentan desafíos reales. Con esta plataforma:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lime-700 dark:text-gray-300"> {/* Ajustes para la lista */}
            <li className="text-base sm:text-lg">La comunidad obtiene ayuda profesional sin costo.</li> {/* Ajuste del tamaño del texto de la lista */}
            <li className="text-base sm:text-lg">Los estudiantes adquieren experiencia aplicando lo que aprenden en las aulas.</li>
            <li className="text-base sm:text-lg">La universidad refuerza su compromiso social.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyReUC;