import { Routes, Route } from 'react-router-dom'
// LANDING
import LandingPage from '@/features/landing/pages/LandingPage'
// AUTH
import RegisterPage from '@/features/auth/pages/RegisterPage'
import LoginPage from '@/features/auth/pages/LoginPage'
// ADMIN
import AdminLayout from '@/features/admin/layouts/AdminLayout'
import AdminTablePageWrapper from '@/features/admin/pages/AdminTablePageWrapper'
// DASHBOARD
// import DashboardMain from '@/features/dashboard/pages/DashboardMain'
import DashboardExternal from '@/features/dashboards/external/pages/DashboardExternal'
import DashboardStudent from '@/features/dashboards/student/pages/DashboardStudent'
// PROFILE
import ProfilePage from '@/features/profile/pages/ProfilePage'
// PROJECTS
import RequestProject from '@/features/projects/pages/RequestProject'
import ExploreProjects from '@/features/projects/pages/ExploreProjects'
import ProjectDetails from '@/features/projects/pages/ProjectDetails'
// LAYOUTS
import PlainLayout from '@/layouts/PlainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
// ERROR
import NotFound from '@/pages/404'

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

      {/* Rutas de administrador */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path=":tableName" element={<AdminTablePageWrapper />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
