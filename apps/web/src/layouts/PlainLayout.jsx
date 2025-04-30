import { Outlet } from 'react-router-dom'
import Header from '@/components/ExternalHeader'

const PlainLayout = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-1 flex items-center justify-center">
      <Outlet />
    </main>
  </div>
)

export default PlainLayout
