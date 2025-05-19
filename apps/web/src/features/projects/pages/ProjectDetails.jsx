import ProjectImage from '../components/ProjectImage';
import ProjectSummary from '../components/ProjectSummary';
import ProjectInfoCard from '../components/ProjectInfoCard';

export default function ProjectDetails() {
  const applicantInfo = [
    { label: 'Nombre del solicitante', value: 'Jose Joshua Rodriguez' },
    { label: 'Teléfono de contacto', value: '+52 314 166 9964' },
    { label: 'Correo de contacto', value: 'joseavila@ucol.mx' },
    { label: 'Empresa', value: 'Woodward S.A de C.V' },
  ];

  const projectInfo = [
    { label: 'Tipo de proyecto', value: 'Proyecto de Tesis' },
    { label: 'Facultad', value: 'Facultad de Ingeniería Electromecánica' },
    { label: 'Tipo de problemática', value: 'Tecnológica' },
    { label: 'Fecha límite', value: '15 de Abril del 2025' },
  ];

  return (
    <section className="w-full px-10 py-12">
      <h1 className="text-4xl font-bold">
        Detalles del <span className="text-lime-700">proyecto</span>
      </h1>

    <div className='flex h-screen mt-10'>

        <div className="w-6/12">
        <ProjectImage />
        <ProjectSummary
            title="Aplicación móvil para cocina"
            description={`Aplicación móvil de recetario para los estudiantes de la carrera de gastronomía. Aplicación móvil de recetario para los estudiantes de la carrera de gastronomía. Aplicación móvil de recetario para los estudiantes de la carrera de gastronomíaAplicación móvil de recetario para los estudiantes de la carrera de gastronomía. Aplicación móvil de recetario para los estudiantes de la carrera de gastronomía. Aplicación móvil de recetario para los estudiantes de la carrera de gastronomía`}
            />
        </div>

        <div className="w-7/12">
        <h2 className="text-3xl font-bold mb-3 ml-3">
        Informacion del <span className="text-lime-700">solicitante</span>
        </h2>
          <ProjectInfoCard title="Información del solicitante" items={applicantInfo} />
          <h2 className="text-3xl font-bold mb-3 ml-3 mt-10">
        Informacion del <span className="text-lime-700">proyecto</span>
        </h2>
          <ProjectInfoCard title="Información del proyecto" items={projectInfo} />

          <div className="flex flex-col gap-3 pt-2 w-11/12">
            <div className='flex gap-5'>
                <button className="px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 font-semibold w-6/12">
                Aceptar proyecto
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold w-6/12">
                Rechazar proyecto
                </button>
            </div>
            <button className="px-4 py-2 border-2 border-lime-600 text-lime-700 font-semibold rounded-lg hover:bg-lime-50">
              Ponerse en contacto
            </button>
          </div>
        </div>
        </div>
    </section>
  );
}
