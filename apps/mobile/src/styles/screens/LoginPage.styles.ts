// apps/mobile/src/styles/screens/LoginPage.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { typography } from '../theme/typography'

export const LoginPageStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: palette.background,
  },
  image: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.xl3,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: palette.text,
  },
  highlight: {
    color: palette.primary,
  },
})
