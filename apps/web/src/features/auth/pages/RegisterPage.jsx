// src/features/auth/pages/RegisterPage.jsx
import React from "react";
import AuthForm from "../components/AuthForm";
import AuthInput from "../components/AuthInput";
import Checkbox from "../components/Checkbox";
import SubmitBtn from "../components/SubmitBtn";
import AltLink from "../components/AltLink";
import useRegister from "../hooks/useRegister";
import useLogout from "../hooks/useLogout";
import registerImage from "@/assets/register-image.png";

const RegisterPage = () => {
  const { form, handleChange, handleSubmit, isLoading } = useRegister();
  const { error } = useLogout();
  const showStudentField = form.email.includes("@ucol.mx");

  return (
    <section className="flex items-center justify-between h-full w-full ml-20">
      <div className="flex flex-col items-start gap-10 w-6/12 mt-10">
        {/* Título */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold">
            Únete a{" "}
            <span className="text-5xl font-extrabold text-lime-600">ReUC</span>
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            Regístrate para empezar a guardar y explorar contenido
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <AuthForm onSubmit={handleSubmit}>
          <AuthInput
            label="Correo electrónico"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {showStudentField && (
            <AuthInput
              label="Número de cuenta (8 alumnos / 6 maestros)"
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
            />
          )}

          <AuthInput
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          <AuthInput
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <div className="mt-4">
            <Checkbox
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
            />
          </div>

          <SubmitBtn text="Registrarse" isLoading={isLoading} />

          <hr className="my-3 border-lime-600" />

          <AltLink
            href="/login"
            text="¿Ya tienes una cuenta?"
            link="Inicia sesión"
          />
        </AuthForm>
      </div>

      <div className="flex items-start justify-start w-7/12">
        <img
          className="rounded-3xl w-10/12"
          src={registerImage}
          alt="Registro"
        />
      </div>
    </section>
  );
};

export default RegisterPage;
