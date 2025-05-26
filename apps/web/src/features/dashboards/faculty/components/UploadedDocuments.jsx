import { useUploadedDocuments } from '../hooks/useUploadedDocuments';

const UploadedDocuments = () => {
  const getFileIcon = (fileType) => {
    const icons = {
      PDF: <svg className="w-7 h-fit" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 15 15"><path fill="#333333" d="M3.5 8H3V7h.5a.5.5 0 0 1 0 1M7 10V7h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/><path fill="#333333" fillRule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM3.5 6H2v5h1V9h.5a1.5 1.5 0 1 0 0-3m4 0H6v5h1.5A1.5 1.5 0 0 0 9 9.5v-2A1.5 1.5 0 0 0 7.5 6m2.5 5V6h3v1h-2v1h1v1h-1v2z" clipRule="evenodd"/></svg>,
      ZIP: <svg className="w-7 h-fit" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"><path fill="#333333" d="M413.4 0H114.7C91.1 0 72 19.1 72 42.7v426.7c0 23.5 19.1 42.7 42.7 42.7h298.7c23.5 0 42.7-19.1 42.7-42.7V42.7C456 19.1 436.9 0 413.4 0m-192 469.3L242.7 320h42.7l21.3 149.3zM328 128h-64v42.7h64v42.7h-64V256h64v42.7h-64V256h-64v-42.7h64v-42.7h-64V128h64V85.3h-64V42.7h64v42.7h64zm-74.6 277.3L242.7 448h42.7l-10.7-42.7z"/></svg>,
      DOC: <svg className="w-7 h-fit" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#333333" d="M4 4a2 2 0 0 1 2-2h8a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm13.586 4L14 4.414V8zM12 4H6v16h12V10h-5a1 1 0 0 1-1-1zm-4 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"/></svg>,
      FIG: <svg className="w-7 h-fit" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 50 50"><path fill="#333333" d="M21.211 6C8.579 6 1 16.133 1 21.2s2.526 8.867 7.579 8.867s7.58 1.266 7.58 5.066c0 5.066 3.789 8.866 8.842 8.866c16.422 0 24-8.866 24-17.732C49 11.067 36.366 6 21.211 6m-3.158 5.067a3.16 3.16 0 0 1 3.158 3.166c0 1.75-1.414 3.167-3.158 3.167s-3.158-1.418-3.158-3.167a3.16 3.16 0 0 1 3.158-3.166m10.104 0a3.16 3.16 0 0 1 3.158 3.166a3.16 3.16 0 0 1-3.158 3.167A3.16 3.16 0 0 1 25 14.233a3.16 3.16 0 0 1 3.157-3.166m10.106 5.066a3.16 3.16 0 0 1 3.159 3.167a3.16 3.16 0 0 1-3.159 3.166a3.16 3.16 0 0 1-3.157-3.166a3.16 3.16 0 0 1 3.157-3.167M9.211 18.667a3.16 3.16 0 0 1 3.157 3.165c0 1.75-1.414 3.167-3.157 3.167s-3.158-1.418-3.158-3.167a3.16 3.16 0 0 1 3.158-3.165M25 31.333c2.093 0 3.789 1.7 3.789 3.801c0 2.098-1.696 3.799-3.789 3.799s-3.789-1.701-3.789-3.799A3.794 3.794 0 0 1 25 31.333"/></svg>,
      default: <svg className="w-7 h-fit" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#333333" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>
    };
    return icons[fileType] || icons.default;
  };
  const {
    documentsData,
    selectedDocument,
    showReviewModal,
    reviewComment,
    pendingCount,
    setReviewComment,
    openReviewModal,
    closeReviewModal,
    handleReviewSubmit,
    downloadDocument,
  } = useUploadedDocuments();

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="flex items-center mb-6 gap-2">
        <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"/>
        </svg>
        <h2 className="font-semibold text-lg text-gray-800">Documentos subidos</h2>
        <span className="ml-auto bg-lime-100 text-lime-800 text-xs font-medium px-3 py-1 rounded-lg">
          {pendingCount} pendientes
        </span>
      </div>

      <div className="space-y-3">
        {documentsData.map((document) => (
          <div key={document.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0 mt-1">
                {getFileIcon(document.fileType)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate text-sm">
                      {document.fileName}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-6 h-6 bg-gradient-to-br from-lime-300 to-lime-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {document.studentAvatar}
                      </div>
                      <p className="text-xs text-gray-600">
                        {document.name} • {document.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-xl text-xs font-medium ${document.statusColor}`}>
                      {document.statusText}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>📊 {document.fileSize}</span>
                  <span>🗓️ {document.uploadTime}</span>
                  <span>📋 {document.fileType}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => downloadDocument(document)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-md transition-colors duration-200"
                  >
                    Descargar
                  </button>
                  
                  {document.status === 'pending' && (
                    <button
                      onClick={() => openReviewModal(document)}
                      className="bg-lime-600 hover:bg-lime-700 text-white text-xs px-3 py-1.5 rounded-md transition-colors duration-200"
                    >
                      Revisar
                    </button>
                  )}
                  
                  {document.status !== 'pending' && (
                    <button
                      onClick={() => openReviewModal(document)}
                      className="bg-lime-100 hover:bg-lime-200 text-lime-700 text-xs px-3 py-1.5 rounded-md transition-colors duration-200"
                    >
                      Ver comentarios
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showReviewModal && selectedDocument && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-2">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Revisar documento
              </h3>
              <div className="mt-2 text-sm text-gray-600">
                <p><strong>Archivo:</strong> {selectedDocument.fileName}</p>
                <p><strong>Estudiante:</strong> {selectedDocument.name}</p>
                <p><strong>Proyecto:</strong> {selectedDocument.title}</p>
              </div>
            </div>
            
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comentarios de revisión
              </label>
              <textarea
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                placeholder="Escribe tus comentarios sobre el documento..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={closeReviewModal}
                  className="px-4 py-2 bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors rounded-md"
                >
                  Cancelar
                </button>
                
                <button
                  onClick={() => handleReviewSubmit('reject')}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                >
                  Rechazar
                </button>
                
                <button
                  onClick={() => handleReviewSubmit('request-changes')}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition-colors"
                >
                  Solicitar cambios
                </button>
                
                <button
                  onClick={() => handleReviewSubmit('approve')}
                  className="px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded-md transition-colors"
                >
                  Aprobar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadedDocuments;