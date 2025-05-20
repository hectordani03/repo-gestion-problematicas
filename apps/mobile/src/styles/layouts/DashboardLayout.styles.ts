// apps/mobile/src/styles/layouts/DashboardLayout.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../theme/colors'
import { spacing } from '../theme/spacing'

export const DashboardLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background, // '#FFFFFF'
  },
  content: {
    flex: 1,
  },
})
