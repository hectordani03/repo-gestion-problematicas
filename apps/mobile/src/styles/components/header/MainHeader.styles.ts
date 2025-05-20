// apps/mobile/src/styles/components/header/MainHeader.styles.ts

import { StyleSheet } from 'react-native'
import { palette }    from '../../theme/colors'
import { spacing }    from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const MainHeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: palette.background, // blanco
    paddingHorizontal: spacing.md,       // 16
    paddingTop: spacing.sm,              // 12
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,            // separación al search bar
  },
  logo: {
    fontSize: typography.xl2,            // 24
    fontWeight: '900',
    color: palette.primary,              // verde ReUC
  },
  profileBtn: {
    width: spacing.xl,                   // 32
    height: spacing.xl,                  // 32
    borderRadius: spacing.xl,            // 32
    backgroundColor: palette.grayLight,  // gris claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.grayExtraLight, 
    borderRadius: spacing.md,                // 16
    paddingHorizontal: spacing.sm,           // 12
    paddingVertical: spacing.xs,             // 8
  },
  searchIcon: {
    marginRight: spacing.sm,           // 12
    color: palette.textSecondary,      // gris
  },
  searchInput: {
    flex: 1,
    fontSize: typography.base,         // 14
    color: palette.text,              
  },
})
