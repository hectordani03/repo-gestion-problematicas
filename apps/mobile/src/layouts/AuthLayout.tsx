// apps/mobile/src/layouts/AuthLayout.tsx

import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import MobileHeader from '../components/MobileHeader'

type Props = { children: React.ReactNode }

export default function AuthLayout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <MobileHeader />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 16 }
})
