import ActiveProjects from '../components/ActiveProjects'
import TaskList from '../components/TaskList'
import MyProjects from '../components/MyProjects'
import ParticipationSummary from '../components/ParticipationSummary'
// import Timeline from '@/features/dashboards/dashboard/components/Timeline'


const DashboardStudent = () => {
  return (
    <>
    <div className="p-4 grid gap-4 xl:grid-cols-3 w-12/12">
      <div className="col-span-3 items-start">
        <ActiveProjects />
      </div>
      <div className="col-span-3 lg:col-span-1">
        <TaskList />
        <div className="mt-5 w-full">
          <ParticipationSummary />
        </div>
      </div>
      
      <div className="col-span-3 lg:col-span-2 grid gap-4">
        <MyProjects />
      </div>
    </div>
    {/* <Timeline /> */}
    </>
  )
}

export default DashboardStudent