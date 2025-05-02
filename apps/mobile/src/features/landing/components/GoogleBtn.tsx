// apps/mobile/src/features/landing/components/GoogleBtn.tsx

import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import googleIcon from '../../../assets/google-icon.webp'

export default function GoogleBtn() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={googleIcon} style={styles.icon} />
      <Text style={styles.text}>Registrarse con Google</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12
  },
  icon: { width: 24, height: 24, marginRight: 10 },
  text: { fontSize: 16, fontWeight: '600', color: '#374151' }
})
