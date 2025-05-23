const items = [
    { name: 'Growth | Web Page', status: 'in-progress' },
    { name: 'Growth | Web Page', status: 'done' },
    { name: 'Growth | Web Page', status: 'pending' },
    { name: 'Growth | Web Page', status: 'in-progress' },
  ]
  
  const statusColors = {
    'in-progress': 'bg-yellow-400',
    done: 'bg-green-500',
    pending: 'bg-red-500',
  }
  
  const ProjectList = () => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-xl">
        <div className="flex items-center mb-7 gap-2">
          <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>
          <h2 className="font-semibold text-lg">Total de proyectos solicitados</h2>
        </div>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <>
            <li key={idx} className="flex justify-between items-center mb-3">
              <span>{item.name}</span>
              <span className={`w-3 h-3 rounded-full ${statusColors[item.status]}`}></span>
            </li>
            <hr className="text-gray-300" />
            </>
            
          ))}
        </ul>
      </div>
    )
  }
  
  export default ProjectList