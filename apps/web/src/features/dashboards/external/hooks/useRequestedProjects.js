import { useEffect, useState } from 'react'

// Datos de ejemplo
const mockProjects = [
  { id: 1, title: 'E-commerce Platform', projectType: 'Web Development', status: 'in-progress', requestedDate: '2024-05-20' },
  { id: 2, title: 'Mobile Banking App', projectType: 'Mobile Development', status: 'completed', requestedDate: '2024-05-18' },
  { id: 3, title: 'Inventory System', projectType: 'Desktop Application', status: 'pending', requestedDate: '2024-05-22' },
  { id: 4, title: 'Data Analytics Dashboard', projectType: 'Web Development', status: 'in-progress', requestedDate: '2024-05-19' },
  { id: 5, title: 'API REST Service', projectType: 'Backend Development', status: 'pending', requestedDate: '2024-05-23' }
]

export const useRequestedProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  // Simulación de llamada al backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setTimeout(() => {
          setProjects(mockProjects)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.status === filter
  )

  const getStats = () => {
    const total = projects.length
    const pending = projects.filter(p => p.status === 'pending').length
    const inProgress = projects.filter(p => p.status === 'in-progress').length
    const completed = projects.filter(p => p.status === 'completed').length
    return { total, pending, inProgress, completed }
  }

  const getStatusConfig = (status) => {
    const configs = {
      pending: {
        color: 'bg-red-500',
        text: 'Pendiente',
        bgLight: 'bg-red-50',
        textColor: 'text-red-700'
      },
      'in-progress': {
        color: 'bg-yellow-400',
        text: 'En Progreso',
        bgLight: 'bg-yellow-50',
        textColor: 'text-yellow-700'
      },
      completed: {
        color: 'bg-lime-500',
        text: 'Completado',
        bgLight: 'bg-lime-50',
        textColor: 'text-lime-700'
      }
    }
    return configs[status] || configs.pending
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return {
    loading,
    filter,
    setFilter,
    filteredProjects,
    stats: getStats(),
    getStatusConfig,
    formatDate
  }
}
