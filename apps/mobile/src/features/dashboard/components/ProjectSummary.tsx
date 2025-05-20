// apps/mobile/src/features/dashboard/components/ProjectSummary.tsx

import React from 'react'
import { View, Text } from 'react-native'
import { ProjectSummaryStyles as styles } from '../../../styles/components/dashboard/dashboardComponents.styles'

const data = [
  { label: 'Solicitados',  color: '#3B82F6', count: 6 },   
  { label: 'En curso',     color: '#FBBF24', count: 8 },   
  { label: 'Finalizados',  color: '#10B981', count: 5 },   
  { label: 'Pendientes',   color: '#EF4444', count: 3 },  
]

const ProjectSummary: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Resumen de proyectos</Text>
    </View>
    {data.map((item, i) => (
      <View key={i} style={styles.item}>
        <Text style={styles.title}>{item.label}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={[
              styles.bar,
              { backgroundColor: item.color, flex: item.count },
            ]}
          />
          <Text style={styles.count}>{item.count}</Text>
        </View>
      </View>
    ))}
  </View>
)

export default ProjectSummary
