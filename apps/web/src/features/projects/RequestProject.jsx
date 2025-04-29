import React, { useState } from 'react';

const RequestProject = ({ onClose }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    company: '',
    contactEmail: ''
  });

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proyecto solicitado:', form);
    onClose();
  };

  return (
    <div className="inset-0 flex items-center justify-start z-50 w-10/12 flex-col">

        <h3 className="text-4xl font-bold mb-10 mt-10">Solicitar un Proyecto</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Título del proyecto"
            className="w-full border px-3 py-2 rounded-lg"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción detallada"
            className="w-full border px-3 py-2 rounded-lg"
            rows={4}
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Nombre de la empresa (opcional)"
            className="w-full border px-3 py-2 rounded-lg"
          />
          <input
            name="contactEmail"
            value={form.contactEmail}
            onChange={handleChange}
            placeholder="Correo de contacto"
            className="w-full border px-3 py-2 rounded-lg"
            type="email"
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-lime-600 text-white hover:bg-lime-700 rounded-lg"
            >
              Enviar
            </button>
          </div>
        </form>
    </div>
  );
};

export default RequestProject;
