// apps/mobile/src/features/landing/components/RegisterBtn.tsx
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RegisterBtnStyles as styles } from '../../../styles'

export default function RegisterBtn() {
  const nav = useNavigation<any>()
  return (
    <TouchableOpacity style={styles.btn} onPress={() => nav.navigate('Register')}>
      <Text style={styles.text}>Registrarse</Text>
    </TouchableOpacity>
  )
}
