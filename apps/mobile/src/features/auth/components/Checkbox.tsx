// apps/mobile/src/features/auth/components/Checkbox.tsx

import React from 'react'
import { View, Text, Switch } from 'react-native'
import { CheckboxStyles } from '../../../styles'

interface Props {
  value: boolean
  onValueChange: (v: boolean) => void
  label?: string
}

const Checkbox: React.FC<Props> = ({
  value,
  onValueChange,
  label = 'Acepto los términos y condiciones',
}) => (
  <View style={CheckboxStyles.container}>
    <Switch value={value} onValueChange={onValueChange} />
    <Text style={CheckboxStyles.label}>{label}</Text>
  </View>
)

export default Checkbox
