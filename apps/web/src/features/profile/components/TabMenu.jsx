import React from 'react';

const tabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'projects', label: 'Proyectos' },
  { key: 'feedback', label: 'Feedback' },
];

const TabMenu = ({ activeTab, onChange }) => (
  <div className="mt-6 border-b border-gray-200 ml-3">
    <nav className="-mb-px flex space-x-8">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`pb-2 text-sm font-bold transition-colors 
            ${activeTab === tab.key 
              ? 'border-b-2 border-lime-600 text-gray-900' 
              : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  </div>
);

export default TabMenu;