const updates = [
    {
      time: 'Hace 19 horas',
      text: 'jsdljdjsasdsksjdkajksajdkasjdlkasjdkasjdds jsdajsadjsakdjaskdjsakdsadsadsads kdsaksadsadsda',
    },
    {
      time: 'Hace 22 horas',
      text: 'jsdljdjsasdsksjdkajksajdkasjdlkasjdkasjdds jsdajsadjsakdjaskdjsakdsadsadsads kdsaksadsadsda',
    },
    {
      time: 'Ayer',
      text: 'jsdljdjsasdsksjdkajksajdkasjdlkasjdkasjdds jsdajsadjsakdjaskdjsakdsadsadsads kdsaksadsadsda',
    },
    {
      time: 'Ayer',
      text: 'jsdljdjsasdsksjdkajksajdkasjdlkasjdkasjdds jsdajsadjsakdjaskdjsakdsadsadsads kdsaksadsadsda',
    },
    {
      time: 'Ayer',
      text: 'jsdljdjsasdsksjdkajksajdkasjdlkasjdkasjdds jsdajsadjsakdjaskdjsakdsadsadsads kdsaksadsadsdaTSSSSSS',
    },
  ]
  
  const RecentActivity = () => {
    return (
      <div className="rounded-2xl p-6 shadow-xl w-3/12 mt-3 mr-5 h-fit">
        <h2 className="text-lg font-bold mb-6">Últimos cambios</h2>
        <div className="relative pl-4 ">
          <div className="absolute top-0 left-2 w-0.5 h-full bg-gray-200"></div>
          {updates.map((update, index) => (
            <div key={index} className="relative mb-8 pl-4">
              <span className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-green-600 border-2 border-white shadow"></span>
              <p className="text-sm text-gray-600 font-medium mb-1">{update.time}</p>
              <p className="text-sm text-gray-800 break-words">{update.text}</p>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <button className="text-green-600 text-sm font-semibold flex items-center gap-1 hover:underline">
            Ver todos
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    )
  }
  
  export default RecentActivity
  