import React, { useState } from 'react';
import RequestProjectForm from '../components/RequestProjectForm';
import useRequestProject from '../hooks/useRequestProject';

const RequestProject = () => {
  const { form, error, handleChange, handleSubmit } = useRequestProject();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section className="flex flex-col items-center justify-start w-full min-h-screen p-10">
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-5xl font-bold">
          Solicitar un <span className="text-lime-600">proyecto</span>
        </h1>
        <button
          type="button"
          onClick={() => setShowHelp(!showHelp)}
          className="text-blue-600 hover:text-blue-800"
          title="¿Cómo llenar el formulario?"
        >
<svg className='text-black w-8 h-auto cursor-pointer mt-3' xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none" stroke="#4E4E4E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></g></svg>
        </button>
      </div>

      {showHelp && (
        <div className="max-w-4xl w-full bg-green-100 border border-green-300 text-sm text-green-800 p-4 rounded mb-8">
          <p className="mb-2 font-semibold">Recomendaciones para llenar el formulario:</p>
          <ul className="list-disc pl-5 space-y-1">
          </ul>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      )}

      <RequestProjectForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default RequestProject;