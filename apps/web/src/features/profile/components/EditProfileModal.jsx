import React, { useState } from 'react';

const EditProfileModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: 'Empresa Inc.', location: 'Manzanillo, Colima', description: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); onClose(); };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-96 p-6 relative transition-transform transform scale-100">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">✕</button>
        <h3 className="text-xl font-semibold mb-4">Editar Perfil</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="location" value={form.location} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={3} />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-lime-600 text-white hover:bg-lime-700 rounded-lg">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;