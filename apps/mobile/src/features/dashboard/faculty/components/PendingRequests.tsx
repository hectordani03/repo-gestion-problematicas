// apps/mobile/src/features/dashboards/faculty/components/PendingRequests.tsx

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { PendingRequestsStyles as styles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { usePendingRequests } from '../hooks/usePendingRequests'

const PendingRequests: React.FC = () => {
  const {
    loading,
    error,
    requestsData,
    statusConfig,
    priorityConfig,
    formatDate,
    getStatistics
  } = usePendingRequests()

  const stats = getStatistics()

  if (error) {
    return (
      <View style={{ flex: 1, backgroundColor: palette.surface }}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View style={styles.container}>
            <View style={styles.errorState}>
              <View style={styles.errorIcon}>
                <MaterialCommunityIcons 
                  name="alert-circle-outline" 
                  size={32} 
                  color={palette.errorText}
                />
              </View>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity 
                style={styles.retryButton}
                onPress={() => window.location.reload()}
                activeOpacity={0.7}
              >
                <Text style={styles.retryButtonText}>Intentar de nuevo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
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
              name="magnify" 
              size={28} 
              color={palette.text}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.title}>Solicitudes por revisar</Text>
              <Text style={styles.subtitle}>
                {stats.total} proyecto{stats.total !== 1 ? 's' : ''} pendiente{stats.total !== 1 ? 's' : ''}
              </Text>
            </View>
            
            {loading && (
              <ActivityIndicator 
                size="small" 
                color={palette.primary}
                style={{ marginLeft: 12 }}
              />
            )}
          </View>

          {/* Requests List */}
          <View style={{ marginTop: 16 }}>
            {loading && requestsData.length === 0 ? (
              // Skeleton loading
              <View>
                {[...Array(3)].map((_, idx) => (
                  <View key={idx} style={styles.skeletonItem}>
                    <View style={styles.skeletonContent}>
                      <View style={styles.skeletonDot} />
                      <View style={{ flex: 1, marginLeft: 12 }}>
                        <View style={styles.skeletonTitle} />
                        <View style={styles.skeletonSubtitle} />
                      </View>
                      <View style={styles.skeletonBadge} />
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              requestsData.map((request, idx) => (
                <TouchableOpacity 
                  key={request.id || idx} 
                  style={[
                    styles.requestItem,
                    { marginBottom: idx < requestsData.length - 1 ? 12 : 0 }
                  ]}
                  activeOpacity={0.7}
                >
                  <View style={styles.requestContent}>
                    {/* Status Dot */}
                    <View style={styles.statusDot} />
                    
                    {/* Request Info */}
                    <View style={styles.requestInfo}>
                      <Text style={styles.requestTitle} numberOfLines={2}>
                        {request.title}
                      </Text>
                      <Text style={styles.requestCompany} numberOfLines={1}>
                        {request.company}
                      </Text>
                    </View>
                    
                    {/* Right Section */}
                    <View style={styles.requestRight}>
                      {/* Priority Badge */}
                      <View style={[styles.priorityBadge, { backgroundColor: getPriorityBgColor(request.priority) }]}>
                        <Text style={[styles.priorityText, { color: getPriorityTextColor(request.priority) }]}>
                          {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                        </Text>
                      </View>
                      
                      {/* Status and Date */}
                      <View style={styles.statusSection}>
                        <Text style={[styles.statusText, { color: statusConfig[request.status].textColor }]}>
                          {statusConfig[request.status].text}
                        </Text>
                        <Text style={styles.dateText}>
                          {formatDate(request.sendDate)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
            
            {!loading && requestsData.length === 0 && (
              <View style={styles.emptyState}>
                <View style={styles.emptyIcon}>
                  <MaterialCommunityIcons 
                    name="folder-outline" 
                    size={32} 
                    color={palette.textSecondary}
                  />
                </View>
                <Text style={styles.emptyText}>No hay solicitudes pendientes</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

// Helper functions for priority colors
const getPriorityBgColor = (priority: string) => {
  switch (priority) {
    case 'alta': return '#FED7D7'
    case 'media': return '#FEFCBF'
    case 'baja': return '#C6F6D5'
    default: return '#F7FAFC'
  }
}

const getPriorityTextColor = (priority: string) => {
  switch (priority) {
    case 'alta': return '#C53030'
    case 'media': return '#B7791F'
    case 'baja': return '#2F855A'
    default: return '#4A5568'
  }
}

export default PendingRequests