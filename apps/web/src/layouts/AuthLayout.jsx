import { Outlet } from 'react-router-dom'
import ExternalHeader from '@/components/ExternalHeader'

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <ExternalHeader />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
