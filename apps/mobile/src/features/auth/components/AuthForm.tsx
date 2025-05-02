// apps/mobile/src/features/auth/components/AuthForm.tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'

interface Props {
  children: React.ReactNode
}

const AuthForm: React.FC<Props> = ({ children }) => (
  <View style={styles.form}>{children}</View>
)

export default AuthForm

const styles = StyleSheet.create({
  form: {
    width: '100%',
    paddingHorizontal: 16,
  },
})
