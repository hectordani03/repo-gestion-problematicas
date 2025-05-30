// apps/mobile/src/features/dashboard/pages/DashboardMain.tsx

import React from 'react'
import { View } from 'react-native'
import DashboardTabs from './DashboardTabs'
import { DashboardMainStyles as styles } from '../../../../styles'

export default function DashboardMain() {
  return (
    <View style={styles.container}>
      <DashboardTabs />
    </View>
  )
}