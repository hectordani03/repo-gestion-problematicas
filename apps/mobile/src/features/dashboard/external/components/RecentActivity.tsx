// apps/mobile/src/features/dashboards/external/components/RecentActivity.tsx

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RecentActivityStyles as styles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { useRecentActivity } from '../hooks/useRecentActivity'
import { RecentActivityUtils } from '../utils/RecentActivityUtils'

const RecentActivity: React.FC = () => {
  const { activities, loading, error, refreshActivities } = useRecentActivity()

  if (loading) {
    return (
      <View style={[styles.container, { margin: 16 }]}>
        <View style={styles.header}>
          <MaterialCommunityIcons 
            name="clock-outline" 
            size={28} 
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Actividad Reciente</Text>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 32 }}>
          <ActivityIndicator size="large" color={palette.primary} />
          <Text style={[styles.emptyText, { marginTop: 12 }]}>Cargando actividades...</Text>
        </View>
      </View>
    )
  }

  if (error) {
    return (
      <View style={{ flex: 1, backgroundColor: palette.surface }}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <MaterialCommunityIcons 
                name="clock-outline" 
                size={28} 
                style={styles.headerIcon}
              />
              <Text style={styles.headerTitle}>Actividad Reciente</Text>
            </View>
            
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
                onPress={refreshActivities}
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
          <View style={styles.header}>
            <MaterialCommunityIcons 
              name="clock-outline" 
              size={28} 
              style={styles.headerIcon}
            />
            <Text style={styles.headerTitle}>Actividad Reciente</Text>
          </View>

          {activities.length === 0 ? (
            <View style={styles.emptyState}>
              <View style={styles.emptyIcon}>
                <MaterialCommunityIcons 
                  name="clock-outline" 
                  size={32} 
                  color={palette.textSecondary}
                />
              </View>
              <Text style={styles.emptyText}>No hay actividad reciente</Text>
            </View>
          ) : (
            <View style={{ marginTop: 8 }}>
              {activities.map((activity, index) => {
                const activityColor = RecentActivityUtils.getActivityColor(activity.type)
                return (
                  <TouchableOpacity 
                    key={activity.id} 
                    style={[
                      styles.activityItem,
                      { marginBottom: index < activities.length - 1 ? 12 : 0 }
                    ]}
                    activeOpacity={0.7}
                  >
                    <View style={[styles.avatar, styles.avatarGradient]}>
                      <Text style={styles.avatarText}>{activity.avatar}</Text>
                    </View>

                    <View style={styles.activityContent}>
                      <Text style={styles.activityText}>
                        <Text style={styles.userName}>{activity.name}</Text>
                        <Text> {activity.action} </Text>
                        <Text style={styles.targetText}>'{activity.target}'</Text>
                        {activity.project && activity.target !== activity.project && (
                          <Text style={styles.projectText}> en {activity.project}</Text>
                        )}
                      </Text>
                      
                      <View style={styles.activityMeta}>
                        <View 
                          style={[
                            styles.activityIcon,
                            { backgroundColor: activityColor.bg }
                          ]}
                        >
                          <MaterialCommunityIcons 
                            name={RecentActivityUtils.getActivityIcon(activity.type) as any}
                            size={14}
                            color={activityColor.text}
                          />
                        </View>
                        <Text style={styles.timeAgo}>
                          {RecentActivityUtils.getTimeAgo(activity.timestamp)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
          )}

          {activities.length > 0 && (
            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.footerText}>Ver toda la actividad</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default RecentActivity