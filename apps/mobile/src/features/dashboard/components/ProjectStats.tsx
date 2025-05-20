// apps/mobile/src/features/dashboard/components/ProjectStats.tsx

import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ProjectStatsStyles as styles } from '../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../styles'

const stats = [
  { label: 'Miembros Activos',       value: 28, icon: 'account-group' },
  { label: 'Proyectos este Mes',     value: 2,  icon: 'calendar-month' },
  { label: 'Proyectos en Curso',     value: 12, icon: 'progress-clock' },
  { label: 'Proyectos Finalizados',  value: 7,  icon: 'check-circle' },
  { label: 'Tiempo promedio',         value: '6 meses', icon: 'clock-outline' },
]

const ProjectStats: React.FC = () => (
  <View style={styles.container}>
    {stats.map((stat, i) => (
      <View key={i} style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={stat.icon}
            size={24}
            color={palette.primary}
            style={styles.icon}
          />
          <Text style={styles.label}>{stat.label}</Text>
        </View>
        <Text style={styles.value}>{stat.value}</Text>
      </View>
    ))}
  </View>
)

export default ProjectStats
