// apps/mobile/src/features/auth/components/AuthInput.tsx

import React from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import { AuthInputStyles } from '../../../styles/components/auth/authComponents.styles'
import { palette } from '../../../styles/theme/colors'

interface Props extends TextInputProps {
  label?: string      // opcional: si se pasa, se renderiza arriba
  placeholder?: string
}

const AuthInput: React.FC<Props> = ({
  label,
  placeholder,
  style,
  ...props
}) => (
  <View style={AuthInputStyles.container}>
    {label && (
      <Text style={AuthInputStyles.label}>{label}</Text>
    )}
    <TextInput
      style={[AuthInputStyles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={palette.textSecondary}
      {...props}
    />
  </View>
)

export default AuthInput
