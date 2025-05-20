// apps/mobile/src/styles/components/bottomNav.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

export const BottomNavStyles = StyleSheet.create({
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
