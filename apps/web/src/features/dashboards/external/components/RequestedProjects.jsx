import { useRequestedProjects } from '../hooks/useRequestedProjects'

const RequestedProjects = () => {
  const {
    loading,
    filter,
    setFilter,
    filteredProjects,
    stats,
    getStatusConfig,
    formatDate
  } = useRequestedProjects()


  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-12 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
<svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Proyectos Solicitados</h2>
            <p className="text-sm text-gray-500">{stats.total} proyectos totales</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
              filter === 'all' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-gray-900 bg-gray-100'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
              filter === 'pending' 
                ? 'bg-red-100 text-red-700' 
                : 'text-gray-600 hover:text-gray-900 bg-gray-100'
            }`}
          >
            Pendientes
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
              filter === 'in-progress' 
                ? 'bg-yellow-100 text-yellow-700' 
                : 'text-gray-600 hover:text-gray-900 bg-gray-100'
            }`}
          >
            En Progreso
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
              filter === 'completed' 
                ? 'bg-lime-100 text-lime-700' 
                : 'text-gray-600 hover:text-gray-900 bg-gray-100'
            }`}
          >
            Completados
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {filteredProjects.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/>
              </svg>
            </div>
            <p className="text-gray-500">No hay proyectos para mostrar</p>
          </div>
        ) : (
          filteredProjects.map((project) => {
            const statusConfig = getStatusConfig(project.status)
            return (
              <div key={project.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                        {project.title}
                      </h3>
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${statusConfig.color}`}></span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        {project.projectType}
                      </span>
                      <span className="flex items-center gap-1">
                        {formatDate(project.requestedDate)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${statusConfig.bgLight} ${statusConfig.textColor}`}>
                      {statusConfig.text}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default RequestedProjects