import { useActivities } from '../hooks/useRecentActivity'
import RecentActivityUtils  from '../utils/RecentActivityUtils'



const RecentActivity = () => {
  
  const { activities, loading, error, refreshActivities } = useActivities()

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1 h-4 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-xl h-fit p-4">
        <div className="flex items-center gap-3 mb-4">
          <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18A10 10 0 1 0 2.9 7.9M2 4v4h4m6-1v5l3 3"/>
          </svg>
          <h2 className="font-semibold text-base text-gray-900">Actividad Reciente</h2>
        </div>
        
        <div className="text-center py-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p className="text-sm text-red-600 mb-3">{error}</p>
          <button 
            onClick={refreshActivities}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl h-fit p-4">
      <div className="flex items-center gap-3 mb-4">
        <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18A10 10 0 1 0 2.9 7.9M2 4v4h4m6-1v5l3 3"/>
        </svg>
        <h2 className="font-semibold text-base text-gray-900">Actividad Reciente</h2>
      </div>

      <div className="space-y-3">
        {activities.length === 0 ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-500">No hay actividad reciente</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-300 to-lime-600 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                {activity.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-medium">{activity.name}</span>
                    <span className="text-gray-600"> {activity.action} </span>
                    <span className="font-medium text-gray-900">'{activity.target}'</span>
                    {activity.project && activity.target !== activity.project && (
                      <span className="text-gray-600"> en {activity.project}</span>
                    )}
                  </p>
                  
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${RecentActivityUtils.getActivityColor(activity.type)}`}>
                      {RecentActivityUtils.getActivityIcon(activity.type)}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      {RecentActivityUtils.getTimeAgo(activity.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {activities.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Ver toda la actividad
          </button>
        </div>
      )}
    </div>
  )
}

export default RecentActivity