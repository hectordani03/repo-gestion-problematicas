// apps/mobile/src/features/dashboard/components/Timeline.tsx

import React from 'react'
import { View, Text } from 'react-native'
import { TimelineStyles as styles } from '../../../styles/components/dashboard/dashboardComponents.styles'

const events = [
  { time: 'Hace 19 horas', text: 'Comenzó el sprint de marzo.' },
  { time: 'Hace 22 horas', text: 'Actualizado el board de Jira.' },
  { time: 'Ayer',          text: 'Revisión de código grupal.' },
]

const Timeline: React.FC = () => (
  <View style={styles.container}>
    {events.map((e, i) => (
      <Text key={i} style={{ marginBottom: 8 }}>
        • [{e.time}] {e.text}
      </Text>
    ))}
  </View>
)

export default Timeline
