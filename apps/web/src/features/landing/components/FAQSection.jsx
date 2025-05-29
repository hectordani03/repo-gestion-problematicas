import React from 'react';
import faqIllustration from '@/assets/faq-illustration.jpg';


const faqs = [
  {
    question: '¿Quién puede solicitar un proyecto?',
    answer: 'Cualquier persona, empresa, dependencia pública o asociación civil con una necesidad concreta.',
  },
  {
    question: '¿Tiene algún costo participar?',
     answer: (
      <>
        No. Solicitar un proyecto a través de{' '}
        <span className="text-lime-700 font-semibold">ReUC</span>{' '} 
        es totalmente gratuito. Solo debes registrar tu propuesta.
      </>
    ),
  },
  {
    question: '¿Qué tipo de proyectos puedo proponer?',
    answer: 'Desde soluciones tecnológicas, procesos logísticos, campañas sociales, hasta estudios de impacto ambiental o propuestas educativas.',
  },
  {
    question: '¿Quién desarrollará el proyecto?',
    answer: 'Estudiantes de la Universidad de Colima, guiados por docentes expertos en la temática del proyecto.',
  },
  {
    question: '¿Cuánto dura el desarrollo de un proyecto?',
    answer: 'Varía entre 3 y 12 meses, dependiendo del tipo de proyecto académico (tesis, servicio social, prácticas, etc.).',
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Preguntas Frecuentes (<span className='text-lime-700'>FAQ</span>)</h2>
          <img src={faqIllustration} alt="Persona mirando a través de un telescopio con engranajes" className="w-full h-auto object-contain max-w-sm mx-auto md:max-w-full" />
        </div>


        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2"><span className='text-lime-700'>{faq.question}</span></h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;