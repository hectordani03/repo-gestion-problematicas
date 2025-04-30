// apps/mobile/src/features/auth/hooks/useRegisterNative.ts

import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { register } from '../pages/authServiceNative'
import { showError } from '../utils/toast'

interface Form { email:string; password:string; confirmPassword:string; acceptTerms:boolean; studentId:string }

export default function useRegisterNative() {
  const [form, setForm] = useState<Form>({
    email: '', password: '', confirmPassword: '', acceptTerms: false, studentId: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const nav = useNavigation<any>()

  const handleChange = (field: keyof Form, value: string|boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (isLoading) return
    setIsLoading(true)

    if (!form.acceptTerms) {
      showError('Debes aceptar los términos y condiciones')
      setIsLoading(false)
      return
    }
    if (!form.email.trim()) {
      showError('El correo es obligatorio')
      setIsLoading(false)
      return
    }
    if (form.email.includes('@ucol.mx') && !form.studentId.trim()) {
      showError('Ingresa tu número de cuenta')
      setIsLoading(false)
      return
    }
    if (!form.password) {
      showError('La contraseña es obligatoria')
      setIsLoading(false)
      return
    }
    if (form.password !== form.confirmPassword) {
      showError('Las contraseñas no coinciden')
      setIsLoading(false)
      return
    }

    try {
      const res = await register(form)
      if (!res.success) {
        showError(res.err || 'Error en el registro')
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
