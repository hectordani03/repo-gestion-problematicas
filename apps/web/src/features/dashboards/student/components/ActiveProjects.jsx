const stats = [
  {
    label: 'App movil de cocina',
    icon: '/avatar.png',
  },
    {
    label: 'App movil de cocina',
    icon: '/avatar.png',
  },
    {
    label: 'App movil de cocina',
    icon: '/avatar.png',
  },
    {
    label: 'App movil de cocina',
    icon: '/avatar.png',
  },
]


const ActiveProjects = () => {
  return (
    <>
    <h1 className="text-xl font-bold my-3">Proyectos activos</h1>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-0">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-2 shadow-lg h-20">
          <div className="flex items-center justify-center gap-4 h-full">
            <img className="w-13 h-auto rounded-full" src={stat.icon} alt="" />
            <span className='text-md font-semibold'>
            {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default ActiveProjects