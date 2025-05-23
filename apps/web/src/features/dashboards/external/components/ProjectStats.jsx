const stats = [
  {
    label: 'Miembros Activos',
    value: 28,
    icon: (
      <svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M164.47 195.63a8 8 0 0 1-6.7 12.37H10.23a8 8 0 0 1-6.7-12.37a95.83 95.83 0 0 1 47.22-37.71a60 60 0 1 1 66.5 0a95.83 95.83 0 0 1 47.22 37.71m87.91-.15a95.87 95.87 0 0 0-47.13-37.56A60 60 0 0 0 144.7 54.59a4 4 0 0 0-1.33 6a75.83 75.83 0 0 1 3.63 89.94a4 4 0 0 0 1.07 5.53a112.3 112.3 0 0 1 29.85 30.83a23.92 23.92 0 0 1 3.65 16.47a4 4 0 0 0 3.95 4.64h60.3a8 8 0 0 0 7.73-5.93a8.22 8.22 0 0 0-1.17-6.59"/></svg>
    )
  },
  {
    label: 'Proyectos este Mes',
    value: 2,
    icon: (
<svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8h14V6H5zm0 0V6zm0 14q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v5.675q-.475-.225-.975-.375T19 11.075V10H5v10h6.3q.175.55.413 1.05t.562.95zm13 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z"/></svg>
    )    
  },
  {
    label: 'Proyectos en Curso',
    value: 12,
    icon: (
<svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M503.58 126.2a16.85 16.85 0 0 0-27.07-4.55l-51.15 51.15a11.15 11.15 0 0 1-15.66 0l-22.48-22.48a11.17 11.17 0 0 1 0-15.67l50.88-50.89a16.85 16.85 0 0 0-5.27-27.4c-39.71-17-89.08-7.45-120 23.29c-26.81 26.61-34.83 68-22 113.7a11 11 0 0 1-3.16 11.1L114.77 365.1a56.76 56.76 0 1 0 80.14 80.18L357 272.08a11 11 0 0 1 10.9-3.17c45 12 86 4 112.43-22c15.2-15 25.81-36.17 29.89-59.71c3.83-22.2 1.41-44.44-6.64-61"/><path fill="currentColor" d="M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 0 0 383.72 464h1.1a30.1 30.1 0 0 0 21-8.62l.07-.07l33.43-33.37a29.46 29.46 0 0 0-2-43.53ZM118.54 214.55a20.5 20.5 0 0 0-3-10.76a2.76 2.76 0 0 1 2.62-4.22h.06c.84.09 5.33.74 11.7 4.61c4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 0 0 7.22 22.12l66.23-61.55a33.73 33.73 0 0 0-21.6-9.2a3 3 0 0 1-.21-.26l-.65-.69l-24.54-33.84a28.45 28.45 0 0 1-4-26.11a35.23 35.23 0 0 1 11.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a53 53 0 0 1 15.19.94a66 66 0 0 1 7.06 2.13a15.5 15.5 0 0 0 2.15.63a16 16 0 0 0 16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a92 92 0 0 0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.1 123.1 0 0 0-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222 222 0 0 0 63.7 129.5a27 27 0 0 0-4.7 11.77a7.33 7.33 0 0 1-7.71 6.17H50.2a20.65 20.65 0 0 0-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 0 0-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0 0 14.65 6a20.65 20.65 0 0 0 14.59-5.9l29.46-28.79a20.5 20.5 0 0 0 6.17-14.76"/></svg>
    )
  },
  {
    label: 'Proyectos Finalizados',
    value: 7,
    icon: (
<svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M5 4v24h2v-8h20V4zm2 2h3v3h3V6h3v3h3V6h3v3h3v3h-3v3h3v3h-3v-3h-3v3h-3v-3h-3v3h-3v-3H7v-3h3V9H7zm3 6v3h3v-3zm3 0h3V9h-3zm3 0v3h3v-3zm3 0h3V9h-3z"/></svg>
    )
  },
  {
    label: 'Tiempo promedio de finalización',
    value: '6 meses',
    icon: (
      <svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3q-.425 0-.712-.288T9 2t.288-.712T10 1h4q.425 0 .713.288T15 2t-.288.713T14 3zm2 11q.425 0 .713-.288T13 13V9q0-.425-.288-.712T12 8t-.712.288T11 9v4q0 .425.288.713T12 14m0 8q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l.7-.7q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.7.7Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22"/></svg>
    )
  }
]


const ProjectStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-0">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-4">
            {stat.icon}
            <span className='text-sm font-semibold'>
            {stat.label}
            </span>
          </div>
          <div className="text-2xl font-bold text-center relative">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}

export default ProjectStats