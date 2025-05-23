const items = [
    { name: 'Hacer documentacion', status: 'En progreso' },
    { name: 'Hacer documentacion', status: 'Hecho' },
    { name: 'Hacer documentacion', status: 'Pendiente' },
    { name: 'Hacer documentacion', status: 'En progreso' },
  ]
  
  const statusColors = {
    'En progreso': 'bg-yellow-200 text-yellow-600',
    Hecho: 'bg-green-300 text-green-700',
    Pendiente: 'bg-red-400 text-white',
  }
  
  const TaskList = () => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-xl">
        <div className="flex items-center mb-7 gap-2">
          <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>
          <h2 className="font-semibold text-lg">Tareas pendientes</h2>
        </div>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <>
            <li key={idx} className="flex justify-between items-center mb-3">
              <span>{item.name}</span>
              <span className={`w-5/12 h-8 rounded-xl font-bold text-center pt-1 ${statusColors[item.status]}`}>{item.status}</span>
            </li>
            <hr className="text-gray-300" />
            </>
            
          ))}
        </ul>
      </div>
    )
  }
  
  export default TaskList