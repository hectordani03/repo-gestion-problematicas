// apps/mobile/src/styles/screens/RegisterPage.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { typography } from '../theme/typography'

export const RegisterPageStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: palette.background,
  },
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: spacing.sm,        
    paddingBottom: spacing.xxl, 
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: spacing.md,   
  },
  card: {
    width: '100%',
    backgroundColor: palette.background,
    borderRadius: spacing.lg,   
    padding: spacing.lg,         
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: typography.xl2,    
    fontWeight: '700',
    color: palette.text,
    textAlign: 'center',
    marginBottom: spacing.xs,    
  },
  highlight: {
    color: palette.primary,
  },
  subtitle: {
    fontSize: typography.base,        
    color: palette.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,         
  },
})
