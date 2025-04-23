import React from 'react';
import googleIcon from '@/assets/google-icon.webp';

const GoogleBtn = () => (
  <div className='flex max-w-sm py-2 px-4 rounded-3xl shadow-md border-1 border-gray-200 w-full max-w-sm font-semibold text-center items-center justify-center py-2'>
    <img className='w-8 h-8 mr-2' src={googleIcon} alt="" />
    <a className="font-semibold">Registrarse con Google</a>
  </div>
);

export default GoogleBtn;