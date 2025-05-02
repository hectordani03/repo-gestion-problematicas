// apps/mobile/src/features/auth/hooks/useLoginNative.ts

import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { login } from '../pages/authServiceNative'
import { showError } from '../utils/toast'

export default function useLoginNative() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const nav = useNavigation<any>()

  const handleChange = (field: 'email'|'password', value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (isLoading) return
    setIsLoading(true)

    if (!form.email.trim()) {
      showError('El correo es obligatorio')
      setIsLoading(false)
      return
    }
    if (!form.password) {
      showError('La contraseña es obligatoria')
      setIsLoading(false)
      return
    }

    try {
      const res = await login(form.email, form.password)
      if (!res.success) {
        showError(res.err || 'Error al iniciar sesión')
      } else {
        nav.navigate('Dashboard')
      }
    } catch (e: any) {
      showError(e.message || 'Algo salió mal')
    } finally {
      setIsLoading(false)
    }
  }

  return { form, handleChange, handleSubmit, isLoading }
}
