// apps/mobile/src/features/dashboard/pages/DashboardMain.tsx

import React from 'react'
import { View } from 'react-native'
import DashboardTabs from './DashboardTabs'
import { useThemedStyles } from '../../../../hooks/useThemedStyles'
import { createDashboardMainStyles } from '../../../../styles/screens/DashboardMain.styles'

export default function DashboardMain() {
  const styles = useThemedStyles(createDashboardMainStyles)

  return (
    <View style={styles.container}>
      <DashboardTabs />
    </View>
  )
}
