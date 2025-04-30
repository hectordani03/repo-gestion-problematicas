// apps/mobile/src/features/auth/components/AltLink.tsx
import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface Props {
  text: string       // “¿Ya tienes cuenta?”
  linkText: string   // “Inicia sesión”
  to: string         // nombre de la ruta (“Login”)
}

const AltLink: React.FC<Props> = ({ text, linkText, to }) => {
  const nav = useNavigation<any>()
  return (
    <TouchableOpacity onPress={() => nav.navigate(to)}>
      <Text style={styles.text}>
        {text}{' '}
        <Text style={styles.link}>{linkText}</Text>
      </Text>
    </TouchableOpacity>
  )
}

export default AltLink

const styles = StyleSheet.create({
  text: { fontSize: 14, color: '#4B5563', textAlign: 'center', marginVertical: 10 },
  link: { color: '#65A30D', fontWeight: 'bold' },
})
