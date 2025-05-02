// apps/mobile/src/features/auth/pages/RegisterPageNative.tsx

import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native'
import AuthInput from '../components/AuthInput'
import SubmitBtn from '../components/SubmitBtn'
import AltLink from '../components/AltLink'
import useRegisterNative from '../hooks/useRegisterNative'

// Imagen ilustrativa
import registerImage from '../../../assets/register-image.png'

export default function RegisterPageNative() {
  const { form, handleChange, handleSubmit, isLoading, error } = useRegisterNative()
  const showStudentField = form.email.includes('@ucol.mx')

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {/* Ilustración arriba */}
          <Image source={registerImage} style={styles.image} />

      
          <View style={styles.card}>
            <Text style={styles.title}>
              Únete a <Text style={styles.highlight}>ReUC</Text>
            </Text>
            <Text style={styles.subtitle}>
              Regístrate para empezar a guardar y explorar contenido
            </Text>

            <AuthInput
              label="Correo electrónico"
              value={form.email}
              onChangeText={(v) => handleChange('email', v)}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />

            {showStudentField && (
              <AuthInput
                label="Número de cuenta"
                value={form.studentId}
                onChangeText={(v) => handleChange('studentId', v)}
                keyboardType="numeric"
                style={styles.input}
              />
            )}

            <AuthInput
              label="Contraseña"
              value={form.password}
              onChangeText={(v) => handleChange('password', v)}
              secureTextEntry
              style={styles.input}
            />

            <AuthInput
              label="Confirmar contraseña"
              value={form.confirmPassword}
              onChangeText={(v) => handleChange('confirmPassword', v)}
              secureTextEntry
              style={styles.input}
            />

            <View style={styles.switchContainer}>
              <Switch
                value={form.acceptTerms}
                onValueChange={(v) => handleChange('acceptTerms', v)}
              />
              <Text style={styles.switchText}>
                Acepto los términos y condiciones
              </Text>
            </View>

            <SubmitBtn
              onPress={handleSubmit}
              disabled={isLoading}
              style={styles.submitBtn}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                'Registrarse'
              )}
            </SubmitBtn>

            {/* Espacio antes del link */}
            <View style={{ height: 16 }} />

            <AltLink
              text="¿Ya tienes una cuenta?"
              linkText="Inicia sesión"
              to="Login"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  flex: { flex: 1 },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20
  },
  errorContainer: {
    width: '100%',
    backgroundColor: '#fee2e2',
    borderColor: '#fca5a5',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16
  },
  errorText: {
    color: '#b91c1c',
    textAlign: 'center',
    fontSize: 14
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // sombra Android
    elevation: 4
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8
  },
  highlight: {
    color: '#65A30D'
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    marginBottom: 16
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  switchText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563'
  },
  submitBtn: {
    borderRadius: 12,
    paddingVertical: 14
  }
})
