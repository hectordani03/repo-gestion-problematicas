import React from 'react';


const benefits = [
  {
    title: 'Para empresas y organizaciones',
    descriptions: [
      'Obtén soluciones concretas sin costo',
      'Accede a talento universitario',
      'Contribuye al desarrollo local'
    ]
  },
  {
    title: 'Para estudiantes',
    descriptions: [
      'Aplica tus conocimientos en un entorno real',
      'Desarrolla tu tesis, servicio social o residencia profesional con impacto',
      'Trabaja en equipo resolviendo problemas auténticos.'
    ]
  },
  {
    title: 'Para la universidad',
    descriptions: [
      'Vinculación efectiva con la sociedad',
      'Proyectos con enfoque social y académico',
      'Formación integral para los estudiantes'
    ]
  }
];

const BenefitsSection = () => {
  return (
    <section className="bg-lime-600 dark:bg-gray-900 py-16 px-8 " id="benefits">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-stone-50 mb-10 text-center">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-lime-700 p-4 rounded-xl">
              <h3 className="text-xl font-semibold text-stone-50 dark:text-white mb-3 text-center">{benefit.title}</h3>
              <ul className="list-disc list-outside text-stone-50 dark:text-gray-300 space-y-1 pl-5">
                {benefit.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
