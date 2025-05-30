// apps/mobile/src/features/dashboard/external/hooks/useExternalStats.ts

export const useExternalStats = () => {
  const statsData = [
    {
      label: 'Miembros Activos',
      value: 8,
      icon: 'account-group'
    },
    {
      label: 'Proyectos este Mes',
      value: 12,
      icon: 'calendar-month'
    },
    {
      label: 'Proyectos en Curso',
      value: 7,
      icon: 'progress-clock'
    },
    {
      label: 'Proyectos Finalizados',
      value: 1,
      icon: 'check-circle'
    },
    {
      label: 'Tiempo Promedio',
      value: '6 meses',
      icon: 'clock-outline'
    }
  ]

  return { statsData }
}