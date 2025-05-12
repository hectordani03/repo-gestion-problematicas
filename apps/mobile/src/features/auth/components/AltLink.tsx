// apps/mobile/src/features/auth/components/AltLink.tsx

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AltLinkStyles } from '../../../styles'

interface Props {
  text: string       // “¿Ya tienes cuenta?”
  linkText: string   // “Inicia sesión”
  to: string         // nombre de la ruta (“Login”)
}

const AltLink: React.FC<Props> = ({ text, linkText, to }) => {
  const nav = useNavigation<any>()
  return (
    <TouchableOpacity onPress={() => nav.navigate(to)}>
      <Text style={AltLinkStyles.text}>
        {text}{' '}
        <Text style={AltLinkStyles.link}>{linkText}</Text>
      </Text>
    </TouchableOpacity>
  )
}

export default AltLink
