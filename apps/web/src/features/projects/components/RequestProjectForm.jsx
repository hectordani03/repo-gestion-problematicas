import React, {useState} from 'react';

const RequestProjectForm = ({ form, handleChange, handleSubmit }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col gap-6 bg-gray-50 p-10 rounded-xl shadow-lg">
      <div>
        <label className="block mb-2 font-semibold text-gray-700">Nombre del solicitante</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Teléfono de contacto</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="1234567890"
          type="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Correo de contacto</label>
        <input
          name="contactEmail"
          value={form.contactEmail}
          onChange={handleChange}
          placeholder="ejemplo@correo.com"
          type="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Empresa</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Nombre de tu empresa"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Título del proyecto</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título atractivo y claro"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Descripción corta</label>
        <input
          name="shortDescription"
          value={form.shortDescription}
          onChange={handleChange}
          placeholder="Resumen breve del proyecto"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Descripción detallada</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe el proyecto que necesitas"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
          rows={5}
          required
        />
      </div>

      <div>
        <label className="mb-2 font-semibold text-gray-700 flex items-center gap-2">
          Tipo de proyecto
          <button
            type="button"
            onClick={() => setShowInfo((prev) => !prev)}
            className="text-blue-600 hover:text-blue-800"
          >
          <svg className='text-black w-5 h-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none" stroke="#4E4E4E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></g></svg>
          </button>
        </label>

        {showInfo && (
          <div className="mb-2 p-3 bg-green-100 border border-green-300 text-green-800 rounded text-sm">
            Este campo indica para qué tipo de actividad académica será útil tu proyecto. Por ejemplo:
            <ul className="list-disc pl-5 mt-1">
              <li><strong>Tesis</strong>: para estudiantes que desarrollen investigación final y tiene una duración de un año y puede ser desarrollada por equipos de 1 a 5 integrantes, con un tiempo variable según el proyecto.
              </li>
              <li><strong>Servicio Social Constitucional</strong>: proyectos de beneficio comunitario y se lleva a cabo durante un semestre con equipos mixtos de 1 a 4 integrantes, con un tiempo total de 480 horas.
              </li>
              <li><strong>Proyectos Integradores</strong>: Tienen una duración de un semestre y son desarrollados por equipos de 4 a 5 integrantes. El tiempo de dedicación variará según el equipo y la naturaleza del proyecto.
              </li>
              <li><strong>Practicas Profesionales</strong>: Se realizan a lo largo de un semestre con equipos mixtos sin un número fijo de participantes, con un tiempo de dedicación de 50 horas.
              </li>
              <li><strong>Proyectos de Investigacion</strong>: Se realizan en un plazo de al menos un año hasta tres, involucra profesores investigadores, una dependencia externa y alumnos.
              </li>
            </ul>
          </div>
        )}

        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="tesis">Tesis</option>
          <option value="servicio">Servicio Social Constitucional</option>
          <option value="proyecto-integrador">Proyectos Integradores</option>
          <option value="practicas-profesionales">Practicas Profesionales</option>
          <option value="proyecto-investigacion">Proyectos de Investigacion</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Facultad sugerida</label>
        <select
          name="faculty"
          value={form.faculty}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          <option value="">Selecciona una facultad</option>
          <option value="FIE">FIE</option>
          <option value="FACIMAR">FACIMAR</option>
          <option value="FECAM">FECAM</option>
          <option value="EDUC">EDUC</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Tipo de problemática</label>
        <select
          name="problemType"
          value={form.problemType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          <option value="">Selecciona una opción</option>
          <option value="ambiental">Ambiental</option>
          <option value="tecnologica">Tecnológica</option>
          <option value="social">Social</option>
          <option value="logistica">Logística</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Fecha límite estimada</label>
        <input
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">Imagen del proyecto</label>
        <input
          name="image"
          onChange={handleChange}
          type="file"
          accept="image/*"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      <div className="flex justify-end gap-4 pt-6">
        <button
          type="reset"
          className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold transition"
        >
          Limpiar
        </button>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-lime-600 hover:bg-lime-700 text-white font-semibold transition"
        >
          Enviar solicitud
        </button>
      </div>
    </form>
  );
};

export default RequestProjectForm;