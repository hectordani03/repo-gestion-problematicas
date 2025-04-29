import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header/Header'
import Timeline from '@/features/dashboard/components/Timeline'
const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-1">
          <Outlet />
          <Timeline />
        </div>
      </main>
    </>
  )
}

export default DashboardLayout
