// apps/mobile/src/features/dashboards/external/pages/DashboardTabs.tsx

import React from 'react'
import { useWindowDimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useThemedStyles, useThemedPalette } from '../../../../hooks/useThemedStyles'
import { createDashboardTabsStyles } from '../../../../styles/components/dashboard/DashboardTabs.styles'

// Componentes de External Dashboard
import ExternalProjectStats from '../components/ExternalProjectStats'
import RequestedProjects from '../components/RequestedProjects'
import RecentActivity from '../components/RecentActivity'
import ProjectSummary from '../components/ProjectSummary'
import RecentProjects from '../../faculty/components/RecentProjects'

type TabParamList = {
  Estadísticas: undefined
  Solicitudes: undefined
  Recientes: undefined
  Actividad: undefined
  Resumen: undefined
}

const Tab = createMaterialTopTabNavigator<TabParamList>()

const DashboardTabs: React.FC = () => {
  const layout = useWindowDimensions()
  const styles = useThemedStyles(createDashboardTabsStyles)
  const palette = useThemedPalette()

  return (
    <Tab.Navigator
      initialRouteName="Estadísticas"
      screenOptions={{
        swipeEnabled: true,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.textSecondary,
        tabBarPressColor: palette.primary + '20', // 20% opacity
      }}
    >
      <Tab.Screen
        name="Estadísticas"
        component={ExternalProjectStats}
        options={{
          tabBarLabel: 'Inicio',
          tabBarAccessibilityLabel: 'Ver estadísticas del panel'
        }}
      />

      <Tab.Screen
        name="Solicitudes"
        component={RequestedProjects}
        options={{
          tabBarLabel: 'Solicitudes',
          tabBarAccessibilityLabel: 'Ver proyectos solicitados'
        }}
      />

      <Tab.Screen
        name="Recientes"
        component={RecentProjects}
        options={{
          tabBarLabel: 'Proyectos Recientes',
          tabBarAccessibilityLabel: 'Ver proyectos recientes'
        }}
      />

      <Tab.Screen
        name="Actividad"
        component={RecentActivity}
        options={{
          tabBarLabel: 'Actividad',
          tabBarAccessibilityLabel: 'Ver actividad reciente'
        }}
      />

      <Tab.Screen
        name="Resumen"
        component={ProjectSummary}
        options={{
          tabBarLabel: 'Resumen',
          tabBarAccessibilityLabel: 'Ver resumen de proyectos'
        }}
      />
    </Tab.Navigator>
  )
}

export default DashboardTabs
