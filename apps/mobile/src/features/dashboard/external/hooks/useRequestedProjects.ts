// apps/mobile/src/features/dashboards/external/hooks/useRequestedProjects.ts

import { useEffect, useState } from 'react'

export type ProjectStatus = 'pending' | 'in-progress' | 'completed'
export type FilterType = 'all' | ProjectStatus

export interface Project {
  id: string
  title: string
  projectType: string
  requestedDate: string
  status: ProjectStatus
}

// Datos de ejemplo más realistas basados en web
const mockProjects: Project[] = [
  { id: '1', title: 'Growth | Web Page', projectType: 'Página Web', requestedDate: '2025-03-04', status: 'in-progress' },
  { id: '2', title: 'API Mobile', projectType: 'API Backend', requestedDate: '2025-02-28', status: 'pending' },
  { id: '3', title: 'E-commerce Platform', projectType: 'Aplicación Web', requestedDate: '2025-02-15', status: 'completed' },
  { id: '4', title: 'Mobile App Redesign', projectType: 'Aplicación Móvil', requestedDate: '2025-01-20', status: 'in-progress' },
  { id: '5', title: 'Landing Redesign', projectType: 'Página Web', requestedDate: '2025-01-15', status: 'completed' },
  { id: '6', title: 'API Integration', projectType: 'Backend', requestedDate: '2025-01-10', status: 'pending' },
  { id: '7', title: 'Mobile Wrapper', projectType: 'App Móvil', requestedDate: '2024-12-20', status: 'in-progress' },
]

export const useRequestedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<FilterType>('all')

  // Simulación de llamada al backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setTimeout(() => {
          setProjects(mockProjects)
          setLoading(false)
        }, 800)
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

  const getStatusConfig = (status: ProjectStatus) => {
    const configs = {
      pending: {
        color: '#DC2626',
        text: 'Pendiente',
        bgLight: '#FEF2F2',
        textColor: '#B91C1C'
      },
      'in-progress': {
        color: '#FBBF24',
        text: 'En Progreso',
        bgLight: '#FEF3C7',
        textColor: '#92400E'
      },
      completed: {
        color: '#65A30D',
        text: 'Completado',
        bgLight: '#D1FAE5',
        textColor: '#065F46'
      }
    }
    return configs[status] || configs.pending
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
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