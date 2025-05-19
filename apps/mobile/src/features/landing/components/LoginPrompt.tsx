// apps/mobile/src/features/landing/components/LoginPrompt.tsx
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LoginPromptStyles as styles } from '../../../styles'

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
