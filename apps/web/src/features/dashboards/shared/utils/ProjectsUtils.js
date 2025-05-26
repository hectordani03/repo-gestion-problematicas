export const statusConfig = {
  'En progreso': {
    color: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500'
  },
  'Revision': {
    color: 'bg-yellow-100 text-yellow-800',
    dot: 'bg-yellow-500'
  },
  'Completado': {
    color: 'bg-green-100 text-green-800',
    dot: 'bg-green-500'
  },
  'Pausado': {
    color: 'bg-red-100 text-red-800',
    dot: 'bg-red-500'
  }
}

// Configuración de campos por tipo de dashboard
export const dashboardConfig = {
  faculty: {
    title: 'Proyectos activos',
    subtitle: 'proyectos activos',
    showStudents: true,
    showCompany: true,
    showProgress: true,
    showComments: true,
    showContactButton: true,
    showDetailsButton: true,
    showCommentButton: true,
    showDeliverablesButton: true,
    maxHeight: '500px'
  },
  student: {
    title: 'Mis proyectos',
    subtitle: 'proyectos en curso',
    showStudents: false,
    showCompany: true,
    showProgress: true,
    showComments: false,
    showContactButton: false,
    showDetailsButton: true,
    showCommentButton: false,
    showDeliverablesButton: true,
    maxHeight: '400px'
  },
  external: {
    title: 'Proyectos asignados',
    subtitle: 'proyectos de la empresa',
    showStudents: true,
    showCompany: false,
    showProgress: true,
    showComments: true,
    showDeliverables: false,
    showContactButton: true,
    showDetailsButton: true,
    showCommentButton: true,
    showDeliverablesButton: true,
    maxHeight: '500px'
  }
}

export const projectUtils = {
  formatDate: (date) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short',
      year: 'numeric'
    })
  },

  calculateDaysElapsed: (date) => {
    const today = new Date()
    const activityDate = new Date(date)
    const difference = Math.floor((today - activityDate) / (1000 * 60 * 60 * 24))
    
    if (difference === 0) return 'Hoy'
    if (difference === 1) return 'Ayer'
    return `Hace ${difference} días`
  },

  getInitials: (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  },

  getProjectCountText: (count, dashboardType) => {
    const config = dashboardConfig[dashboardType]
    return `${count} ${config.subtitle}`
  },

  // Función para determinar si mostrar un campo específico
  shouldShowField: (fieldName, dashboardType) => {
    const config = dashboardConfig[dashboardType]
    return config[fieldName] !== false
  },

  // Función para obtener la configuración completa del dashboard
  getDashboardConfig: (dashboardType) => {
    return dashboardConfig[dashboardType] || dashboardConfig.faculty
  }
}