import React from 'react';
import FavoriteProjectsList from '../components/FavoriteProjectsList';

const FavoriteProjects = () => {
  return (
    <section className="flex flex-col items-center w-full min-h-screen px-10 pt-10">
      <h1 className="text-5xl font-bold mb-8">
        Mis <span className="text-lime-600">favoritos</span>
      </h1>

      <FavoriteProjectsList />
    </section>
  );
};

export default FavoriteProjects;
