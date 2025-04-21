import avatar from '../../../assets/avatar.png';


const RecentProjects = () => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center mb-7 gap-2">
          <svg className="text-3xl mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11 7.5a.5.5 0 0 0-1 0v2.66l-2.19.874a.5.5 0 1 0 .371.928l2.5-1a.5.5 0 0 0 .314-.464v-3z"/><path fill="currentColor" fillRule="evenodd" d="M14 3.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5h-5c-.63 0-1.22-.296-1.6-.8L5 1H1.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2l1.83-5.49a.75.75 0 0 1 .712-.513h10.767a.5.5 0 0 1 .474.658l-.633 1.9a5.497 5.497 0 0 1-4.648 8.44c-2.52 0-4.64-1.69-5.29-4h-3.71a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h3.5a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h5a1.5 1.5 0 0 1 1.5 1.5zM10.5 15c2.49 0 4.5-2.01 4.5-4.5S12.99 6 10.5 6S6 8.01 6 10.5S8.01 15 10.5 15" clipRule="evenodd"/></svg>
          <h2 className="font-semibold text-lg">Proyectos recientes</h2>
        </div>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-start gap-3">
              <img
                src={avatar}
                alt="Usuario"
                className="w-12 h-auto rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Growth | Web Page</h3>
                <p className="text-sm text-gray-600">
                  This is a longer description to demonstrate the possible content of a page when loading...
                </p>
                <p className="text-xs text-gray-400 mt-1">Fecha de creación: 04/03/25</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default RecentProjects