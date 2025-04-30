import React from 'react';

const projects = [
  {
    title: 'E-commerce Web App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec semper augue.',
  },
  {
    title: 'CRM Mobile Integration',
    description: 'Donec vel ante malesuada, ornare nunc tincidunt, gravida nisi.',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Mauris lacinia massa ac fermentum tempor.',
  },
];

const ProjectsTab = () => (
  <div className="space-y-4">
    {projects.map((p, i) => (
      <div key={i} className="flex items-start bg-lime-50 p-4 rounded-xl shadow">
        <div className="p-3 bg-lime-600 text-white rounded-lg mr-4">
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg">{p.title}</h4>
          <p className="text-gray-600 mt-1 leading-snug">{p.description}</p>
        </div>
        <button className="ml-4 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg transition text-sm">
          View Project
        </button>
      </div>
    ))}
  </div>
);

export default ProjectsTab;