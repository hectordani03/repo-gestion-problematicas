// apps/mobile/src/features/landing/components/RegisterBtn.tsx

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function RegisterBtn() {
  const nav = useNavigation<any>()
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => nav.navigate('Register')}
    >
      <Text style={styles.text}>Registrarse</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#65A30D',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },
  text: { color: '#FFF', fontSize: 16, fontWeight: '600' }
})
