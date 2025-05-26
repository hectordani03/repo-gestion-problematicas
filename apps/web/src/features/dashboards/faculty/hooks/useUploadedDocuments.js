import { useState } from "react";

const getStudentAvatar = (document) => {
  if (!document?.name) return '';
  const names = document.name.split(' ');
  const firstName = names[0] || '';
  const lastName = names[names.length - 1] || '';
  const firstInitial = firstName[0] ? firstName[0].toUpperCase() : '';
  const lastInitial = lastName[0] ? lastName[0].toUpperCase() : '';
  return names.length > 1 ? firstInitial + lastInitial : firstInitial;
};

export const useUploadedDocuments = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewComment, setReviewComment] = useState("");

  // Datos ejemplo
  const documentsData = [
    {
      id: 1,
      fileName: "Diseño-Final-v2.pdf",
      name: "Ana García",
      title: "Sistema de Gestión",
      uploadDate: "2024-01-15",
      fileSize: "2.4 MB",
      fileType: "PDF",
      status: "pending",
      statusText: "Pendiente",
      statusColor: "bg-yellow-100 text-yellow-800",
      uploadTime: "Hace 2 horas"
    },
    {
      id: 2,
      fileName: "Codigo-Fuente.zip",
      name: "Carlos Mendoza",
      title: "App Móvil",
      uploadDate: "2024-01-14",
      fileSize: "15.7 MB",
      fileType: "ZIP",
      status: "approved",
      statusText: "Aprobado",
      statusColor: "bg-lime-100 text-lime-800",
      uploadTime: "Hace 1 día"
    },
    {
      id: 3,
      fileName: "Documentacion-API.docx",
      name: "María López",
      title: "Dashboard Analytics",
      uploadDate: "2024-01-13",
      fileSize: "892 KB",
      fileType: "DOC",
      status: "rejected",
      statusText: "Rechazado",
      statusColor: "bg-red-100 text-red-800",
      uploadTime: "Hace 2 días"
    },
    {
      id: 4,
      fileName: "Prototipo-UI.fig",
      name: "Diego Ruiz",
      title: "API REST",
      uploadDate: "2024-01-12",
      fileSize: "5.1 MB",
      fileType: "FIG",
      status: "reviewed",
      statusText: "En revisión",
      statusColor: "bg-blue-100 text-blue-800",
      uploadTime: "Hace 3 días"
    }
  ].map(doc => ({
    ...doc,
    studentAvatar: getStudentAvatar(doc)
  }));

  

  const openReviewModal = (document) => {
    setSelectedDocument(document);
    setShowReviewModal(true);
    setReviewComment("");
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
    setSelectedDocument(null);
    setReviewComment("");
  };

  // Función para manejar la revisión del documento
  const handleReviewSubmit = async (action) => {
    if (!selectedDocument) return;

    const reviewData = {
      documentId: selectedDocument.id,
      comment: reviewComment,
      action: action
    };

    try {
      // Aquí irá la llamada al backend cuando esté listo
      console.log(`${action} documento:`, reviewData);
      
      // Ejemplo:
      // const response = await reviewDocument(reviewData);
      // if (response.success) { ... }
      
      closeReviewModal();
      
      // Aquí podrías actualizar la lista de documentos si es necesario
      // setDocumentsData(updatedData);
      
    } catch (error) {
      console.error('Error al revisar documento:', error);
    }
  };

  // Función para descargar documento
  const downloadDocument = async (document) => {
    try {
      // Simulación de descarga
      console.log(`Descargando: ${document.fileName}`);
      
      // Ejemplo de funcionalidad de descarga:
      // const response = await downloadDocumentFile(document.id);
      // const blob = new Blob([response.data]);
      // const url = window.URL.createObjectURL(blob);
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = document.fileName;
      // link.click();
      // window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error al descargar documento:', error);
    }
  };


  const pendingCount = documentsData.filter(doc => doc.status === 'pending').length;

  return {
    // Datos
    documentsData,
    selectedDocument,
    showReviewModal,
    reviewComment,
    pendingCount,
    
    // Estados
    setReviewComment,
    
    // Funciones
    openReviewModal,
    closeReviewModal,
    handleReviewSubmit,
    downloadDocument,
  };
};