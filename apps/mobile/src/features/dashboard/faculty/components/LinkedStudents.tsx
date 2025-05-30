// apps/mobile/src/features/dashboards/faculty/components/LinkedStudents.tsx

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Modal, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinkedStudentsStyles as styles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { useLinkedStudents } from '../hooks/useLinkedStudents'

const LinkedStudents: React.FC = () => {
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
  } = useLinkedStudents()

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
              name="account-group" 
              size={28} 
              color={palette.text}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.title}>Estudiantes vinculados</Text>
              <Text style={styles.subtitle}>
                {studentsData.length} estudiante{studentsData.length !== 1 ? 's' : ''}
              </Text>
            </View>
          </View>

          {/* Students List */}
          <View style={{ marginTop: 16 }}>
            {studentsData.map((student) => (
              <View key={student.id} style={styles.studentItem}>
                {/* Student Info */}
                <View style={styles.studentHeader}>
                  <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>{student.avatar}</Text>
                  </View>
                  
                  <View style={styles.studentInfo}>
                    <Text style={styles.studentName} numberOfLines={1}>
                      {student.name}
                    </Text>
                    <Text style={styles.studentProject} numberOfLines={1}>
                      {student.title}
                    </Text>
                    
                    <View style={styles.statusContainer}>
                      <View style={[styles.statusBadge, { backgroundColor: getStatusBgColor(student.statusColor) }]}>
                        <Text style={[styles.statusText, { color: getStatusTextColor(student.statusColor) }]}>
                          {student.status}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressSection}>
                  <View style={styles.progressHeader}>
                    <Text style={styles.progressLabel}>Progreso del proyecto</Text>
                    <Text style={styles.progressValue}>{student.progress}%</Text>
                  </View>
                  
                  <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarBg}>
                      <View 
                        style={[
                          styles.progressBarFill,
                          { width: `${student.progress}%` }
                        ]}
                      />
                    </View>
                  </View>
                </View>

                {/* Footer */}
                <View style={styles.studentFooter}>
                  <Text style={styles.lastActivity}>{student.lastActivity}</Text>
                  <TouchableOpacity
                    style={styles.commentButton}
                    onPress={() => openCommentModal(student)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.commentButtonText}>Enviar comentario</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Comment Modal */}
      <Modal
        visible={showCommentModal}
        transparent={true}
        animationType="fade"
        onRequestClose={closeCommentModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Comentario para {selectedStudent?.name}
              </Text>
              <Text style={styles.modalSubtitle}>{selectedStudent?.title}</Text>
            </View>
            
            <View style={styles.modalContent}>
              <Text style={styles.textareaLabel}>Comentario</Text>
              <View style={styles.textareaContainer}>
                <TextInput
                  value={comment}
                  onChangeText={setComment}
                  placeholder="Escribe tu comentario o calificación parcial..."
                  placeholderTextColor={palette.textSecondary}
                  multiline={true}
                  numberOfLines={4}
                  style={styles.textarea}
                  editable={!loading}
                />
              </View>
            </View>
            
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={closeCommentModal}
                disabled={loading}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.sendButton,
                  (!comment.trim() || loading) && styles.sendButtonDisabled
                ]}
                onPress={handleSendComment}
                disabled={!comment.trim() || loading}
                activeOpacity={0.7}
              >
                {loading && (
                  <ActivityIndicator 
                    size="small" 
                    color="white" 
                    style={{ marginRight: 8 }}
                  />
                )}
                <Text style={styles.sendButtonText}>
                  {loading ? 'Enviando...' : 'Enviar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

// Helper functions for status colors
const getStatusBgColor = (statusColor: string) => {
  if (statusColor.includes('blue')) return '#EBF8FF'
  if (statusColor.includes('red')) return '#FED7D7'
  if (statusColor.includes('yellow')) return '#FEFCBF'
  if (statusColor.includes('green')) return '#C6F6D5'
  return '#F7FAFC'
}

const getStatusTextColor = (statusColor: string) => {
  if (statusColor.includes('blue')) return '#2B6CB0'
  if (statusColor.includes('red')) return '#C53030'
  if (statusColor.includes('yellow')) return '#B7791F'
  if (statusColor.includes('green')) return '#2F855A'
  return '#4A5568'
}

export default LinkedStudents