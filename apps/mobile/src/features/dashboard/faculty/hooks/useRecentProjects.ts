export const useRecentProjects = () => {
  const proyectosAsignados = [
    {
      id: 1,
      nombre: 'Sistema de Gestión Escolar',
      estudiantes: [
        { nombre: 'Ana García', email: 'ana.garcia@email.com' },
        { nombre: 'Luis Rodríguez', email: 'luis.rodriguez@email.com' }
      ],
      empresa: 'Colegio San Martín',
      estado: 'En progreso',
      fechaAsignacion: '2024-05-15',
      progreso: 65,
      ultimaActividad: '2024-05-22',
      descripcion: 'Desarrollo de plataforma web para gestión de estudiantes, calificaciones y comunicación con padres.',
      comentarios: 3,
      entregables: 2
    },
    {
      id: 2,
      nombre: 'App Móvil de Delivery',
      estudiantes: [{ nombre: 'Carlos Mendoza', email: 'carlos.mendoza@email.com' }],
      empresa: 'RestaurantePro',
      estado: 'Revisión',
      fechaAsignacion: '2024-05-10',
      progreso: 85,
      ultimaActividad: '2024-05-21',
      descripcion: 'Aplicación móvil para pedidos en línea con integración de pagos y seguimiento en tiempo real.',
      comentarios: 1,
      entregables: 4
    }
  ];

  const formatearFecha = (fecha: string) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short',
      year: 'numeric'
    });
  };

  const calcularDiasTranscurridos = (fecha: string) => {
    const hoy = new Date();
    const fechaActividad = new Date(fecha);
    const diferencia = Math.floor((hoy.getTime() - fechaActividad.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diferencia === 0) return 'Hoy';
    if (diferencia === 1) return 'Ayer';
    return `Hace ${diferencia} días`;
  };

  const getInitials = (nombre: string) => {
    return nombre.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return {
    proyectosAsignados,
    formatearFecha,
    calcularDiasTranscurridos,
    getInitials
  };
};