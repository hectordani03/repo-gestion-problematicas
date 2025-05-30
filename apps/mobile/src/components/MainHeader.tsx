// apps/mobile/src/components/MainHeader.tsx

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createMainHeaderStyles } from '../styles/components/header/MainHeader.styles'
import { useThemedStyles, useThemedPalette } from '../hooks/useThemedStyles'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import avatar from '../assets/avatar.png' 

type Props = {
  onSearchChange?: (text: string) => void
  searchValue?: string
  onNavigate?: (screen: string) => void
  userEmail?: string
  userAvatar?: any
}

export default function MainHeader({
  onSearchChange,
  searchValue,
  onNavigate,
  userEmail,
  userAvatar,
}: Props) {
  const styles = useThemedStyles(createMainHeaderStyles)
  const palette = useThemedPalette()
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const toggleRightSidebar = () => {
    setIsRightSidebarVisible(!isRightSidebarVisible)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.leftSection}>
            <TouchableOpacity
              style={styles.hamburgerBtn}
              onPress={toggleSidebar}
            >
              <Ionicons
                name="menu"
                size={24}
                style={styles.hamburgerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.logo}>
              Re<Text style={{ color: styles.logo.color }}>UC</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={toggleRightSidebar}
          >
            <Image
              source={userAvatar || avatar}
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
            placeholderTextColor={palette.textSecondary}
            value={searchValue}
            onChangeText={onSearchChange}
          />
        </View>
      </View>

      <LeftSidebar
        isVisible={isSidebarVisible}
        onClose={() => setIsSidebarVisible(false)}
        onNavigate={onNavigate}
      />

      <RightSidebar
        isVisible={isRightSidebarVisible}
        onClose={() => setIsRightSidebarVisible(false)}
        onNavigate={onNavigate}
        userEmail={userEmail}
        userAvatar={userAvatar}
      />
    </>
  )
}