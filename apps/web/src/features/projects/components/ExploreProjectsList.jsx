import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const tags = ['FIE', 'FECAM', 'FACIMAR', 'EDUC'];

const projects = [
  {
    title: 'Aplicación de Recetario Gastronómico',
    description: 'Una app móvil que permite a los estudiantes de gastronomía acceder y compartir recetas de cocina.',
    image: 'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'FECAM',
  },
  {
    title: 'Sistema de Gestión de Inventario Escolar',
    description: 'Plataforma web para controlar y administrar los insumos de laboratorios escolares.',
    image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'FIE',
  },
  {
    title: 'Monitoreo de Condiciones Marinas',
    description: 'Herramienta para visualizar en tiempo real las condiciones del mar para actividades pesqueras.',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80',
    tag: 'FACIMAR',
  },
  {
    title: 'Simulador de Redes Industriales',
    description: 'Software educativo que permite simular redes industriales para prácticas virtuales.',
    image: 'https://images.unsplash.com/photo-1683199320521-38e3370de70d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'FIE',
  },
  {
    title: 'Portal de Servicios Escolares',
    description: 'Plataforma digital que centraliza los servicios y trámites escolares para estudiantes y docentes.',
    image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eSUyMHNvZnR3YXJlfGVufDB8fDB8fHww',
    tag: 'EDUC',
  },
  {
    title: 'Gestor de Actividades Estudiantiles',
    description: 'Aplicación móvil para organizar y promover eventos y talleres estudiantiles.',
    image: 'https://images.unsplash.com/photo-1560452891-a28b0484827c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'FECAM',
  },
];

const ExploreProjectsList = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag ? project.tag === selectedTag : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 px-5 py-3 rounded-full border border-gray-300 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
      />

      <div className="flex gap-4 flex-wrap justify-center mb-10">
        {tags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              selectedTag === tag
                ? 'bg-lime-700 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTag && (
          <button
            onClick={() => setSelectedTag('')}
            className="px-5 py-2 rounded-full text-sm font-semibold bg-red-200 hover:bg-red-300"
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mb-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreProjectsList;
