import React from 'react';

const AuthImage = ({ src }) => (
  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
);

export default AuthImage;