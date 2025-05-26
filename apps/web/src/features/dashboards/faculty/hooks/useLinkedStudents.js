import { useState } from "react";

const generateStudentAvatar = (student) => {
  if (!student?.name) return '';
  const names = student.name.split(' ');
  const firstName = names[0] || '';
  const lastName = names[names.length - 1] || '';
  const firstInitial = firstName[0] ? firstName[0].toUpperCase() : '';
  const lastInitial = lastName[0] ? lastName[0].toUpperCase() : '';
  return names.length > 1 ? firstInitial + lastInitial : firstInitial;
};

export const useLinkedStudents = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [comment, setComment] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Datos ejemplo
  const studentsData = [
    {
      id: 1,
      name: "Ana García",
      title: "Sistema de Gestión",
      progress: 85,
      status: "En progreso",
      statusColor: "bg-blue-100 text-blue-800",
      lastActivity: "Hace 2 días"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      title: "App Móvil",
      progress: 92,
      status: "Por completar",
      statusColor: "bg-red-100 text-red-800",
      lastActivity: "Hace 1 día"
    },
    {
      id: 3,
      name: "María López",
      title: "Dashboard Analytics",
      progress: 65,
      status: "En desarrollo",
      statusColor: "bg-yellow-100 text-yellow-800",
      lastActivity: "Hace 3 días"
    },
    {
      id: 4,
      name: "Diego Ruiz",
      title: "API REST",
      progress: 40,
      status: "Iniciando",
      statusColor: "bg-lime-100 text-green-800",
      lastActivity: "Hace 1 semana"
    }
  ].map(student => ({
    ...student,
    avatar: generateStudentAvatar(student)
  }));

  const openCommentModal = (student) => {
    setSelectedStudent(student);
    setShowCommentModal(true);
  };

  const closeCommentModal = () => {
    setShowCommentModal(false);
    setSelectedStudent(null);
    setComment("");
  };

  // Función que envia comentario, para conectarse con el back
  const handleSendComment = async () => {
    if (!comment.trim() || !selectedStudent) return;

    setLoading(true);
    
    try {
      // TODO: Reemplazar con llamada real al backend
      // const response = await commentService.sendComment(selectedStudent.id, comment);
      
      // Simula una llamada al backend
      console.log(`Comentario para ${selectedStudent.name}: ${comment}`);
      
      // Simula delay del backend
      await new Promise(resolve => setTimeout(resolve, 500));
      
      closeCommentModal();
      
      // TODO: Aquí podrías mandar una notificación de éxito
      
    } catch (error) {
      console.error('Error sending comment:', error);
    } finally {
      setLoading(false);
    }
  };

  // Obtener estudiantes
  const fetchStudents = async () => {
    setLoading(true);
    try {
      // TODO: Reemplazar con llamada real al backend
      // const response = await studentsService.getLinkedStudents();
      // return response.data;
      
      return studentsData.map(student => ({
        ...student,
        // Regenerar avatar por si hubiera cambios
        avatar: generateStudentAvatar(student)
      }));
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    // Estados
    selectedStudent,
    comment,
    showCommentModal,
    loading,
    studentsData, // Temporal, se quitará cuando haya datos backend
    
    // Funciones
    setComment,
    openCommentModal,
    closeCommentModal,
    handleSendComment,
    fetchStudents
  };
};