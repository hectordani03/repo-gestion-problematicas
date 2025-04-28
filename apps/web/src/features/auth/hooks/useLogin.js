import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../authService.js";

const useLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email.trim()) {
      setError("El correo es obligatorio");
      return;
    }
    if (!form.password) {
      setError("La contraseña es obligatoria");
      return;
    }

    try {
      const response = await login(form);
      if (!response.success) {
        setError(response.err || "Error al iniciar sesion");
        return;
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Algo salió mal");
    } finally {
      // setIsLoading(false);
    }
  };

  return { form, error, handleChange, handleSubmit };
};

export default useLogin;
