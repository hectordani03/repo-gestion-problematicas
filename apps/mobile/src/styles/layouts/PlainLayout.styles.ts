// apps/mobile/src/styles/layouts/PlainLayout.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../theme/colors'
import { spacing } from '../theme/spacing'

export const PlainLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background, // '#FFFFFF'
  },
  content: {
    flex: 1,
    padding: spacing.md,                 // 16
  },
})
