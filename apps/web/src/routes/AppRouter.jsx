import { Routes, Route } from 'react-router-dom'
import LandingPage from '@/features/landing/pages/LandingPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import LoginPage from '@/features/auth/pages/LoginPage'
// import DashboardMain from '@/features/dashboard/pages/DashboardMain'
import DashboardExternal from '@/features/dashboards/external/pages/DashboardExternal'
import DashboardStudent from '@/features/dashboards/student/pages/DashboardStudent'
import NotFound from '@/pages/404'

import PlainLayout from '@/layouts/PlainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
import ProfilePage from '@/features/profile/pages/ProfilePage'
import RequestProject from '@/features/projects/pages/RequestProject'
import ExploreProjects from '@/features/projects/pages/ExploreProjects'
import ProjectDetails from '@/features/projects/pages/ProjectDetails'

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
        {/* TODO: Hay que hacer un request a la API para verificar
            que en verdad el usuario este logeado (auyn no hay ruta
            para eso en la API) */}
        {/* <Route path="/dashboard" element={<DashboardMain />} /> */}
        <Route path="/dashboard" element={<DashboardExternal />} />
        <Route path="/dashboard-student" element={<DashboardStudent />} />
        {/* Aquí puedes anidar más rutas como /dashboard/proyectos */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/request-project" element={<RequestProject />} />
        <Route path="/explore-projects" element={<ExploreProjects />} />
        <Route path="/explore-projects/project-details" element={<ProjectDetails />} />
        {/* HAY QUE MANEJARLA LAS URL CON SLUGS: */}
        {/* <Link to={`/explore-projects/${project.slug}`}>Ver detalles</Link> */}
        {/* <Route path="/explore-projects/:slug" element={ProjectDetails} /> */}
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
