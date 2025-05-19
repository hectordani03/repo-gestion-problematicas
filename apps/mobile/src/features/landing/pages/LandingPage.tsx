// apps/mobile/src/features/landing/pages/LandingPage.tsx

import React from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import GoogleBtn from '../components/GoogleBtn'
import RegisterBtn from '../components/RegisterBtn'
import LoginPrompt from '../components/LoginPrompt'
import { LandingPageStyles as styles } from '../../../styles'

export default function LandingPage() {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.background.backgroundColor}
        translucent={false}
      />

      <ScrollView contentContainerStyle={styles.containerCentered}>
        <Text style={styles.logo}>
          Re<Text style={styles.logoHighlight}>UC</Text>
        </Text>

        <Text style={styles.tagline}>
          Repositorio para el registro, gestión y seguimiento de{' '}
          <Text style={styles.taglineHighlight}>problemáticas</Text> del sector
          productivo
        </Text>

        <Text style={styles.cta}>Comienza ahora</Text>

        <GoogleBtn />

        <View style={styles.orWrapper}>
          <View style={styles.line} />
          <Text style={styles.or}>o</Text>
          <View style={styles.line} />
        </View>

        <RegisterBtn />

        <View style={styles.spacer} />

        <LoginPrompt />
      </ScrollView>
    </View>
  )
}
