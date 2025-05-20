// apps/mobile/src/styles/components/dashboard/DashboardTabs.styles.ts

import { StyleSheet } from 'react-native'
import { palette }    from '../../theme/colors'
import { spacing }    from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const DashboardTabsStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: palette.background,
    elevation: 0,
  },
  indicator: {
    backgroundColor: palette.primary,
    height: 2,
  },
  label: {
    fontSize: typography.sm,    // 12
    fontWeight: '600',
    textTransform: 'none',
    margin: 0,
    padding: 0,
  },
})
