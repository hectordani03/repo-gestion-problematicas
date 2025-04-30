// apps/mobile/src/features/auth/components/AuthInput.tsx
import React from 'react'
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
  label: string
}

const AuthInput: React.FC<Props> = ({ label, style, ...props }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={[styles.input, style]} {...props} />
  </View>
)

export default AuthInput

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#374151', marginBottom: 6 },
  input: {
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
})
