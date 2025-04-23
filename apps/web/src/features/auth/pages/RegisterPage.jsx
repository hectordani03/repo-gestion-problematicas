import React, { useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import AuthInput from '../components/AuthInput';
import Checkbox from '../components/Checkbox';
import SubmitBtn from '../components/SubmitBtn';
import AltLink from '../components/AltLink';
import useRegister from '../hooks/useRegister';
import registerImage from '@/assets/register-image.png';

const RegisterPage = () => {
  const { form, handleChange, handleSubmit } = useRegister();
  const [showStudentField, setShowStudentField] = useState(false);
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    setShowStudentField(form.email.includes('@ucol.mx'));
  }, [form.email]);

  return (
    <section className='flex items-center justify-between h-full w-full ml-20'>
      <div className="flex flex-col items-start justify-start gap-10 w-6/12 h-full mt-10">
        <div className="flex flex-col gap-4 justify-between w-8/12 text-start">
          <h2 className="text-5xl font-bold">
            Únete a <span className='text-5xl font-extrabold text-lime-600'>ReUC</span>
          </h2>
          <p className="text-gray-800 font-semibold text-2xl w-8/12">
            Regístrate para empezar a guardar y explorar contenido
          </p>
        </div>

        <AuthForm onSubmit={handleSubmit}>
          <AuthInput label="Nombre de usuario" name="username" value={form.username} onChange={handleChange} />
          <AuthInput label="Correo electrónico" name="email" value={form.email} onChange={handleChange} />
          {showStudentField && (
            <div className="transition-all duration-300 opacity-100">
              <AuthInput
                label="Número de cuenta (8 dígitos)"
                name="studentId"
                value={studentId}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,8}$/.test(value)) {
                    setStudentId(value);
                  }
                }}
              />
            </div>
          )}
          <AuthInput label="Contraseña" name="password" type="password" value={form.password} onChange={handleChange} />
          <AuthInput label="Confirmar contraseña" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
          <Checkbox />
          <SubmitBtn text='Registrarse' link='/login' />
          <hr className='text-lime-600 my-3' />
          <AltLink href="/login" text='¿Ya tienes una cuenta?' link='Inicia sesión' />
        </AuthForm>
      </div>

      <div className='flex items-start justify-start w-7/12'>
        <img className='rounded-3xl w-10/12' src={registerImage} alt="Registro" />
      </div>
    </section>
  );
};

export default RegisterPage;
