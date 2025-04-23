import React from 'react';

const AuthForm = ({ children }) => (
  <form className="flex flex-col gap-3 w-full max-w-md">{children}</form>
);

export default AuthForm;