import { useState, useEffect } from 'react'

const mockTasks = [
  {
    id: 1,
    task: 'Implementar autenticación JWT',
    title: 'E-commerce App',
    dueDate: '2025-11-28',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 2,
    task: 'Diseño de base de datos',
    title: 'Sistema de Inventario',
    dueDate: '2024-05-30',
    priority: 'medium',
    status: 'in-progress'
  },
  {
    id: 3,
    task: 'Testing unitario',
    title: 'API REST',
    dueDate: '2024-06-02',
    priority: 'low',
    status: 'pending'
  },
  {
    id: 4,
    task: 'Documentación técnica',
    title: 'E-commerce App',
    dueDate: '2024-05-25',
    priority: 'high',
    status: 'completed'
  }
]

export const useStudentTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Ejemplo de llamada a API
        // const response = await fetch('/api/student/tasks')
        // const data = await response.json()
        setTimeout(() => {
          setTasks(mockTasks)
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error('Error fetching tasks:', error)
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      // Ejemplo de llamada a API para actualizar el estado de la tarea
      // await fetch(`/api/tasks/${taskId}/status`, { ... })
      setTasks(prev =>
        prev.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      )
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'pending') return task.status === 'pending' || task.status === 'in-progress'
    return task.status === filter
  })

  return {
    tasks,
    filteredTasks,
    loading,
    filter,
    setFilter,
    updateTaskStatus
  }
}
