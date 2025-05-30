// apps/mobile/src/styles/components/sidebar/LeftSidebar.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const LeftSidebarStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  sidebar: {
    width: '80%',
    maxWidth: 300,
    backgroundColor: palette.background,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xxl + spacing.lg, 
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: palette.grayExtraLight,
  },
  logo: {
    fontSize: typography.xl2,
    fontWeight: '900',
    color: palette.primary,
  },
  logoAccent: {
    color: palette.text,
  },
  closeButton: {
    padding: spacing.xs,
  },
  closeIcon: {
    color: palette.textSecondary,
  },
  menuContainer: {
    flex: 1,
    paddingVertical: spacing.sm,
  },
  menuItem: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginVertical: spacing.xxs,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: palette.text,
    marginRight: spacing.md,
  },
  menuText: {
    fontSize: typography.base,
    color: palette.text,
    fontWeight: '500',
    flex: 1,
  },
  chevronIcon: {
    color: palette.textSecondary,
    marginLeft: 'auto',
  },
  submenuContainer: {
    backgroundColor: palette.grayExtraLight,
    marginLeft: spacing.xl + spacing.md, // 32 + 16 = 48
    marginRight: spacing.md,
    borderRadius: spacing.xs,
    marginBottom: spacing.xs,
    paddingVertical: spacing.xs,
  },
  submenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  submenuAvatar: {
    width: spacing.lg,
    height: spacing.lg,
    borderRadius: spacing.lg,
    marginRight: spacing.sm,
  },
  submenuText: {
    fontSize: typography.sm,
    color: palette.text,
  },
})