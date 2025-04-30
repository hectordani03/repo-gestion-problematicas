const ProjectSummary = () => {
    const data = [
      { label: 'Solicitados', color: 'bg-blue-500', count: 6 },
      { label: 'En curso', color: 'bg-yellow-400', count: 8 },
      { label: 'Finalizados', color: 'bg-green-500', count: 5 },
      { label: 'Pendientes', color: 'bg-red-500', count: 3 },
    ]
  
    return (
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center mb-7 gap-2">
          <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 21H3v-2h18zM8 10H4v7h4zm6-4h-4v11h4zm6-3h-4v14h4z"/></svg>
          <h2 className="font-semibold text-lg">Resumen de proyectos</h2>
        </div>
        <ul className="space-y-3">
          {data.map((item, i) => (
            <li key={i} className="flex justify-start items-center">
              <span>{item.label}</span>
              <div className="flex items-center gap-2">
                <div className={`relative w-42 mx-4 h-7 rounded-xl ${item.color}`}></div>
                <span>{item.count}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default ProjectSummary
  