// apps/mobile/src/features/auth/components/SubmitBtn.tsx

import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'

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
        styles.button,
        style,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#65A30D',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
