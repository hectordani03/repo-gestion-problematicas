// apps/mobile/src/features/auth/components/SubmitBtn.tsx

import React from 'react'
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { SubmitBtnStyles } from '../../../styles'

type Props = {
  onPress: () => void
  disabled?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
}

export default function SubmitBtn({
  children,
  onPress,
  disabled,
  style,
  textStyle,
}: React.PropsWithChildren<Props>) {
  return (
    <TouchableOpacity
      style={[
        SubmitBtnStyles.button,
        style,
        disabled && SubmitBtnStyles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[SubmitBtnStyles.text, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
