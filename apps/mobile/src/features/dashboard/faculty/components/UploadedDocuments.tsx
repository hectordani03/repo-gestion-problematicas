// apps/mobile/src/features/dashboards/faculty/components/UploadedDocuments.tsx

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { UploadedDocumentsStyles as styles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { useUploadedDocuments } from '../hooks/useUploadedDocuments'

const UploadedDocuments: React.FC = () => {
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
  } = useUploadedDocuments()

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'PDF':
        return 'file-pdf-box'
      case 'ZIP':
        return 'folder-zip'
      case 'DOC':
        return 'file-document'
      case 'FIG':
        return 'file-image'
      default:
        return 'file'
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: palette.surface }}>
      <ScrollView 
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <MaterialCommunityIcons 
              name="folder-upload" 
              size={28} 
              color={palette.text}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.title}>Documentos subidos</Text>
              <Text style={styles.subtitle}>
                {pendingCount} pendiente{pendingCount !== 1 ? 's' : ''}
              </Text>
            </View>
          </View>

          {/* Documents List */}
          <View style={{ marginTop: 16 }}>
            {documentsData.map((document) => (
              <View key={document.id} style={styles.documentItem}>
                {/* Document Header */}
                <View style={styles.documentHeader}>
                  <View style={styles.fileIconContainer}>
                    <MaterialCommunityIcons 
                      name={getFileIcon(document.fileType) as any}
                      size={32}
                      color={palette.primary}
                    />
                  </View>
                  
                  <View style={styles.documentInfo}>
                    <Text style={styles.fileName} numberOfLines={2}>
                      {document.fileName}
                    </Text>
                    
                    <View style={styles.studentInfo}>
                      <View style={styles.studentAvatar}>
                        <Text style={styles.studentAvatarText}>
                          {document.studentAvatar}
                        </Text>
                      </View>
                      <Text style={styles.studentDetails} numberOfLines={1}>
                        {document.name} • {document.title}
                      </Text>
                    </View>
                  </View>
                  
                  <View style={[
                    styles.statusBadge, 
                    { backgroundColor: getStatusBgColor(document.status) }
                  ]}>
                    <Text style={[
                      styles.statusText, 
                      { color: getStatusTextColor(document.status) }
                    ]}>
                      {document.statusText}
                    </Text>
                  </View>
                </View>

                {/* Document Meta */}
                <View style={styles.documentMeta}>
                  <Text style={styles.metaText}>📊 {document.fileSize}</Text>
                  <Text style={styles.metaText}>🗓️ {document.uploadTime}</Text>
                  <Text style={styles.metaText}>📋 {document.fileType}</Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionsContainer}>
                  <TouchableOpacity
                    style={styles.downloadButton}
                    onPress={() => downloadDocument(document)}
                    activeOpacity={0.7}
                  >
                    <MaterialCommunityIcons 
                      name="download" 
                      size={16} 
                      color={palette.textSecondary}
                      style={{ marginRight: 4 }}
                    />
                    <Text style={styles.downloadButtonText}>Descargar</Text>
                  </TouchableOpacity>
                  
                  {document.status === 'pending' ? (
                    <TouchableOpacity
                      style={styles.reviewButton}
                      onPress={() => openReviewModal(document)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.reviewButtonText}>Revisar</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.commentsButton}
                      onPress={() => openReviewModal(document)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.commentsButtonText}>Ver comentarios</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Review Modal */}
      <Modal
        visible={showReviewModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeReviewModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Revisar documento</Text>
              <TouchableOpacity
                onPress={closeReviewModal}
                style={styles.closeButton}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons 
                  name="close" 
                  size={24} 
                  color={palette.textSecondary}
                />
              </TouchableOpacity>
            </View>
            
            {/* Document Info */}
            {selectedDocument && (
              <View style={styles.documentDetailsSection}>
                <Text style={styles.documentDetailLabel}>Archivo:</Text>
                <Text style={styles.documentDetailValue}>{selectedDocument.fileName}</Text>
                
                <Text style={styles.documentDetailLabel}>Estudiante:</Text>
                <Text style={styles.documentDetailValue}>{selectedDocument.name}</Text>
                
                <Text style={styles.documentDetailLabel}>Proyecto:</Text>
                <Text style={styles.documentDetailValue}>{selectedDocument.title}</Text>
              </View>
            )}
            
            {/* Comment Section */}
            <View style={styles.commentSection}>
              <Text style={styles.commentLabel}>Comentarios de revisión</Text>
              <View style={styles.textareaContainer}>
                <TextInput
                  value={reviewComment}
                  onChangeText={setReviewComment}
                  placeholder="Escribe tus comentarios sobre el documento..."
                  placeholderTextColor={palette.textSecondary}
                  multiline={true}
                  numberOfLines={4}
                  style={styles.textarea}
                />
              </View>
            </View>
            
            {/* Action Buttons */}
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.rejectButton}
                onPress={() => handleReviewSubmit('reject')}
                activeOpacity={0.7}
              >
                <Text style={styles.rejectButtonText}>Rechazar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.changesButton}
                onPress={() => handleReviewSubmit('request-changes')}
                activeOpacity={0.7}
              >
                <Text style={styles.changesButtonText}>Solicitar cambios</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.approveButton}
                onPress={() => handleReviewSubmit('approve')}
                activeOpacity={0.7}
              >
                <Text style={styles.approveButtonText}>Aprobar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

// Helper functions for status colors
const getStatusBgColor = (status: string) => {
  switch (status) {
    case 'pending': return '#FEFCBF'
    case 'approved': return '#C6F6D5'
    case 'rejected': return '#FED7D7'
    case 'reviewed': return '#EBF8FF'
    default: return '#F7FAFC'
  }
}

const getStatusTextColor = (status: string) => {
  switch (status) {
    case 'pending': return '#B7791F'
    case 'approved': return '#2F855A'
    case 'rejected': return '#C53030'
    case 'reviewed': return '#2B6CB0'
    default: return '#4A5568'
  }
}

export default UploadedDocuments