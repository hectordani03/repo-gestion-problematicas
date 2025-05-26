import React from 'react'
import StatCard from './StatCard'
import { useProjectStats } from '../hooks/useProjectStats'

const ProjectStats = ({ 
  title,
  subtitle,
  statsData,
  onStatClick,
  showSummary = true,
  maxValue = 12
}) => {
  const { processedStats, summary } = useProjectStats(statsData, { maxValue })

  const handleStatClick = (stat, index) => {
    if (onStatClick) {
      onStatClick(stat, index)
    }
  }

  return (
    <div className="pt-2 rounded-xl">
      <div className="mx-auto">
        <div className="mb-8 ml-4 mt-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processedStats.map((stat, index) => (
            <StatCard
              key={`${stat.label}-${index}`}
              {...stat}
              onClick={() => handleStatClick(stat, index)}
            />
          ))}
        </div>
        
        {showSummary && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Resumen General</h2>
                <p className="text-sm text-gray-600">Estado actual de todos los proyectos en el sistema</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{summary.totalProjects}</div>
                  <div className="text-xs text-gray-500">Total Proyectos</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-600">{summary.progressRate}</div>
                  <div className="text-xs text-gray-500">Tasa Progreso</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectStats
