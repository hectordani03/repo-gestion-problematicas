import { useLinkedStudents } from '../hooks/useLinkedStudents';

const LinkedStudents = () => {
  const {
    selectedStudent,
    comment,
    showCommentModal,
    loading,
    studentsData,
    setComment,
    openCommentModal,
    closeCommentModal,
    handleSendComment
  } = useLinkedStudents();

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="flex items-center mb-6 gap-2">
        <svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
          <path fill="currentColor" d="M164.47 195.63a8 8 0 0 1-6.7 12.37H10.23a8 8 0 0 1-6.7-12.37a95.83 95.83 0 0 1 47.22-37.71a60 60 0 1 1 66.5 0a95.83 95.83 0 0 1 47.22 37.71m87.91-.15a95.87 95.87 0 0 0-47.13-37.56A60 60 0 0 0 144.7 54.59a4 4 0 0 0-1.33 6a75.83 75.83 0 0 1 3.63 89.94a4 4 0 0 0 1.07 5.53a112.3 112.3 0 0 1 29.85 30.83a23.92 23.92 0 0 1 3.65 16.47a4 4 0 0 0 3.95 4.64h60.3a8 8 0 0 0 7.73-5.93a8.22 8.22 0 0 0-1.17-6.59"/>
        </svg>
        <h2 className="font-semibold text-lg text-gray-800">Estudiantes vinculados</h2>
        <span className="ml-auto bg-lime-100 text-lime-800 text-xs font-medium px-3 py-1 rounded-lg">
          {studentsData.length} estudiantes
        </span>
      </div>

      <div className="space-y-4">
        {studentsData.map((student) => (
          <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {student.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 truncate">{student.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{student.title}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.statusColor}`}>
                      {student.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Progreso del proyecto</span>
                <span className="text-sm font-medium text-gray-900">{student.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-lime-300 to-lime-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-gray-100">
              <span className="text-xs text-gray-500">{student.lastActivity}</span>
              <button
                onClick={() => openCommentModal(student)}
                className="bg-lime-600 hover:bg-lime-700 text-white text-sm px-3 py-1.5 rounded-md transition-colors duration-200 self-start sm:self-auto"
              >
                Enviar comentario
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCommentModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Comentario para {selectedStudent?.name}
              </h3>
              <p className="text-sm text-gray-600">{selectedStudent?.title}</p>
            </div>
            
            <div className="p-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escribe tu comentario o calificación parcial..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
            </div>
            
            <div className="p-4 border-t border-gray-200 flex gap-2 justify-end">
              <button
                onClick={closeCommentModal}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors rounded-md"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                onClick={handleSendComment}
                disabled={!comment.trim() || loading}
                className="px-4 py-2 bg-lime-600 hover:bg-lime-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md transition-colors flex items-center gap-2"
              >
                {loading && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedStudents;