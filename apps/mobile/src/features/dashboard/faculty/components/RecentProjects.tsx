// apps/mobile/src/features/dashboards/faculty/components/RecentProjects.tsx

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useThemedStyles, useThemedPalette } from '../../../../hooks/useThemedStyles'
import { createRecentProjectStyles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { useRecentProjects } from '../hooks/useRecentProjects'

const RecentProjects: React.FC = () => {
    const styles = useThemedStyles(createRecentProjectStyles)
    const palette = useThemedPalette()
  const { 
    proyectosAsignados, 
   // estadoConfig, 
    formatearFecha, 
    calcularDiasTranscurridos, 
    getInitials 
  } = useRecentProjects()

  const handleProjectAction = (action: string, project: any) => {
    console.log(`${action} para proyecto:`, project.nombre)
    // TODO: Implementar navegación o acciones específicas
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
              name="folder-clock-outline" 
              size={28} 
              color={palette.text}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.title}>Proyectos recientes</Text>
              <Text style={styles.subtitle}>
                {proyectosAsignados.length} proyecto{proyectosAsignados.length !== 1 ? 's' : ''} asignado{proyectosAsignados.length !== 1 ? 's' : ''}
              </Text>
            </View>
          </View>

          {/* Projects List */}
          <View style={{ marginTop: 16 }}>
            {proyectosAsignados.map((proyecto) => (
              <View key={proyecto.id} style={styles.projectItem}>
                {/* Students Section - MODIFICADO */}
                <View style={styles.studentsSection}>
                  {/* Mostrar máximo 3 estudiantes con sus nombres alineados */}
                  <View style={styles.studentsListContainer}>
                    {proyecto.estudiantes.slice(0, 3).map((estudiante, idx) => (
                      <View key={idx} style={styles.studentRow}>
                        <View style={styles.studentAvatar}>
                          <Text style={styles.studentAvatarText}>
                            {getInitials(estudiante.nombre)}
                          </Text>
                        </View>
                        <Text style={styles.studentName} numberOfLines={1}>
                          {estudiante.nombre}
                        </Text>
                      </View>
                    ))}
                    
                    {/* Indicador de estudiantes adicionales */}
                    {proyecto.estudiantes.length > 3 && (
                      <View style={styles.studentRow}>
                        <View style={styles.moreStudentsIndicator}>
                          <Text style={styles.moreStudentsText}>
                            +{proyecto.estudiantes.length - 3}
                          </Text>
                        </View>
                        <Text style={styles.moreStudentsLabel}>
                          estudiantes más
                        </Text>
                      </View>
                    )}
                  </View>
                  
                  {/* Contador total de estudiantes */}
                  {proyecto.estudiantes.length > 1 && (
                    <View style={styles.studentsCount}>
                      <Text style={styles.studentsCountText}>
                        {proyecto.estudiantes.length} estudiantes en total
                      </Text>
                    </View>
                  )}
                </View>

                {/* Project Info */}
                <View style={styles.projectInfo}>
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectTitle} numberOfLines={2}>
                      {proyecto.nombre}
                    </Text>
                    
                    <View style={[
                      styles.statusBadge, 
                      { backgroundColor: getStatusBgColor(proyecto.estado) }
                    ]}>
                      <View style={[
                        styles.statusDot, 
                        { backgroundColor: getStatusDotColor(proyecto.estado) }
                      ]} />
                      <Text style={[
                        styles.statusText, 
                        { color: getStatusTextColor(proyecto.estado) }
                      ]}>
                        {proyecto.estado}
                      </Text>
                    </View>
                  </View>
                  
                  <Text style={styles.projectDescription} numberOfLines={2}>
                    {proyecto.descripcion}
                  </Text>
                  
                  <Text style={styles.projectCompany}>
                    <Text style={styles.companyLabel}>Empresa: </Text>
                    {proyecto.empresa}
                  </Text>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressSection}>
                  <View style={styles.progressHeader}>
                    <Text style={styles.progressLabel}>Progreso</Text>
                    <Text style={styles.progressValue}>{proyecto.progreso}%</Text>
                  </View>
                  
                  <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarBg}>
                      <View 
                        style={[
                          styles.progressBarFill,
                          { width: `${proyecto.progreso}%` }
                        ]}
                      />
                    </View>
                  </View>
                </View>

                {/* Project Meta */}
                <View style={styles.projectMeta}>
                  <Text style={styles.metaText}>
                    📅 Asignado: {formatearFecha(proyecto.fechaAsignacion)}
                  </Text>
                  <Text style={styles.metaText}>
                    ⏱️ Última actividad: {calcularDiasTranscurridos(proyecto.ultimaActividad)}
                  </Text>
                  <Text style={styles.metaText}>
                    💬 {proyecto.comentarios} comentarios • 📋 {proyecto.entregables} entregables
                  </Text>
                </View>

                {/* Action Buttons */}
                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  style={styles.actionsContainer}
                  contentContainerStyle={{ paddingHorizontal: 4 }}
                >
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.detailsButton]}
                    onPress={() => handleProjectAction('ver-detalles', proyecto)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.contactButton]}
                    onPress={() => handleProjectAction('contactar', proyecto)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.contactButtonText}>
                      Contactar estudiante{proyecto.estudiantes.length > 1 ? 's' : ''}
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.commentButton]}
                    onPress={() => handleProjectAction('comentario', proyecto)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.commentButtonText}>Subir comentario</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.deliverablesButton]}
                    onPress={() => handleProjectAction('entregables', proyecto)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.deliverablesButtonText}>Revisar entregables</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

// Helper functions for status colors
const getStatusBgColor = (estado: string) => {
  switch (estado) {
    case 'En progreso': return '#EBF8FF'
    case 'Revisión': return '#FEFCBF'
    case 'Completado': return '#C6F6D5'
    case 'Pausado': return '#FED7D7'
    default: return '#F7FAFC'
  }
}

const getStatusDotColor = (estado: string) => {
  switch (estado) {
    case 'En progreso': return '#3182CE'
    case 'Revisión': return '#D69E2E'
    case 'Completado': return '#38A169'
    case 'Pausado': return '#E53E3E'
    default: return '#A0AEC0'
  }
}

const getStatusTextColor = (estado: string) => {
  switch (estado) {
    case 'En progreso': return '#2B6CB0'
    case 'Revisión': return '#B7791F'
    case 'Completado': return '#2F855A'
    case 'Pausado': return '#C53030'
    default: return '#4A5568'
  }
}

export default RecentProjects