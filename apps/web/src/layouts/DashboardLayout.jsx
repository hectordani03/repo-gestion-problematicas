import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header/Header'
import Timeline from '@/components/Timeline'
const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-1">
          <Outlet />
        </div>
        <Timeline />
      </main>
    </>
  )
}

export default DashboardLayout
