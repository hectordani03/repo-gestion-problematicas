// apps/mobile/src/features/dashboard/external/hooks/useRecentActivity.ts

import { useState, useEffect } from 'react'

export type ActivityType = 'upload' | 'task_completed' | 'comment' | 'edit' | 'project_start'

export interface Activity {
  id: string
  name: string
  action: string
  target: string
  project?: string
  timestamp: string
  type: ActivityType
  avatar: string
}

// Función para generar avatar desde el nombre
const generateAvatarFromActivity = (activity: Omit<Activity, 'avatar'>): string => {
  if (!activity || !activity.name) return '';
  
  const names = activity.name.split(' ');
  const firstName = names[0] || '';
  const lastName = names[names.length - 1] || '';
  const firstInitial = firstName[0] ? firstName[0].toUpperCase() : '';
  const lastInitial = lastName[0] ? lastName[0].toUpperCase() : '';
  return names.length > 1 ? firstInitial + lastInitial : firstInitial;
};

const mockActivities: Omit<Activity, 'avatar'>[] = [
  {
    id: '1',
    name: 'Ana García',
    action: 'subió',
    target: 'documentación-api.pdf',
    project: 'E-commerce Platform',
    timestamp: '2024-05-24T14:30:00Z',
    type: 'upload',
  },
  {
    id: '2',
    name: 'Carlos López',
    action: 'completó la tarea',
    target: 'Implementar autenticación',
    project: 'Mobile Banking App',
    timestamp: '2024-05-24T13:15:00Z',
    type: 'task_completed',
  },
  {
    id: '3',
    name: 'María Rodríguez',
    action: 'comentó en',
    target: 'Diseño de base de datos',
    project: 'Inventory System',
    timestamp: '2024-05-24T11:45:00Z',
    type: 'comment',
  },
  {
    id: '4',
    name: 'Luis Martín',
    action: 'modificó',
    target: 'dashboard-wireframe.fig',
    project: 'Analytics Dashboard',
    timestamp: '2024-05-24T10:20:00Z',
    type: 'edit',
  },
  {
    id: '5',
    name: 'Elena Torres',
    action: 'inició el proyecto',
    target: 'API REST Service',
    project: 'API REST Service',
    timestamp: '2024-05-24T09:00:00Z',
    type: 'project_start',
  }
];

// Servicio para la API
const activityService = {
  async getRecentActivities(): Promise<Activity[]> {
    try {
      // TODO: Reemplazar con la llamada real al backend
      
      // Simulación temporal
      return new Promise((resolve) => {
        setTimeout(() => {
          const activitiesWithAvatars = mockActivities.map(activity => ({
            ...activity,
            avatar: generateAvatarFromActivity(activity)
          }));
          resolve(activitiesWithAvatars);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching activities:', error);
      throw error;
    }
  }
};

// Hook personalizado para manejar la lógica de actividades
export const useRecentActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const processActivities = (data: Omit<Activity, 'avatar'>[]): Activity[] => {
    return data.map(activity => ({
      ...activity,
      avatar: generateAvatarFromActivity(activity)
    }));
  };

  const fetchActivities = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await activityService.getRecentActivities()
      setActivities(data)
    } catch (err) {
      setError((err as Error).message || 'Error al cargar las actividades')
      setActivities([])
    } finally {
      setLoading(false)
    }
  }

  const refreshActivities = () => {
    fetchActivities()
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  return {
    activities,
    loading,
    error,
    refreshActivities
  }
}