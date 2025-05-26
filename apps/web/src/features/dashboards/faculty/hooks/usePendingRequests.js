import { useState } from "react";

export const usePendingRequests = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Datos ejemplo
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
    },
    { 
      id: 4,
      title: 'Dashboard Analytics', 
      company: 'DataTech Ltd.', 
      status: 'pending-review',
      sendDate: '2024-05-22',
      priority: 'alta'
    },
    { 
      id: 5,
      title: 'E-commerce Platform', 
      company: 'ShopOnline Inc.', 
      status: 'in-review',
      sendDate: '2024-05-19',
      priority: 'media'
    }
  ];

  // Configuraciones de estado y prioridad
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
    'alta': {
      color: 'bg-red-100 text-red-800',
      icon: ''
    },
    'media': {
      color: 'bg-yellow-100 text-yellow-800',
      icon: ''
    },
    'baja': {
      color: 'bg-lime-100 text-lime-800',
      icon: ''
    }
  };

  // Función para formatear fechas
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short'
    });
  };

  // Función para obtener solicitudes
  const fetchRequests = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Reemplazar con llamada real al backend
      // const response = await requestsService.getPendingRequests(filters);
      // return response.data;
      
      // Simule una llamada al backend
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return requestsData;
    } catch (err) {
      console.error('Error fetching requests:', err);
      setError('Error al cargar las solicitudes');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar estado de una solicitud
  const updateRequestStatus = async (requestId, newStatus) => {
    setLoading(true);
    
    try {
      // TODO: Reemplazar con llamada real al backend
      // const response = await requestsService.updateStatus(requestId, newStatus);
      
      console.log(`Actualizando solicitud ${requestId} a estado: ${newStatus}`);
      
      // Simul delay del backend
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // TODO: Aquí actualizarías el estado local o refrescarías los datos
      // await fetchRequests();
      
    } catch (err) {
      console.error('Error updating request status:', err);
      setError('Error al actualizar la solicitud');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener estadísticas
  // Me pareciio mejor solo dejar el total de proyectos
  const getStatistics = () => {
    const total = requestsData.length;
    const byStatus = {};
    const byPriority = {};

    requestsData.forEach(request => {
      byStatus[request.status] = (byStatus[request.status] || 0) + 1;
      byPriority[request.priority] = (byPriority[request.priority] || 0) + 1;
    });

    return {
      total,
      byStatus,
      byPriority
    };
  };

  return {
    // Estados
    loading,
    error,
    selectedRequest,
    requestsData, // Temporal - se quitará cuando venga del backend
    
    // Configuraciones
    statusConfig,
    priorityConfig,
    
    // Funciones de estado
    setSelectedRequest,
    setError,
    
    // Funciones de datos
    fetchRequests,
    updateRequestStatus,
    
    // Funciones de utilidad
    formatDate,
    getStatistics
  };
};