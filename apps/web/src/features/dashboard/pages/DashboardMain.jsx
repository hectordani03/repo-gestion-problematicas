import ProjectStats from '../components/ProjectStats'
import ProjectList from '../components/ProjectList'
import RecentProjects from '../components/RecentProjects'
import RecentActivity from '../components/RecentActivity'
import ProjectSummary from '../components/ProjectSummary'
import Timeline from '@/features/dashboard/components/Timeline'


const DashboardMain = () => {
  return (
    <>
    <div className="p-4 grid gap-4 xl:grid-cols-3 w-9/12">
      <div className="col-span-3 items-start">
        <ProjectStats />
      </div>
      <div className="col-span-3 lg:col-span-1">
        <ProjectList />
      </div>
      <div className="col-span-3 lg:col-span-2 grid gap-4">
        <RecentProjects />
        <div className="grid md:grid-cols-2 gap-4">
          <RecentActivity />
          <ProjectSummary />
        </div>
      </div>
    </div>
    <Timeline />
    </>
  )
}

export default DashboardMain