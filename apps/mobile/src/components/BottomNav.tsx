// apps/mobile/src/components/BottomNav.tsx

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useThemedStyles } from '../hooks/useThemedStyles'
import { createBottomNavStyles } from '../styles/components/header/BottomNav.styles'

export default function BottomNav() {
  const nav = useNavigation<any>()
  const styles = useThemedStyles(createBottomNavStyles)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => nav.navigate('Messages')}>
        <MaterialCommunityIcons name="message-outline" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('Dashboard')}>
        <MaterialCommunityIcons name="home-outline" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('Notifications')}>
        <MaterialCommunityIcons name="bell-outline" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('Profile')}>
        <MaterialCommunityIcons name="account-circle-outline" style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
