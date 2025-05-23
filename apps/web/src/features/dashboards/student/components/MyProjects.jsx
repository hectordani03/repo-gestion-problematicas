import avatar from '/avatar.png';

const getStatusStyle = (status) => {
  switch (status.toLowerCase()) {
    case 'activo':
      return 'bg-green-200 text-green-800';
    case 'pausado':
      return 'bg-yellow-200 text-yellow-800';
    case 'finalizado':
      return 'bg-gray-200 text-gray-700';
    default:
      return 'bg-gray-200 text-gray-600';
  }
};

const projects = [
  { id: 1, name: 'Growth | Web Page', status: 'Activo' },
  { id: 2, name: 'Landing | Marketing', status: 'Pausado' },
  { id: 3, name: 'Admin Panel', status: 'Finalizado' },
  { id: 4, name: 'E-commerce App', status: 'Activo' },
];

const MyProjects = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="flex items-center mb-7 gap-2">
        <svg className="text-3xl mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11 7.5a.5.5 0 0 0-1 0v2.66l-2.19.874a.5.5 0 1 0 .371.928l2.5-1a.5.5 0 0 0 .314-.464v-3z"/><path fill="currentColor" fillRule="evenodd" d="M14 3.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5h-5c-.63 0-1.22-.296-1.6-.8L5 1H1.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2l1.83-5.49a.75.75 0 0 1 .712-.513h10.767a.5.5 0 0 1 .474.658l-.633 1.9a5.497 5.497 0 0 1-4.648 8.44c-2.52 0-4.64-1.69-5.29-4h-3.71a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h3.5a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h5a1.5 1.5 0 0 1 1.5 1.5zM10.5 15c2.49 0 4.5-2.01 4.5-4.5S12.99 6 10.5 6S6 8.01 6 10.5S8.01 15 10.5 15" clipRule="evenodd"/></svg>
        <h2 className="font-semibold text-lg">Mis proyectos</h2>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="flex items-start gap-3 mb-4">
          <img
            src={avatar}
            alt="Usuario"
            className="w-12 h-auto rounded-full object-cover"
          />
          <div className="w-full">
            <h3 className="font-semibold">{project.name}</h3>
            <div className="flex gap-5">
              <p className="text-sm text-gray-600 flex-1">
                This is a longer description to demonstrate the possible content of a page when loading...
              </p>
              <span className={`${getStatusStyle(project.status)} px-4 py-1 rounded-xl text-sm h-fit`}>
                {project.status}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Colaborador</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
