// apps/mobile/src/features/landing/components/GoogleBtn.tsx

import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import googleIcon from '../../../assets/google-icon.webp'
import { GoogleBtnStyles as styles } from '../../../styles'

export default function GoogleBtn() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={googleIcon} style={styles.icon} />
      <Text style={styles.text}>Registrarse con Google</Text>
    </TouchableOpacity>
  )
}

