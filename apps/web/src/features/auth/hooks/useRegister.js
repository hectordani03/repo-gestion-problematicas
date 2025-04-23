import { useState } from 'react';

const useRegister = () => {
  const [form, setForm] = useState({ fullName: '', email: '', username: '', password: '', confirmPassword: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Registrando...', form);
  };
  return { form, handleChange, handleSubmit };
};

export default useRegister;