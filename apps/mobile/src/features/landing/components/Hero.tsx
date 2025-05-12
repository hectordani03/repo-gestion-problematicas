// apps/mobile/src/features/landing/components/Hero.tsx
import React from 'react'
import { View, Text } from 'react-native'
import { HeroStyles as styles } from '../../../styles'

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
