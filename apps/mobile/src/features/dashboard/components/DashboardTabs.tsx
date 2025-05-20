// apps/mobile/src/features/dashboard/components/DashboardTabs.tsx

import React from 'react'
import { useWindowDimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ProjectStats     from './ProjectStats'
import RecentProjects   from './RecentProjects'
import RecentActivity   from './RecentActivity'
import ProjectSummary   from './ProjectSummary'
import Timeline         from './Timeline'


import { palette } from '../../../styles'
import { DashboardTabsStyles as styles } from '../../../styles/components/dashboard/DashboardTabs.styles'
import ProjectList from './ProjectList'

type TabParamList = {
  Stats:       undefined
  Recientes:   undefined
  Actividad:   undefined
  Resumen:     undefined
  Cambios:     undefined
}

const Tab = createMaterialTopTabNavigator<TabParamList>()

export default function DashboardTabs() {
  const layout = useWindowDimensions()
  return (
    <Tab.Navigator
      initialRouteName="Stats"
      screenOptions={{
        swipeEnabled: true,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar,
      }}
      sceneContainerStyle={{ backgroundColor: palette.background }}
    >
      <Tab.Screen 
        name="Stats" 
        component={ProjectList} 
        options={{ tabBarLabel: 'Proyectos solicitados' }} 
      />
      <Tab.Screen 
        name="Recientes" 
        component={RecentProjects} 
        options={{ tabBarLabel: 'Proyectos recientes' }} 
      />
      <Tab.Screen 
        name="Actividad" 
        component={RecentActivity} 
        options={{ tabBarLabel: 'Actividad reciente' }} 
      />
      <Tab.Screen 
        name="Resumen" 
        component={ProjectSummary} 
      />
      <Tab.Screen 
        name="Cambios" 
        component={Timeline} 
        options={{ tabBarLabel: 'Últimos cambios' }} 
      />
    </Tab.Navigator>
  )
}
