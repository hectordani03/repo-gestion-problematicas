// apps/mobile/src/features/dashboards/faculty/hooks/useFacultyStats.ts


export const useFacultyStats = () => {
  const statsData = [
    {
      label: 'Proyectos Asignados',
      value: 8,
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: 'folder-multiple'
    },
    {
      label: 'Proyectos en Curso',
      value: 7,
      color: 'from-lime-500 to-lime-500',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: 'play-circle'
    },
    {
      label: 'Proyectos Finalizados',
      value: 1,
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: 'check-circle'
    },
    {
      label: 'Solicitudes Pendientes',
      value: 12,
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: 'clock-outline'
    },
    {
      label: 'Tiempo Promedio',
      value: '6 meses',
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: 'timer-outline'
    }
  ]

  return { statsData }
}