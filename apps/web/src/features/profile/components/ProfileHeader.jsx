import React from 'react';
import avatar from '@/assets/avatar.png';

const ProfileHeader = ({ onEdit }) => (
  <div className="flex items-center justify-between p-6 rounded-xl">
    <div className="flex items-center gap-6">
      <img src={avatar} alt="Avatar" className="w-52 h-52 rounded-full border-4 border-lime-600" />
      <div className='ml-1'>
        <h2 className="text-2xl font-bold">Empresa Inc.</h2>
        <p className="text-gray-500">Manzanillo, Colima</p>
      </div>
    </div>
    <div className="flex gap-4 w-4/12">
      <button
        onClick={onEdit}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition w-6/12 font-bold"
      >
        Editar Perfil
      </button>
      <button
        className="px-4 py-2 bg-lime-700 text-white hover:bg-lime-700 rounded-lg transition w-6/12 font-bold"
      >
        Contactar
      </button>
    </div>
  </div>
);

export default ProfileHeader;
