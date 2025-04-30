import React from 'react';
import AuthForm from '../components/AuthForm';
import AuthInput from '../components/AuthInput';
import SubmitBtn from '../components/SubmitBtn';
import AltLink from '../components/AltLink';
import useLogin from '../hooks/useLogin';
import useLogout from "../hooks/useLogout";
import Checkbox from '../components/Checkbox';
import loginImage from '@/assets/login-image.png';
import reucAppImage from '@/assets/reuc-app.png';
import appStoreImage from '@/assets/app-store.png';
import googlePlayImage from '@/assets/play-store.png';

const LoginPage = () => {
  const { form, error, isLoading, handleChange, handleSubmit } = useLogin();
  const { logoutError } = useLogout();

  return (
    <section className='flex items-center justify-between h-full w-full ml-20'>
        <div className="flex flex-col items-start justify-start gap-10 w-6/12 h-full mt-10">
          <div className="flex flex-col gap-4 justify-between w-8/12 text-start">
            <h2 className="text-5xl font-bold">Bienvenido a <span className='text-5xl font-extrabold text-lime-600'>ReUC</span> </h2>
            <p className="text-gray-800 font-semibold text-2xl w-8/12">Accede a tu cuenta para continuar explorando el repositorio</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          {logoutError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {logoutError}
            </div>
          )}
          <AuthForm onSubmit={handleSubmit}>
            <AuthInput label="Correo electrónico" name="email" value={form.email} onChange={handleChange} />
            <AuthInput label="Contraseña" name="password" type="password" value={form.password} onChange={handleChange} />
            <AltLink href="/register" text='No tienes una cuenta?' link='Registrate' />
            <SubmitBtn text='Iniciar sesion' isLoading={isLoading} />
            <hr className='text-lime-600 my-3' />
          </AuthForm>
          <div className='flex items-center gap-5'>
            <div className='flex flex-col items-center'>
              <h3 className="text-4xl font-extrabold text-lime-600">ReUC APP</h3>
              <p className='text-2xl font-bold mb-7'>Disponible en:</p>
              <div className='flex flex-col items-center gap-3'>
                <img src={appStoreImage} alt="" />
                <img src={googlePlayImage} alt="" />
              </div>
            </div>
            <img src={reucAppImage} alt="" />

          </div>
        </div>
        <div className='flex items-start justify-start w-7/12
        '>
            <img className='rounded-3xl w-10/12' src={loginImage} alt="" />
        </div>
    </section>
  );
};

export default LoginPage;
