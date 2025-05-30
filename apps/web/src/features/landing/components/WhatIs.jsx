import React from 'react';

const WhatIs = () => {
  return (
    <section className="mx-auto grid grid-cols-1 md:grid-cols-2 px-20 py-12 bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 mt-28">
        <section>
             <h2 className="text-4xl font-bold mb-4">¿Qué es <span className='text-lime-700'>ReUC</span>?</h2>
            <p className="text-xl leading-relaxed mb-4"> 
             El Repositorio de la Universidad de Colima (<span className='text-lime-700'>ReUC</span>) es una plataforma creada por la Universidad de Colima que permite a organizaciones, empresas y personas externas proponer proyectos reales que puedan ser desarrollados por estudiantes universitarios como parte de su formación profesional.</p>
            <p className="text-xl leading-relaxed">
            <span className='text-lime-700'>ReUC</span> funciona como un puente entre la comunidad y la universidad, promoviendo la colaboración para resolver problemáticas sociales, tecnológicas, ambientales, educativas, entre muchas otras.</p>
        </section>
    </section>
  );
};

export default WhatIs;