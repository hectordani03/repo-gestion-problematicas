import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function DashboardLayout() {
  return (
    <section className=''>
        <Header />
        <Sidebar />
    </section>
  )
}