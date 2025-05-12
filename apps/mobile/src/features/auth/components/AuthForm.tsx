// apps/mobile/src/features/auth/components/AuthForm.tsx

import React from 'react'
import { View } from 'react-native'
import { AuthFormStyles } from '../../../styles'

interface Props {
  children: React.ReactNode
}

const AuthForm: React.FC<Props> = ({ children }) => (
  <View style={AuthFormStyles.form}>{children}</View>
)

export default AuthForm
