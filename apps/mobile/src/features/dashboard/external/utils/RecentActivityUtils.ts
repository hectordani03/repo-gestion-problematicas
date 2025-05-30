// apps/mobile/src/features/dashboard/external/utils/RecentActivityUtils.ts

import { ActivityType } from '../hooks/useRecentActivity'

export const RecentActivityUtils = {
  getTimeAgo: (timestamp: string): string => {
    const now = new Date()
    const activityTime = new Date(timestamp)
    const diffInMinutes = Math.floor((now.getTime() - activityTime.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Ahora'
    if (diffInMinutes < 60) return `${diffInMinutes}m`
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h`
    
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d`
  },

  getActivityIcon: (type: ActivityType): string => {
    const iconMap: Record<ActivityType, string> = {
      upload: 'cloud-upload-outline',
      task_completed: 'check-circle-outline',
      comment: 'comment-outline',
      edit: 'pencil-outline',
      project_start: 'play-circle-outline'
    }
    return iconMap[type] || 'information-outline'
  },

  getActivityColor: (type: ActivityType): { bg: string; text: string } => {
    const colorMap: Record<ActivityType, { bg: string; text: string }> = {
      upload: { bg: '#DBEAFE', text: '#1D4ED8' },
      task_completed: { bg: '#D1FAE5', text: '#065F46' },
      comment: { bg: '#E9D5FF', text: '#7C2D12' },
      edit: { bg: '#FED7AA', text: '#C2410C' },
      project_start: { bg: '#E0E7FF', text: '#3730A3' }
    }
    return colorMap[type] || { bg: '#F3F4F6', text: '#6B7280' }
  }
}