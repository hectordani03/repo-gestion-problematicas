import { useProjects } from '../hooks/useProjects'
import { statusConfig, projectUtils } from '../utils/ProjectsUtils'

const Projects = ({ 
  dashboardType,
  onProjectClick,
  onContactStudents,
  onUploadComment,
  onCheckDeliverables,
  className = ''
}) => {
  const { projects, loading, error, refreshProjects } = useProjects(dashboardType)
  const config = projectUtils.getDashboardConfig(dashboardType)

  if (loading) {
    return (
      <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg w-full ${className}`}>
        <div className="animate-pulse">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border-l-4 border-gray-200 rounded-r-lg p-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-100 rounded w-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg w-full ${className}`}>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-semibold text-lg sm:text-xl text-gray-800">{config.title}</h2>
        </div>
        
        <div className="text-center py-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p className="text-sm text-red-600 mb-3">{error}</p>
          <button 
            onClick={refreshProjects}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg w-full ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg">
          </div>
          <div>
            <div className="flex gap-3 mb-2">
              <svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="M5 21q-.825 0-1.412-.587T3 19v-6.25h7V21zm7 0v-8.25h9V19q0 .825-.587 1.413T19 21zM3 10.75V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.75z"/></svg>
              <h2 className="font-semibold text-lg sm:text-xl text-gray-800">{config.title}</h2>
            </div>
            <p className="text-sm text-gray-500">
              {projectUtils.getProjectCountText(projects.length, dashboardType)}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: config.maxHeight }}>
        {projects.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <p className="text-gray-500">No hay proyectos disponibles</p>
          </div>
        ) : (
          projects.map((project) => (
            <div 
              key={project.id} 
              className="border-l-4 rounded-r-lg border-lime-600 p-4 hover:shadow-md transition-all duration-200 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Students information - Solo si está habilitado */}
                {config.showStudents && (
                  <div className="flex-shrink-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex flex-col gap-2">
                        {project.students.map((student, idx) => (
                          <div key={idx} className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                            {projectUtils.getInitials(student.name)}
                          </div>
                        ))}
                      </div>
                      <div className="min-w-0 flex-1">
                        {project.students.map((student, idx) => (
                          <div key={idx} className={`${idx > 0 ? 'mt-2 pt-2 border-t border-gray-200' : ''}`}>
                            <h4 className="font-medium text-gray-900 text-sm truncate">
                              {student.name}
                            </h4>
                            <p className="text-xs text-gray-500 truncate">
                              {student.email}
                            </p>
                          </div>
                        ))}
                        {project.students.length > 1 && (
                          <div className="mt-2">
                            <span className="text-xs bg-lime-200 text-indigo-700 px-2 py-1 rounded-full px-3">
                               {project.students.length} estudiantes
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                        {project.description}
                      </p>
                      {config.showCompany && (
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Empresa:</span> {project.company}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[project.status].color} flex items-center gap-1`}>
                        <span className={`w-2 h-2 rounded-full ${statusConfig[project.status].dot}`}></span>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {config.showProgress && (
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">Progreso</span>
                        <span className="text-xs font-medium text-gray-700">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-lime-300 to-lime-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>📅 Asignado: {projectUtils.formatDate(project.assigmentDate)}</span>
                    <span>⏱️ Última actividad: {projectUtils.calculateDaysElapsed(project.lastActivity)}</span>
                    {config.showComments && (
                      <span>💬 {project.comments} comentarios</span>
                    )}
                    {config.showDeliverables && (
                      <span>📋 {project.deliverables} entregables</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {config.showDetailsButton && (
                      <button 
                        onClick={() => onProjectClick?.(project)}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-200 transition-colors"
                      >
                        Ver detalles
                      </button>
                    )}
                    {config.showContactButton && (
                      <button 
                        onClick={() => onContactStudents?.(project)}
                        className="px-3 py-1 bg-lime-100 text-lime-700 rounded-lg text-xs font-medium hover:bg-lime-200 transition-colors"
                      >
                        Contactar estudiante{project.students.length > 1 ? 's' : ''}
                      </button>
                    )}
                    {config.showCommentButton && (
                      <button 
                        onClick={() => onUploadComment?.(project)}
                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-medium hover:bg-yellow-200 transition-colors"
                      >
                        Subir comentario
                      </button>
                    )}
                    {config.showDeliverablesButton && (
                      <button 
                        onClick={() => onCheckDeliverables?.(project)}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors"
                      >
                        Revisar entregables
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Projects