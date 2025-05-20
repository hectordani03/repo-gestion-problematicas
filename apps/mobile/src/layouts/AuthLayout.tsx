// apps/mobile/src/layouts/AuthLayout.tsx

import React from 'react'
import { SafeAreaView, View } from 'react-native'
import MobileHeader from '../components/MobileHeader'
import { AuthLayoutStyles as styles } from '../styles/layouts/AuthLayout.styles'

type Props = { children: React.ReactNode }

export default function AuthLayout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <MobileHeader />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  )
}
