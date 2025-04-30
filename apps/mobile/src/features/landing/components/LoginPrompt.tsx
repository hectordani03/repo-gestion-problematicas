// apps/mobile/src/features/landing/components/LoginPrompt.tsx
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LoginPrompt = () => {
  const nav = useNavigation<any>()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
      <TouchableOpacity onPress={() => nav.navigate('Login')}>
        <Text style={styles.link}>Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginPrompt

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  text: { fontSize: 14, color: '#374151', marginRight: 6 },
  link: { fontSize: 14, color: '#65A30D', fontWeight: '600' }
})
