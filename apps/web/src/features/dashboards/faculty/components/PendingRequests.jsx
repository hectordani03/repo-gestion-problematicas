import { usePendingRequests } from '../hooks/usePendingRequests';

const PendingRequests = () => {
  const {
    loading,
    error,
    requestsData,
    statusConfig,
    priorityConfig,
    formatDate,
    getStatistics
  } = usePendingRequests();

  const stats = getStatistics();

  if (error) {
    return (
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl w-full">
        <div className="text-center py-8">
          <div className="text-red-500 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-red-600 font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl w-full">
      <div className="flex items-center mb-6 gap-3">
        <div className="p-2 rounded-lg">
          <svg className="text-3xl text-black" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.5 6.5 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"/>
          </svg>
        </div>
        <div>
          <h2 className="font-semibold text-lg sm:text-xl text-gray-800">Solicitudes por revisar</h2>
          <p className="text-sm text-gray-500">
            {stats.total} proyecto{stats.total !== 1 ? 's' : ''} pendiente{stats.total !== 1 ? 's' : ''}
          </p>
        </div>
        {loading && (
          <div className="ml-auto">
            <div className="w-5 h-5 border-2 border-gray-300 border-t-lime-600 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {loading && requestsData.length === 0 ? (
          // Skeleton loading
          <div className="space-y-3">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="animate-pulse">
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gray-300 rounded-full w-16"></div>
                    <div className="text-right">
                      <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          requestsData.map((request, idx) => (
            <div key={request.id || idx} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 border border-gray-100">
                <div className="flex-1 min-w-0 mb-2 sm:mb-0">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="w-3 h-3 rounded-full bg-lime-600 block"></span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">
                        {request.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {request.company}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityConfig[request.priority].color}`}>
                      {priorityConfig[request.priority].icon} {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <p className={`text-xs font-medium ${statusConfig[request.status].textColor}`}>
                      {statusConfig[request.status].text}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatDate(request.sendDate)}
                    </p>
                  </div>
                </div>
              </div>
              {idx < requestsData.length - 1 && <hr className="border-gray-200 my-1" />}
            </div>
          ))
        )}
        
        {!loading && requestsData.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-3">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">No hay solicitudes pendientes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingRequests;