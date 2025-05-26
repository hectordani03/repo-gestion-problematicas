import React from 'react';
import { useProjectSummary } from '../hooks/useProjectSummary';

const ProjectSummary = ({ projectData }) => {
  const { data, total } = useProjectSummary(projectData);

  return (
    <div className="bg-white rounded-lg p-4 shadow-xl h-fit">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold text-gray-800">Resumen de Proyectos</h3>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
            <span className="font-semibold text-gray-800">{item.count}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Total</span>
          <span className="font-bold text-lg text-gray-800">{total}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
