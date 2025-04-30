import avatar from '../../../assets/avatar.png';

const RecentActivity = () => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center mb-7 gap-2">
          <svg className="text-3xl " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18A10 10 0 1 0 2.9 7.9M2 4v4h4m6-1v5l3 3"/></svg>
          <h2 className="font-semibold text-lg">Actividad recientes</h2>
        </div>
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="flex items-center gap-3 mb-3">
            <img src={avatar} className="w-10 h-10 rounded-full" />
            <p className="text-sm">Juan modificó el archivo 'diseño-final.pdf' hace 2 horas</p>
          </div>
        ))}
      </div>
    )
  }
  
  export default RecentActivity