// apps/mobile/src/components/MobileHeader.tsx

import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MobileHeader() {
  const nav = useNavigation<any>()
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>ReUC</Text>
      </View>

      <View style={styles.right}>
        <TouchableOpacity onPress={() => nav.navigate('About')}>
          <Text style={styles.link}>¿Qué es ReUC?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Help')}>
          <Text style={styles.link}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Contact')}>
          <Text style={styles.link}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#65A30D'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  link: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937'
  }
})
