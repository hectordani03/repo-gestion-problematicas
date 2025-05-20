// apps/mobile/src/features/dashboard/components/RecentActivity.tsx

import React from 'react'
import { View, Text, Image } from 'react-native'
import avatar from '../../../assets/avatar.png'
import { RecentActivityStyles as styles } from '../../../styles/components/dashboard/dashboardComponents.styles'

const updates = [
  { time: 'Hace 19 horas', text: 'Juan subió el informe final.' },
  { time: 'Hace 22 horas', text: 'María revisó el diseño de la home.' },
  { time: 'Ayer',          text: 'Equipo aprobó nueva funcionalidad.' },
]

const RecentActivity: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Actividad reciente</Text>
    <View style={styles.timeline}>
      <View style={styles.line} />
      {updates.map((update, i) => (
        <View key={i} style={styles.update}>
          <View style={styles.dot} />
          <View style={styles.textContainer}>
            <Text style={styles.time}>{update.time}</Text>
            <Text style={styles.text}>{update.text}</Text>
          </View>
        </View>
      ))}
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Ver todos</Text>
    </View>
  </View>
)

export default RecentActivity
