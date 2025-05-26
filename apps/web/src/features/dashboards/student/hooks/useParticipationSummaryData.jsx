const useParticipationSummaryData = () => {
  const data = [
    {
      label: 'Proyectos activos',
      icon: (
        <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z" />
        </svg>
      ),
      value: 6,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      label: 'Entregas completadas',
      icon: (
        <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z" />
        </svg>
      ),
      value: 8,
      color: 'bg-yellow-100 text-yellow-700',
    },
    {
      label: 'Finalizados',
      icon: (
        <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z" />
        </svg>
      ),
      value: 5,
      color: 'bg-lime-100 text-lime-700',
    },
    {
      label: 'Participación activa',
      icon: (
        <svg className="text-2xl sm:text-3xl flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z" />
        </svg>
      ),
      value: '85%',
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return data;
};

export default useParticipationSummaryData;
