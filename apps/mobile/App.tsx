// apps/mobile/App.tsx
import 'react-native-gesture-handler'               
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppNavigator from './src/routes/AppNavigator'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
      <Toast />
    </GestureHandlerRootView>
  )
}
