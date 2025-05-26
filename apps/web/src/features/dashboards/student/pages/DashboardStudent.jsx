import ActiveProjects from '../components/ActiveProjects'
import TaskList from '../components/StudentTasks'
import Projects from '../../shared/components/Projects'
import ParticipationSummary from '../components/ParticipationSummary'


const DashboardStudent = () => {
  const handleProjectDetails = (project) => {
    console.log('Ver detalles del proyecto:', project)
    // TODO: Implementar navegación a la página de detalles del proyecto
  }

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
      
      <div className="col-span-3 lg:col-span-2 grid gap-4 h-fit">
        <Projects
            dashboardType="student"
            onProjectClick={handleProjectDetails}
            onViewDeliverables={(project) => console.log('Ver entregables del proyecto:', project)}
          />
      </div>
    </div>
    </>
  )
}

export default DashboardStudent