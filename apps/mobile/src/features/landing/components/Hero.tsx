// apps/mobile/src/features/landing/components/Hero.tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Hero = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Repositorio para el registro, gestión y seguimiento de problemáticas del
      sector productivo
    </Text>
    <Text style={styles.subtitle}>Comienza ahora!</Text>
  </View>
)

export default Hero

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#65A30D'
  }
})
