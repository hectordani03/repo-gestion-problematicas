import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectImage from '@/assets/project.webp'

const tags = ['FIE', 'FECAM', 'FACIMAR', 'FECAM', 'EDUC'];
// const mockProjects = Array(6).fill({
//   title: 'Análisis marítimo',
//   description: 'Proyecto de análisis marítimo que para controlar diversos tipos de agua',
//   image: 'https://i.imgur.com/5fC6N5S.jpeg', // cambia esta URL por una real si es necesario
// });

const ExploreProjectsList = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mb-10">
        <ProjectCard image={projectImage} title='Aplicacion movil para cocina' description='Aplicacion movil de recetario para los estudiantes de la carrera de gastronomia' />
        <ProjectCard image={projectImage} title='Aplicacion movil para cocina' description='Aplicacion movil de recetario para los estudiantes de la carrera de gastronomia' />
        <ProjectCard image={projectImage} title='Aplicacion movil para cocina' description='Aplicacion movil de recetario para los estudiantes de la carrera de gastronomia' />
        <ProjectCard image={projectImage} title='Aplicacion movil para cocina' description='Aplicacion movil de recetario para los estudiantes de la carrera de gastronomia' />
        <ProjectCard image={projectImage} title='Aplicacion movil para cocina' description='Aplicacion movil de recetario para los estudiantes de la carrera de gastronomia' />
        <ProjectCard image={projectImage} title='Aplicacion movil para cocina' description='Aplicacion movil de recetario para los estudiantes de la carrera de gastronomia' />
      </div>
    </div>
  );
};

export default ExploreProjectsList;
