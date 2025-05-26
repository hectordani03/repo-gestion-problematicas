import { useMemo } from 'react'

export const useProjectStats = (statsData, options = {}) => {
  const { maxValue = 12 } = options

  const processedStats = useMemo(() => {
    return statsData.map(stat => ({
      ...stat,
      progressPercentage: typeof stat.value === 'number' 
        ? Math.min((stat.value / maxValue) * 100, 100)
        : 60
    }))
  }, [statsData, maxValue])

  const summary = useMemo(() => {
    const totalProjects = statsData.reduce((acc, stat) => {
      if (typeof stat.value === 'number' && stat.label.toLowerCase().includes('proyecto')) {
        return acc + stat.value
      }
      return acc
    }, 0)

    const completedProjects = statsData.find(stat => 
      stat.label.toLowerCase().includes('finalizado')
    )?.value || 0

    const progressRate = totalProjects > 0 
      ? ((totalProjects - completedProjects) / totalProjects * 100).toFixed(1)
      : 0

    return {
      totalProjects,
      progressRate: `${progressRate}%`
    }
  }, [statsData])

  return {
    processedStats,
    summary
  }
}