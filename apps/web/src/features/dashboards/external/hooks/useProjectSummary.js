export const useProjectSummary = (projectData) => {
  const defaultData = [
    { label: 'Solicitados', color: 'bg-blue-500', count: 6 },
    { label: 'En curso', color: 'bg-yellow-400', count: 8 },
    { label: 'Finalizados', color: 'bg-green-500', count: 5 },
    { label: 'Pendientes', color: 'bg-red-500', count: 3 },
  ];

  const data = projectData || defaultData;

  const total = data.reduce((sum, item) => sum + item.count, 0);

  return { data, total };
};
