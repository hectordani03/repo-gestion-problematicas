import React, { useState } from 'react';
import MemberCard from './MemberCard';

const members = [
  {
    name: 'Daniel Martínez',
    position: 'Desarrollador Backend',
    department: 'Portal de Servicios Escolares',
    email: 'daniel.martinez@universidad.com',
    phone: '+52 312 111-2233',
    status: 'active',
  },
  {
    name: 'Laura Sánchez',
    position: 'Diseñadora UX/UI',
    department: 'App móvil de cocina',
    email: 'laura.sanchez@universidad.com',
    phone: '+52 312 222-3344',
    status: 'active',
  },
  {
    name: 'Carlos Gómez',
    position: 'Project Manager',
    department: 'Gestión de Seguros',
    email: 'carlos.gomez@universidad.com',
    phone: '+52 312 333-4455',
    status: 'active',
  },
  {
    name: 'Ana Rivera',
    position: 'Desarrolladora Frontend',
    department: 'App Ambiental ODS 13',
    email: 'ana.rivera@universidad.com',
    phone: '+52 312 444-5566',
    status: 'active',
  },
  {
    name: 'Luis Torres',
    position: 'Especialista en Bases de Datos',
    department: 'Plataforma Educativa',
    email: 'luis.torres@universidad.com',
    phone: '+52 312 555-6677',
    status: 'active',
  },
];

const MembersList = () => {
  const [search, setSearch] = useState('');

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 px-5 py-3 rounded-full border border-gray-300 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mb-10">
        {filteredMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            position={member.position}
            department={member.department}
            email={member.email}
            phone={member.phone}
            status={member.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
