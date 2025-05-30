import { useState } from "react";

export const usePendingRequests = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const requestsData = [
    { 
      id: 1,
      title: 'Sistema de Inventario', 
      company: 'TechCorp S.A.', 
      status: 'pending-review',
      sendDate: '2024-05-20',
      priority: 'alta'
    },
    { 
      id: 2,
      title: 'App Móvil de Ventas', 
      company: 'Comercial XYZ', 
      status: 'in-review',
      sendDate: '2024-05-18',
      priority: 'media'
    },
    { 
      id: 3,
      title: 'Portal Web Corporativo', 
      company: 'Empresa ABC', 
      status: 'waiting-assignment',
      sendDate: '2024-05-15',
      priority: 'baja'
    }
  ];

  const statusConfig = {
    'pending-review': {
      color: 'bg-orange-500',
      text: 'Pendiente de revisión',
      textColor: 'text-orange-700'
    },
    'in-review': {
      color: 'bg-blue-500',
      text: 'En revisión',
      textColor: 'text-blue-700'
    },
    'waiting-assignment': {
      color: 'bg-purple-500',
      text: 'Esperando asignación',
      textColor: 'text-purple-700'
    }
  };

  const priorityConfig = {
    'alta': { color: 'bg-red-100 text-red-800', icon: '' },
    'media': { color: 'bg-yellow-100 text-yellow-800', icon: '' },
    'baja': { color: 'bg-lime-100 text-lime-800', icon: '' }
  };

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short'
    });
  };

  const getStatistics = () => {
    const total = requestsData.length;
    return { total };
  };

  return {
    loading,
    error,
    selectedRequest,
    requestsData,
    statusConfig,
    priorityConfig,
    setSelectedRequest,
    setError,
    formatDate,
    getStatistics
  };
};
