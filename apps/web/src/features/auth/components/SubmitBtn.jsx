import React from 'react';

const SubmitBtn = ({text, link}) => (
  <div className='flex py-3 px-4 rounded-xl shadow-md border-1 border-gray-200 w-full font-semibold text-center items-center justify-center text-white bg-lime-700 pointer'>
    <a href={link} className="font-semibold w-full">{text}</a>
  </div>
);

export default SubmitBtn;
