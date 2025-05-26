import React from 'react'
import ProjectStats from '../../shared/components/ProjectStats'
import { useExternalStats } from '../hooks/useExternalStats'

export const ExternalProjectStats = () => {
  const { statsData } = useExternalStats()

  const handleStatClick = (stat) => {
    console.log('Clicked stat:', stat.label)
    // Creada por si se agrega funcionalidad extra más adelante como abrir un modal o redirigir a otra página
  }

  return (
    <ProjectStats
      title="Panel de Empresa"
      subtitle="Revisa tus solicitudes de proyecto, da seguimiento y recibe actualizaciones"
      statsData={statsData}
      onStatClick={handleStatClick}
      showSummary={true}
      maxValue={12}
    />
  )
}

export default ExternalProjectStats