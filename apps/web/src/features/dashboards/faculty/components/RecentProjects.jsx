const proyectosAsignados = [
  {
    id: 1,
    nombre: 'Sistema de Gestión Escolar',
    estudiantes: [
      {
        nombre: 'Ana García',
        email: 'ana.garcia@email.com'
      },
      {
        nombre: 'Luis Rodríguez',
        email: 'luis.rodriguez@email.com'
      }
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
    estudiantes: [
      {
        nombre: 'Carlos Mendoza',
        email: 'carlos.mendoza@email.com'
      }
    ],
    empresa: 'RestaurantePro',
    estado: 'Revisión',
    fechaAsignacion: '2024-05-10',
    progreso: 85,
    ultimaActividad: '2024-05-21',
    descripcion: 'Aplicación móvil para pedidos en línea con integración de pagos y seguimiento en tiempo real.',
    comentarios: 1,
    entregables: 4
  },
  {
    id: 3,
    nombre: 'Portal de Recursos Humanos',
    estudiantes: [
      {
        nombre: 'María López',
        email: 'maria.lopez@email.com'
      },
      {
        nombre: 'Diego Fernández',
        email: 'diego.fernandez@email.com'
      },
      {
        nombre: 'Sofía Martín',
        email: 'sofia.martin@email.com'
      }
    ],
    empresa: 'TechCorp Inc.',
    estado: 'Completado',
    fechaAsignacion: '2024-04-20',
    progreso: 100,
    ultimaActividad: '2024-05-20',
    descripcion: 'Sistema web para gestión de empleados, nóminas y reportes de recursos humanos.',
    comentarios: 5,
    entregables: 6
  },
  {
    id: 4,
    nombre: 'Dashboard de Analytics',
    estudiantes: [
      {
        nombre: 'Pedro Ruiz',
        email: 'pedro.ruiz@email.com'
      },
      {
        nombre: 'Carmen Jiménez',
        email: 'carmen.jimenez@email.com'
      }
    ],
    empresa: 'DataInsight',
    estado: 'En progreso',
    fechaAsignacion: '2024-05-18',
    progreso: 30,
    ultimaActividad: '2024-05-23',
    descripcion: 'Panel de control interactivo para visualización de datos y métricas empresariales.',
    comentarios: 0,
    entregables: 1
  }
];

const estadoConfig = {
  'En progreso': {
    color: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500'
  },
  'Revisión': {
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
};

const ProyectosRecientes = () => {

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short',
      year: 'numeric'
    });
  };

  const calcularDiasTranscurridos = (fecha) => {
    const hoy = new Date();
    const fechaActividad = new Date(fecha);
    const diferencia = Math.floor((hoy - fechaActividad) / (1000 * 60 * 60 * 24));
    
    if (diferencia === 0) return 'Hoy';
    if (diferencia === 1) return 'Ayer';
    return `Hace ${diferencia} días`;
  };

  const getInitials = (nombre) => {
    return nombre.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg">
<svg className="text-3xl mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11 7.5a.5.5 0 0 0-1 0v2.66l-2.19.874a.5.5 0 1 0 .371.928l2.5-1a.5.5 0 0 0 .314-.464v-3z"/><path fill="currentColor" fillRule="evenodd" d="M14 3.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5h-5c-.63 0-1.22-.296-1.6-.8L5 1H1.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2l1.83-5.49a.75.75 0 0 1 .712-.513h10.767a.5.5 0 0 1 .474.658l-.633 1.9a5.497 5.497 0 0 1-4.648 8.44c-2.52 0-4.64-1.69-5.29-4h-3.71a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h3.5a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h5a1.5 1.5 0 0 1 1.5 1.5zM10.5 15c2.49 0 4.5-2.01 4.5-4.5S12.99 6 10.5 6S6 8.01 6 10.5S8.01 15 10.5 15" clipRule="evenodd"/></svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg sm:text-xl text-gray-800">Proyectos recientes</h2>
            <p className="text-sm text-gray-500">
              {proyectosAsignados.length} proyecto{proyectosAsignados.length !== 1 ? 's' : ''} asignado{proyectosAsignados.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto">
        {proyectosAsignados.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className={`border-l-4 rounded-r-lg border-lime-600 p-4 hover:shadow-md transition-all duration-200 shadow-sm`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              {/* Información de los estudiantes */}
              <div className="flex-shrink-0">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex flex-col gap-2">
                    {proyecto.estudiantes.map((estudiante, idx) => (
                      <div key={idx} className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                        {getInitials(estudiante.nombre)}
                      </div>
                    ))}
                  </div>
                  <div className="min-w-0 flex-1">
                    {proyecto.estudiantes.map((estudiante, idx) => (
                      <div key={idx} className={`${idx > 0 ? 'mt-2 pt-2 border-t border-gray-200' : ''}`}>
                        <h4 className="font-medium text-gray-900 text-sm truncate">
                          {estudiante.nombre}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">
                          {estudiante.email}
                        </p>
                      </div>
                    ))}
                    {proyecto.estudiantes.length > 1 && (
                      <div className="mt-2">
                        <span className="text-xs bg-lime-200 text-indigo-700 px-2 py-1 rounded-full px-3">
                           {proyecto.estudiantes.length} estudiantes
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 truncate">
                      {proyecto.nombre}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                      {proyecto.descripcion}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Empresa:</span> {proyecto.empresa}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${estadoConfig[proyecto.estado].color} flex items-center gap-1`}>
                      <span className={`w-2 h-2 rounded-full ${estadoConfig[proyecto.estado].dot}`}></span>
                      {proyecto.estado}
                    </span>
                  </div>
                </div>

                {/* Barra de progreso */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-600">Progreso</span>
                    <span className="text-xs font-medium text-gray-700">{proyecto.progreso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-lime-300 to-lime-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${proyecto.progreso}%` }}
                    ></div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>📅 Asignado: {formatearFecha(proyecto.fechaAsignacion)}</span>
                  <span>⏱️ Última actividad: {calcularDiasTranscurridos(proyecto.ultimaActividad)}</span>
                  <span>💬 {proyecto.comentarios} comentarios</span>
                  <span>📋 {proyecto.entregables} entregables</span>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-200 transition-colors">
                    Ver detalles
                  </button>
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors">
                    Contactar estudiante{proyecto.estudiantes.length > 1 ? 's' : ''}
                  </button>
                  <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-medium hover:bg-yellow-200 transition-colors">
                    Subir comentario
                  </button>
                  <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors">
                    Revisar entregables
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosRecientes;