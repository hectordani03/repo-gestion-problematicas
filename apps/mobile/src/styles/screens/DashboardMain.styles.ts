// apps/mobile/src/styles/screens/DashboardMain.styles.ts

import { StyleSheet } from 'react-native'
import { ColorPalette } from '../theme/colors'
import { spacing } from '../theme/spacing'

export const createDashboardMainStyles = (palette: ColorPalette, fontMode: string) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
       fontFamily: fontMode === 'dyslexic' ? 'OpenDyslexic-Bold' : 'System',
    },
  })
