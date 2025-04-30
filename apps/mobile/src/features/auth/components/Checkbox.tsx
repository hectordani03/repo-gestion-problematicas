// apps/mobile/src/features/auth/components/Checkbox.tsx
import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

interface Props {
  value: boolean
  onValueChange: (v: boolean) => void
  label?: string
}

const Checkbox: React.FC<Props> = ({ value, onValueChange, label = 'Acepto los términos y condiciones' }) => (
  <View style={styles.container}>
    <Switch value={value} onValueChange={onValueChange} />
    <Text style={styles.label}>{label}</Text>
  </View>
)

export default Checkbox

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  label: { marginLeft: 8, fontSize: 14, color: '#374151' },
})
