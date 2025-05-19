import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-2 w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <div className='p-3'>
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-md text-gray-700 mb-4">{description}</p>

        <Link
          to="/explore-projects/project-details"
          className="inline-block bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-700 transition"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
