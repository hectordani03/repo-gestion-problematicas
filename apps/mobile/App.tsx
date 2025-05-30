// apps/mobile/App.tsx
import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from './src/context/ThemeContext'
import AppNavigator from './src/routes/AppNavigator'
import Toast from 'react-native-toast-message'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // Cargar las fuentes al inicio
  const loadFonts = () =>
    Font.loadAsync({
      'OpenDyslexic-Regular': require('./src/assets/fonts/OpenDyslexic3-Regular.ttf'),
      'OpenDyslexic-Bold': require('./src/assets/fonts/OpenDyslexic3-Bold.ttf')
    })

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <AppNavigator />
        <Toast />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
