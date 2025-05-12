// apps/mobile/src/styles/components/landing/landingComponents.styles.ts

import { StyleSheet } from 'react-native'

export const HeroStyles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#65A30D',
  },
})

export const LoginPromptStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#374151',
    marginRight: 6,
  },
  link: {
    fontSize: 14,
    color: '#65A30D',
    fontWeight: '600',
  },
})

export const GoogleBtnStyles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
})

export const RegisterBtnStyles = StyleSheet.create({
  btn: {
    backgroundColor: '#65A30D',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
})
