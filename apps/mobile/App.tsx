// apps/mobile/App.tsx
import React from 'react'
import AppNavigator from './src/routes/AppNavigator'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  )
}