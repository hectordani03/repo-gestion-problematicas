// apps/mobile/src/styles/components/bottomNav.styles.ts

import { StyleSheet } from 'react-native'
import { ColorPalette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

export const createBottomNavStyles = (palette: ColorPalette) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: spacing.sm,
      borderTopWidth: 1,
      borderTopColor: palette.grayLight,
      backgroundColor: palette.background,
    },
    icon: {
      fontSize: 24,
      color: palette.textSecondary,
    },
  })
