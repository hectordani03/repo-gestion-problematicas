import React from 'react';
import ExploreProjectsList from '../components/ExploreProjectsList';

const ExploreProjects = () => {
  return (
    <section className="flex flex-col items-center w-full min-h-screen px-10 pt-10">
      <h1 className="text-5xl font-bold mb-8">
        Explorar <span className="text-lime-600">proyectos</span>
      </h1>

      <ExploreProjectsList />
    </section>
  );
};

export default ExploreProjects;
