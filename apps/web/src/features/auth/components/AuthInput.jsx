import React from 'react';

const AuthInput = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="text-lg font-bold mb-1 ml-2 text-gray-700">{label}</label>
    <input className="rounded-xl px-3 py-2 bg-gray-200" {...props} />
  </div>
);

export default AuthInput;