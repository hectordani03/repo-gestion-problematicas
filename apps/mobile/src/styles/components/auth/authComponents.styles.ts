// apps/mobile/src/styles/components/auth/authComponents.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const AltLinkStyles = StyleSheet.create({
  text: {
    fontSize: typography.base,
    color: palette.textSecondary,
    textAlign: 'center',
    marginVertical: spacing.sm,
  },
  link: {
    color: palette.primary,
    fontWeight: 'bold',
  },
})

export const AuthInputStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: palette.textSecondary,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: palette.grayLight,
    borderRadius: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.base,
  },
})

export const CheckboxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  label: {
    marginLeft: spacing.sm,
    fontSize: typography.base,
    color: palette.textSecondary,
  },
})

export const SubmitBtnStyles = StyleSheet.create({
  button: {
    backgroundColor: palette.primary,
    paddingVertical: spacing.sm+2,
    borderRadius: spacing.sm,
    alignItems: 'center',
    marginBottom: spacing.md,
  
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    color: palette.onPrimary,
    fontSize: typography.lg,
    fontWeight: 'bold',
  },
})

export const AuthFormStyles = StyleSheet.create({
  form: {
    width: '100%',
    paddingHorizontal: spacing.md,
  },
})
