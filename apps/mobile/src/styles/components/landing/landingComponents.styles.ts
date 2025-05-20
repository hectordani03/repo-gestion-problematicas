// apps/mobile/src/styles/components/landing/landingComponents.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const GoogleBtnStyles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.background,
    borderWidth: 1,
    borderColor: palette.graybtn,
    borderRadius: spacing.lg+1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md +4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: spacing.sm,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: spacing.sm-2
  },
  text: {
    fontSize: typography.lg,
    fontWeight: '600',
    color: palette.onGBtn
  },
})

export const HeroStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.xxs
  },
  title: {
    fontSize: typography.lg,
    color: palette.titleDescription,
    lineHeight: spacing.lg,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  titlehighlight: {
    color: palette.primary,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: typography.xl,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: palette.titleDescription,
  },
})

export const LoginPromptStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: typography.base,
    color: palette.onGBtn,
    marginRight: spacing.xs-2
  },
  link: {
    fontSize: typography.base,
    color: palette.primary,
    fontWeight: '600',
  },
})

export const RegisterBtnStyles = StyleSheet.create({
  btn: {
    backgroundColor: palette.primary,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: spacing.xxl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: palette.onPrimary,
    fontSize: typography.lg,
    fontWeight: '600',
  },
})
