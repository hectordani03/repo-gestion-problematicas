// apps/mobile/src/layouts/PlainLayout.tsx

import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { PlainLayoutStyles as styles } from '../styles/layouts/PlainLayout.styles'

type Props = { children: React.ReactNode }

export default function PlainLayout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  )
}
