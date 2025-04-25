// src/routes/AppRouter.jsx
import { Routes, Route } from 'react-router-dom'
import LandingPage from '@/features/landing/pages/LandingPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import LoginPage from '@/features/auth/pages/LoginPage'
// import DashboardMain from '@/features/dashboard/pages/DashboardMain'
import DashboardMain from '@/features/dashboard/pages/DashboardMain'
import NotFound from '@/pages/404'

import PlainLayout from '@/layouts/PlainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
import ProfilePage from '@/features/profile/pages/ProfilePage'

const AppRouter = () => {
  return (
    <Routes>
      {/* Landing page */}
      <Route element={<PlainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Rutas Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Rutas Dashboard (protegidas) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardMain />} />
        {/* Aquí puedes anidar más rutas como /dashboard/proyectos */}
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
