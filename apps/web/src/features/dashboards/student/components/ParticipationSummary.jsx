const ParticipacionSummary = () => {
  const data = [
    {
      label: 'Proyectos activos',
      icon: <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>,
      value: 6,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      label: 'Entregas completadas',
      icon: <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>,
      value: 8,
      color: 'bg-yellow-100 text-yellow-700',
    },
    {
      label: 'Finalizados',
      icon: <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>,
      value: 5,
      color: 'bg-green-100 text-green-700',
    },
    {
      label: 'Participación activa',
      icon: <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></svg>,
      value: '85%',
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full">
      <div className="mb-4 sm:mb-6 flex items-center gap-3">
        <svg className="text-gray-600 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21 21H3v-2h18zM8 10H4v7h4zm6-4h-4v11h4zm6-3h-4v14h4z" />
        </svg>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          Resumen de participación
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row  items-start sm:items-center gap-3 rounded-xl p-3 sm:p-4 ${item.color} min-w-0 w-full`}
          >
            <div className="p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
              {item.icon}
            </div>
            <div className="w-full">
              <p className="text-xs sm:text-sm font-medium leading-tight mb-1 break-words">
                {item.label}
              </p>
              <h3 className="text-base sm:text-lg font-bold">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipacionSummary;