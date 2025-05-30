// apps/mobile/src/hooks/useThemedStyles.ts

import { useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { ColorPalette } from '../styles/theme/colors'

// Hook para estilos que dependen de la paleta activa y fontMode
export const useThemedStyles = <T extends (palette: ColorPalette, fontMode: string) => any>(
  styleFactory: T
): ReturnType<T> => {
  const { palette, fontMode } = useTheme()
  return useMemo(() => styleFactory(palette, fontMode), [palette, fontMode, styleFactory])
}

// Hook para obtener solo la paleta de colores activa
export const useThemedPalette = (): ColorPalette => {
  const { palette } = useTheme()
  return palette
}
