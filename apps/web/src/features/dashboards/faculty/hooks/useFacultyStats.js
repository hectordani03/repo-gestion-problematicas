import { STAT_ICONS } from '../../shared/constants/icons'

export const useFacultyStats = () => {
  const statsData = [
    {
      label: 'Proyectos Asignados',
      value: 8,
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: STAT_ICONS.ACTIVE_MEMBERS
    },
    {
      label: 'Proyectos en Curso',
      value: 7,
      color: 'from-lime-500 to-lime-500',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: STAT_ICONS.ONGOING_PROJECTS
    },
    {
      label: 'Proyectos Finalizados',
      value: 1,
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: STAT_ICONS.COMPLETED_PROJECTS
    },
    {
      label: 'Solicitudes Pendientes',
      value: 12,
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: STAT_ICONS.PROJECTS_THIS_MONTH
    },
    {
      label: 'Tiempo Promedio',
      value: '6 meses',
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      icon: STAT_ICONS.AVERAGE_TIME
    }
  ]

  return { statsData }
}