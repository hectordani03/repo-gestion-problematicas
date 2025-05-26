export const getStatusColor = (status) => {
  switch(status) {
    case 'En progreso': return 'bg-orange-100 text-orange-700'
    case 'Revisión': return 'bg-blue-100 text-blue-700'
    case 'Desarrollo': return 'bg-lime-100 text-lime-700'
    case 'Planificación': return 'bg-purple-100 text-purple-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}
