// apps/mobile/src/features/landing/pages/LandingPage.tsx

import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native'
import GoogleBtn from '../components/GoogleBtn'
import RegisterBtn from '../components/RegisterBtn'
import LoginPrompt from '../components/LoginPrompt'

export default function LandingPage() {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
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

        {}
        <View style={{ height: 24 }} />

        <LoginPrompt />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  containerCentered: {
    flexGrow: 1,
    justifyContent: 'center',   // centra verticalmente
    alignItems: 'center',       // centra horizontalmente
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 40
  },
  logo: {
    fontSize: 48,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center'
  },
  logoHighlight: {
    color: '#65A30D'
  },
  tagline: {
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16
  },
  taglineHighlight: {
    color: '#65A30D',
    fontWeight: '700'
  },
  cta: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 24,
    textAlign: 'center'
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 16
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB'
  },
  or: {
    marginHorizontal: 8,
    color: '#6B7280',
    fontSize: 14
  }
})
