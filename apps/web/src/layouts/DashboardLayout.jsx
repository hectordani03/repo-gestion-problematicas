import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import DashboardMain from '../features/dashboard/pages/DashboardMain'
import Timeline from '../features/dashboard/components/Timeline'


export default function DashboardLayout() {
  return (
    <>
        <Header />
        <main className='flex gap-3'>
          <Sidebar />
          <DashboardMain />
          <Timeline />
        </main>
    </>
  )
}