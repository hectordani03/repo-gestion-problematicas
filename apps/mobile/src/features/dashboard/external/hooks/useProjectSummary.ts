// apps/mobile/src/features/dashboard/external/hooks/useProjectSummary.ts

export interface ProjectData {
  label: string
  color: string
  count: number
}

export const useProjectSummary = (projectData?: ProjectData[]) => {
  const defaultData: ProjectData[] = [
    { label: 'Solicitados', color: '#3B82F6', count: 6 },
    { label: 'En curso', color: '#FBBF24', count: 8 },
    { label: 'Finalizados', color: '#10B981', count: 5 },
    { label: 'Pendientes', color: '#EF4444', count: 3 },
  ];

  const data = projectData || defaultData;
  const total = data.reduce((sum, item) => sum + item.count, 0);

  return { data, total };
};