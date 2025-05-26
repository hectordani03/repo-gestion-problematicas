import { useStudentTasks } from '../hooks/useStudentTasks'

const StudentTasks = () => {
  const {
    filteredTasks,
    loading,
    filter,
    setFilter,
    updateTaskStatus
  } = useStudentTasks()

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-700 border-red-200',
      medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      low: 'bg-lime-100 text-lime-700 border-lime-200'
    }
    return colors[priority] || colors.medium
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        )
      case 'in-progress':
        return (
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = date - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return 'Vencida'
    if (diffDays === 0) return 'Hoy'
    if (diffDays === 1) return 'Mañana'
    return `${diffDays} días`
  }

  const isOverdue = (dateString) => {
    return new Date(dateString) < new Date()
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col sm:justify-between gap-4">
          <div className="flex gap-4">
            <svg className=' text-3xl ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q1.2 0 2.338.275t2.187.8q.375.2.488.6t-.138.75t-.663.45t-.812-.1q-.8-.375-1.663-.575T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.2-.012-.387t-.038-.388q-.05-.425.163-.812t.637-.513q.4-.125.75.075t.4.6q.05.35.075.7T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1.4-8.2l9.3-9.325q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7L11.3 15.9q-.3.3-.7.3t-.7-.3l-2.85-2.85q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"/></svg>
            <h2 className="text-lg font-semibold text-gray-900">Mis Tareas</h2>
            <p className="text-sm text-gray-500 mt-1">
              {filteredTasks.filter(t => t.status !== 'completed').length} pendientes
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-lime-100 text-lime-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                filter === 'pending' 
                  ? 'bg-lime-100 text-lime-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pendientes
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                filter === 'completed' 
                  ? 'bg-lime-100 text-lime-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Completadas
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {filteredTasks.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <p className="text-gray-500">No hay tareas para mostrar</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <button 
                  onClick={() => {
                    const newStatus = task.status === 'completed' ? 'pending' : 'completed'
                    updateTaskStatus(task.id, newStatus)
                  }}
                  className="mt-1 hover:scale-110 transition-transform"
                >
                  {getStatusIcon(task.status)}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h3 className={`font-medium text-sm sm:text-base ${
                        task.status === 'completed' 
                          ? 'line-through text-gray-500' 
                          : 'text-gray-900'
                      }`}>
                        {task.task}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{task.title}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-2 py-1 text-xs font-medium rounded border ${getPriorityColor(task.priority)}`}>
                        {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                      </span>
                      
                      <span className={`text-xs px-2 py-1 rounded ${
                        task.status === 'completed' 
                          ? 'text-gray-400' 
                          : isOverdue(task.dueDate) 
                            ? 'text-red-600 bg-red-50' 
                            : 'text-gray-600'
                      }`}>
                        {formatDate(task.dueDate)}
                      </span>
                    </div>
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

export default StudentTasks