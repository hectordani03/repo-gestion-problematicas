// apps/mobile/src/features/auth/pages/LoginPage.tsx

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Importa la imagen que ya tienes en tu carpeta de assets
import loginImage from '../../../assets/login-image.png'

const LoginPage: React.FC = () => {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleLogin = () => {
    // Validaciones básicas
    if (!email.trim()) {
      setError('El correo es obligatorio')
      return
    }
    if (!password) {
      setError('La contraseña es obligatoria')
      return
    }
    setError(null)
    // Aquí iría tu lógica de login real, e.g. llamar a authServiceNative.login(...)
    console.log('Login con', { email, password })
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={loginImage} style={styles.image} resizeMode="contain" />

        

          <Text style={styles.title}>
            Bienvenido a <Text style={styles.highlight}>ReUC</Text>
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.linkContainer}
          >
            <Text style={styles.link}>
              ¿No tienes una cuenta?{' '}
              <Text style={styles.linkHighlight}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
        
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 30
  },
  form: {
    width: '100%'
  },
  errorContainer: {
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  highlight: {
    color: '#65A30D' // verde
  },
  input: {
    backgroundColor: '#f3f4f6', // gray-100
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#65A30D', // verde
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  linkContainer: {
    alignSelf: 'center',
    marginTop: 8
  },
  link: {
    textAlign: 'center',
    fontSize: 16,
    color: '#4b5563' // gray-600
  },
  linkHighlight: {
    color: '#65A30D',
    fontWeight: 'bold'
  }
})
