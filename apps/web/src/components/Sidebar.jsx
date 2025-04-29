import { Link } from "react-router-dom"
import { useSidebarData } from '../hooks/useSidebarData';


export default function Sidebar () {
    const {
        openProyectos,
        setOpenProyectos,
        proyectos,
        openFavoritos,
        setOpenFavoritos,
        favoritos,
        openMiembros,
        setOpenMiembros,
        miembros
      } = useSidebarData();
    
  return (
    <aside className="sidebar w-2/12 h- relative shadow-xl">
        <nav>
            <ul className="flex flex-col gap-4 p-4 items-start text-xl mt-8 ml-5">
                <li className="flex items-center gap-4">
                    <Link to="/dashboard" className="flex items-center gap-4">
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"/></svg>
                    Home
                    </Link>
                </li>
                <li className="flex items-center gap-4">
                    <Link to="/request-project" className="flex items-center gap-4">
                        <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28">
                        <path fill="currentColor" d="M8.5 11.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-1 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zm3 5.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M8.5 17a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4.5-4.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m.75 6.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM6 6.75c0 .414.336.75.75.75h14.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0-.75.75"/>
                        </svg>
                        Solicitar un proyecto
                    </Link>
                </li>
                <li className="flex items-center gap-4">
                    <Link to="/explore-projects" className="flex items-center gap-4">
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="IconifyId196504e5616b92da54"><g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4"><path fill="#555" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path strokeLinecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId196504e5616b92da54)"/></svg> 
                    Explorar proyectos
                    </Link>
                </li>
                <li className="flex flex-col items-start w-full">
                    <button
                    onClick={() => setOpenProyectos(!openProyectos)}
                    className="flex items-center gap-4 w-full"
                    >
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="10" height="10" x="12" y="2" fill="currentColor" rx="2"/><path fill="currentColor" d="M12 7h-1c-1.886 0-2.828 0-3.414.586S7 9.114 7 11v2c0 1.886 0 2.828.586 3.414S9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586S17 14.886 17 13v-1h-1c-1.886 0-2.828 0-3.414-.586S12 9.886 12 8z" opacity=".7"/><path fill="currentColor" d="M7 12v1c0 1.886 0 2.828.586 3.414S9.114 17 11 17h1v1c0 1.886 0 2.828-.586 3.414S9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18v-2c0-1.886 0-2.828.586-3.414S4.114 12 6 12z" opacity=".4"/></svg> 
                    Mis proyectos
                    <svg className='text-2xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/></svg>
                    </button>
                    {openProyectos && (
                    <ul className="ml-18 text-base mt-1 space-y-1 w-6/12">
                        <hr className='w-11/12 -translate-x-5 text-gray-400' />
                        {proyectos.map((proyecto) => (
                            <li className='text-start' key={proyecto.id}>{proyecto.nombre}</li>
                        ))}
                    </ul>
                    )}
                </li>
                <li className="flex flex-col items-start w-full">
                    <button
                    onClick={() => setOpenFavoritos(!openFavoritos)}
                    className="flex items-center gap-4 w-full"
                    >
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="M17.562 21.56a1 1 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169"/></svg> 
                    Mis favoritos
                    <svg className='text-2xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/></svg>
                    </button>
                    {openFavoritos && (
                    <ul className="ml-18 text-base mt-1 space-y-1 w-6/12">
                        <hr className='w-11/12 -translate-x-5 text-gray-400' />
                        {favoritos.map((favorito) => (
                            <li className='text-start' key={favorito.id}>{favorito.nombre}</li>
                        ))}
                    </ul>
                    )}
                </li>
                <li className="flex flex-col items-start w-full">
                    <button
                    onClick={() => setOpenMiembros(!openMiembros)}
                    className="flex items-center gap-4 w-full"
                    >
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4zm7.25-2.095c.478-.86.75-1.85.75-2.905a6 6 0 0 0-.75-2.906a4 4 0 1 1 0 5.811M15.466 20c.34-.588.535-1.271.535-2v-1a5.98 5.98 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2z" clip-rule="evenodd"/></svg> 
                    Miembros
                    <svg className='text-2xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/></svg>
                    </button>
                    {openMiembros && (
                    <ul className="ml-18 text-base mt-1 space-y-1 w-6/12">
                        <hr className='w-11/12 -translate-x-5 text-gray-400' />
                        {miembros.map((miembro) => (
                            <li className='text-start' key={miembro.id}>{miembro.nombre}</li>
                        ))}
                    </ul>
                    )}
                </li>
                <li className="flex items-center gap-4">
                    <svg className='text-4xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"/></svg> 
                    Documentos
                </li>
                <li className="flex items-center gap-4">
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22m7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A1 1 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-.293-.707z"/></svg> 
                    Notificaciones
                </li>
                <li className="flex items-center gap-4">
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3"/></svg> 
                    Modo oscuro
                </li>
                <li className="flex items-center gap-4">
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="IconifyId196504e5616b92da57"><g fill="none"><path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28.625v-4a6 6 0 1 0-6-6"/><path fill="#000" fill-rule="evenodd" d="M24 37.625a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"/></g></mask></defs><path fill="#333333" d="M0 0h48v48H0z" mask="url(#IconifyId196504e5616b92da57)"/></svg> 
                    Ayuda
                </li>
                <li className="flex items-center gap-4">
                    <svg className="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg> 
                    Configuracion
                </li>
            </ul>
        </nav>
    </aside>
  )
} 