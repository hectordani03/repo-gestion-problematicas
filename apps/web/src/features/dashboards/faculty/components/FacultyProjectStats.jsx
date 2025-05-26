import React from 'react'
import ProjectStats from '../../shared/components/ProjectStats'
import { useFacultyStats } from '../hooks/useFacultyStats'

export const FacultyProjectStats = () => {
  const { statsData } = useFacultyStats()

  const handleStatClick = (stat) => {
    console.log('Faculty stat clicked:', stat.label)
    // Creada por si se agrega funcionalidad extra más adelante como abrir un modal o redirigir a otra página
  }

  return (
    <ProjectStats
      title="Panel Académico"
      subtitle="Supervisa, acompaña y gestiona los proyectos asignados a tu coordinación."
      statsData={statsData}
      onStatClick={handleStatClick}
      showSummary={true}
      maxValue={12}
    />
  )
}

export default FacultyProjectStats