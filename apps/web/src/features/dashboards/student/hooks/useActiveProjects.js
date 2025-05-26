export const useActiveProjects = () => {
  const stats = [
  {
    label: 'App móvil de cocina',
    description: 'Desarrollo iOS/Android',
    status: 'En progreso',
    progress: 75,
    team: 4,
    deadline: '15 días',
    icon: '/avatar.png'
  },
  {
    label: 'Sistema de inventario',
    description: 'Dashboard web',
    status: 'Revisión',
    progress: 90,
    team: 3,
    deadline: '7 días',
    icon: '/avatar.png'
  },
  {
    label: 'E-commerce platform',
    description: 'Tienda online',
    status: 'Desarrollo',
    progress: 45,
    team: 6,
    deadline: '30 días',
    icon: '/avatar.png'
  },
  {
    label: 'CRM empresarial',
    description: 'Gestión clientes',
    status: 'Planificación',
    progress: 20,
    team: 5,
    deadline: '45 días',
    icon: '/avatar.png'
  }
];

  const getStatusColor = (status) => {
    switch(status) {
      case 'En progreso': return 'bg-orange-100 text-orange-700'
      case 'Revisión': return 'bg-blue-100 text-blue-700'
      case 'Desarrollo': return 'bg-lime-100 text-lime-700'
      case 'Planificación': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const total = stats.length
  const average = (stats.reduce((sum, p) => sum + p.progress, 0) / total).toFixed(1)
  const members = stats.reduce((sum, p) => sum + p.team, 0)

  return { stats, getStatusColor, total, average, members }
}
