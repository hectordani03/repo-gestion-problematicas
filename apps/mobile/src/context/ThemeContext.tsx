// apps/mobile/src/contexts/ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useColorScheme } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { lightPalette, darkPalette, highContrastPalette, ColorPalette } from '../styles/theme/colors'

type ThemeMode = 'light' | 'dark' | 'highContrast' | 'system'
type FontMode = 'default' | 'dyslexic'

interface ThemeContextType {
  themeMode: ThemeMode
  isDarkMode: boolean
  isHighContrast: boolean
  palette: ColorPalette
  setThemeMode: (mode: ThemeMode) => void
  toggleTheme: () => void
  setHighContrast: (enabled: boolean) => void

  fontMode: FontMode
  setFontMode: (mode: FontMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme()
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontMode, setFontModeState] = useState<FontMode>('default')

  useEffect(() => {
    loadThemePreference()
    loadFontPreference()
  }, [])

  useEffect(() => {
    if (themeMode === 'system') {
      setIsDarkMode(systemColorScheme === 'dark')
      setIsHighContrast(false)
    } else if (themeMode === 'dark') {
      setIsDarkMode(true)
      setIsHighContrast(false)
    } else if (themeMode === 'highContrast') {
      setIsDarkMode(false)
      setIsHighContrast(true)
    } else {
      setIsDarkMode(false)
      setIsHighContrast(false)
    }
  }, [themeMode, systemColorScheme])

  // ---- Manejo de persistencia ----

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('themeMode')
      if (savedTheme) {
        setThemeModeState(savedTheme as ThemeMode)
      }
    } catch (error) {
      console.error('Error loading theme preference:', error)
    }
  }

  const setThemeMode = async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem('themeMode', mode)
      setThemeModeState(mode)
    } catch (error) {
      console.error('Error saving theme preference:', error)
    }
  }

  // ---- Fuente accesible ----

  const loadFontPreference = async () => {
    try {
      const savedFont = await AsyncStorage.getItem('fontMode')
      if (savedFont) {
        setFontModeState(savedFont as FontMode)
      }
    } catch (error) {
      console.error('Error loading font preference:', error)
    }
  }

  const setFontMode = async (mode: FontMode) => {
    try {
      await AsyncStorage.setItem('fontMode', mode)
      setFontModeState(mode)
    } catch (error) {
      console.error('Error saving font preference:', error)
    }
  }


  const toggleTheme = () => {
    if (themeMode === 'highContrast') {
      setThemeMode('light')
    } else if (isDarkMode) {
      setThemeMode('light')
    } else {
      setThemeMode('dark')
    }
  }

  // Activar/desactivar alto contraste
  const setHighContrast = (enabled: boolean) => {
    if (enabled) {
      setThemeMode('highContrast')
    } else {
      setThemeMode('light')
    }
  }

  // Elegir la paleta
  let palette: ColorPalette
  if (themeMode === 'highContrast') {
    palette = highContrastPalette
  } else if (themeMode === 'dark' || (themeMode === 'system' && systemColorScheme === 'dark')) {
    palette = darkPalette
  } else {
    palette = lightPalette
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        isDarkMode,
        isHighContrast,
        palette,
        setThemeMode,
        toggleTheme,
        setHighContrast,
        fontMode,
        setFontMode, 
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
