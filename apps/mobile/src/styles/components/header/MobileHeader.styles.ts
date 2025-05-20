// apps/mobile/src/styles/components/header/MobileHeader.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const MobileHeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: spacing.md,      // 16
    paddingVertical: spacing.sm,        // 12
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.background,  // '#FFFFFF'
    borderBottomWidth: 1,
    borderBottomColor: palette.graybtn,  // '#E5E7EB'
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: spacing.xl,    // 32
    height: spacing.xl,   // 32
    marginRight: spacing.xs, // 8
  },
  title: {
    fontSize: typography.xl,  // 20
    fontWeight: '700',
    color: palette.primary,   // '#65A30D'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    marginLeft: spacing.md,     // 16
    fontSize: typography.base,  // 14
    fontWeight: '600',
    color: palette.titleDescription, // '#1F2937'
  },
})
