import { useState } from "react";

const getStudentAvatar = (document: any) => {
  if (!document?.name) return '';
  const names = document.name.split(' ');
  const firstName = names[0] || '';
  const lastName = names[names.length - 1] || '';
  const firstInitial = firstName[0] ? firstName[0].toUpperCase() : '';
  const lastInitial = lastName[0] ? lastName[0].toUpperCase() : '';
  return names.length > 1 ? firstInitial + lastInitial : firstInitial;
};

export const useUploadedDocuments = () => {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewComment, setReviewComment] = useState("");

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
    }
  ].map(doc => ({
    ...doc,
    studentAvatar: getStudentAvatar(doc)
  }));

  const openReviewModal = (document: any) => {
    setSelectedDocument(document);
    setShowReviewModal(true);
    setReviewComment("");
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
    setSelectedDocument(null);
    setReviewComment("");
  };

  const handleReviewSubmit = async (action: string) => {
    if (!selectedDocument) return;

    const reviewData = {
      documentId: selectedDocument.id,
      comment: reviewComment,
      action: action
    };

    try {
      console.log(`${action} documento:`, reviewData);
      closeReviewModal();
    } catch (error) {
      console.error('Error al revisar documento:', error);
    }
  };

  const downloadDocument = async (document: any) => {
    try {
      console.log(`Descargando: ${document.fileName}`);
    } catch (error) {
      console.error('Error al descargar documento:', error);
    }
  };

  const pendingCount = documentsData.filter(doc => doc.status === 'pending').length;

  return {
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
  };
};