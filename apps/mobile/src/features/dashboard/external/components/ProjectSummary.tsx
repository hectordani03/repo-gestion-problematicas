// apps/mobile/src/features/dashboards/external/components/ProjectSummary.tsx

import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ProjectSummaryStyles as styles } from '../../../../styles/components/dashboard/dashboardComponents.styles'
import { palette } from '../../../../styles/theme/colors'
import { useProjectSummary } from '../hooks/useProjectSummary'

const ProjectSummary: React.FC = () => {
  const { data, total } = useProjectSummary()

  const handleItemPress = (item: any) => {
    console.log('Project summary item pressed:', item.label)
    // TODO: Agregar navegación o modal con detalles
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
              name="chart-pie" 
              size={28} 
              color={palette.text}
              style={{ marginRight: 12 }}
            />
            <Text style={styles.title}>Resumen de Proyectos</Text>
          </View>

          <View style={{ marginTop: 8 }}>
            {data.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.item,
                  { marginBottom: index < data.length - 1 ? 4 : 0 }
                ]}
                onPress={() => handleItemPress(item)}
                activeOpacity={0.7}
              >
                <View style={styles.itemLeft}>
                  <View
                    style={[
                      styles.colorDot,
                      { backgroundColor: item.color }
                    ]}
                  />
                  <Text style={styles.itemLabel}>{item.label}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.count}>{item.count}</Text>
                  <MaterialCommunityIcons 
                    name="chevron-right" 
                    size={20} 
                    color={palette.textSecondary}
                    style={{ marginLeft: 8 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total de Proyectos</Text>
            <Text style={styles.totalValue}>{total}</Text>
          </View>

          {/* Progress Bars */}
          <View style={{ marginTop: 24 }}>
            <Text style={[styles.totalLabel, { marginBottom: 16, fontSize: 16 }]}>
              Distribución
            </Text>
            {data.map((item, index) => {
              const percentage = total > 0 ? (item.count / total) * 100 : 0
              return (
                <View key={`bar-${index}`} style={{ marginBottom: 16 }}>
                  <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    marginBottom: 6 
                  }}>
                    <Text style={[styles.itemLabel, { fontSize: 14 }]}>
                      {item.label}
                    </Text>
                    <Text style={[styles.itemLabel, { fontSize: 14 }]}>
                      {percentage.toFixed(1)}%
                    </Text>
                  </View>
                  <View style={{
                    height: 8,
                    backgroundColor: palette.grayLight,
                    borderRadius: 4,
                    overflow: 'hidden'
                  }}>
                    <View style={{
                      height: '100%',
                      width: `${percentage}%`,
                      backgroundColor: item.color,
                      borderRadius: 4,
                    }} />
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProjectSummary