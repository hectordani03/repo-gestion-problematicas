// apps/mobile/src/components/MainHeader.tsx

import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MainHeaderStyles as styles } from '../styles/components/header/MainHeader.styles'
import avatar from '../assets/avatar.png' 

type Props = {
  onProfilePress?: () => void
  onSearchChange?: (text: string) => void
  searchValue?: string
}

export default function MainHeader({
  onProfilePress,
  onSearchChange,
  searchValue,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.logo}>
          Re<Text style={{ color: styles.logo.color }}>UC</Text>
        </Text>
        <TouchableOpacity
          style={styles.profileBtn}
          onPress={onProfilePress}
        >
          <Image
            source={avatar}
            style={{
              width: styles.profileBtn.width,
              height: styles.profileBtn.height,
              borderRadius: styles.profileBtn.borderRadius,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar proyectos..."
          placeholderTextColor={styles.searchIcon.color}
          value={searchValue}
          onChangeText={onSearchChange}
        />
      </View>
    </View>
  )
}
