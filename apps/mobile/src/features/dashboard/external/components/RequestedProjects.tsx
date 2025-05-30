// apps/mobile/src/features/dashboards/external/components/RequestedProjects.tsx

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RequestedProjectsStyles as styles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { useRequestedProjects, FilterType } from '../hooks/useRequestedProjects'

const RequestedProjects: React.FC = () => {
  const {
    loading,
    filter,
    setFilter,
    filteredProjects,
    stats,
    getStatusConfig,
    formatDate
  } = useRequestedProjects()

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={palette.primary} />
        <Text style={styles.subtitle}>Cargando proyectos...</Text>
      </View>
    )
  }

  const filterButtons: { key: FilterType; label: string; count?: number }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'pending', label: 'Pendientes', count: stats.pending },
    { key: 'in-progress', label: 'En Progreso', count: stats.inProgress },
    { key: 'completed', label: 'Completados', count: stats.completed },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: palette.surface }}>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <MaterialCommunityIcons 
              name="folder-multiple-outline" 
              size={28} 
              color={palette.text} 
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Proyectos Solicitados</Text>
              <Text style={styles.subtitle}>{stats.total} proyectos totales</Text>
            </View>
          </View>

          {/* Filters */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
            contentContainerStyle={{ paddingHorizontal: 4 }}
          >
            {filterButtons.map((button) => (
              <TouchableOpacity
                key={button.key}
                style={[
                  styles.filterButton,
                  filter === button.key && styles.filterButtonActive
                ]}
                onPress={() => setFilter(button.key)}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.filterButtonText,
                  filter === button.key && styles.filterButtonTextActive
                ]}>
                  {button.label}
                  {button.count !== undefined && ` (${button.count})`}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Projects List */}
          {filteredProjects.length === 0 ? (
            <View style={styles.emptyState}>
              <View style={styles.emptyIcon}>
                <MaterialCommunityIcons 
                  name="folder-outline" 
                  size={32} 
                  color={palette.textSecondary} 
                />
              </View>
              <Text style={styles.emptyText}>No hay proyectos para mostrar</Text>
            </View>
          ) : (
            filteredProjects.map((project) => {
              const statusConfig = getStatusConfig(project.status)
              return (
                <TouchableOpacity 
                  key={project.id} 
                  style={styles.projectItem}
                  activeOpacity={0.7}
                >
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectTitle} numberOfLines={2}>
                      {project.title}
                    </Text>
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: statusConfig.color }
                      ]}
                    />
                  </View>
                  
                  <View style={styles.projectInfo}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.projectType}>{project.projectType}</Text>
                      <Text style={styles.projectDate}>
                        Solicitado: {formatDate(project.requestedDate)}
                      </Text>
                    </View>
                    
                    <View
                      style={[
                        styles.statusBadge,
                        { backgroundColor: statusConfig.bgLight }
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusBadgeText,
                          { color: statusConfig.textColor }
                        ]}
                      >
                        {statusConfig.text}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default RequestedProjects