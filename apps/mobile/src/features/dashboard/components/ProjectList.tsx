// apps/mobile/src/features/dashboard/components/ProjectList.tsx

import React from 'react'
import { View, Text } from 'react-native'
import { ProjectListStyles as styles } from '../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../styles'

const items = [
  { name: 'Growth | Web Page', status: 'in-progress' },
  { name: 'Landing Redesign',     status: 'done' },
  { name: 'API Integration',      status: 'pending' },
  { name: 'Mobile Wrapper',       status: 'in-progress' },
]

const statusColors: Record<string, string> = {
  'in-progress': '#FBBF24',  
  done:          '#10B981',  
  pending:       palette.error,
}

const ProjectList: React.FC = () => (
  <View style={styles.container}>
    {items.map((item, i) => (
      <View key={i}>
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: statusColors[item.status] },
            ]}
          />
        </View>
        {i < items.length - 1 && <View style={styles.separator} />}
      </View>
    ))}
  </View>
)

export default ProjectList
