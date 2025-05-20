// apps/mobile/src/styles/screens/LandingPage.styles.ts

import { StyleSheet, StatusBar, Platform } from 'react-native'
import { palette } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { typography } from '../theme/typography'

export const LandingPageStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: palette.background,
  },
  containerCentered: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight ?? spacing.lg
        : 0,
    paddingBottom: spacing.xxl,
  },
  logo: {
    fontSize: typography.xl4,
    fontWeight: '900',
    color: palette.text,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  logoHighlight: {
    color: palette.primary,
  },

  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: spacing.md,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: palette.graybtn
  },
  or: {
    marginHorizontal: spacing.sm,
    color: palette.textSecondary,
    fontSize: typography.base,
  },
  spacer: {
    height: spacing.lg,
  },
})
