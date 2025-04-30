import React from 'react';

const AuthForm = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full max-w-md">{children}</form>
);

export default AuthForm;
