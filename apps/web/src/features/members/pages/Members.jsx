import React from 'react';
import MembersList from '../components/MembersList';

const Members = () => {
  return (
    <section className="flex flex-col items-center w-full min-h-screen px-10 pt-10">
      <h1 className="text-5xl font-bold mb-8">
        <span className="text-lime-600">Miembros</span>
      </h1>

      <MembersList />
    </section>
  );
};

export default Members;
