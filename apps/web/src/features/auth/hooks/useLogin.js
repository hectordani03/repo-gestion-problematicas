// useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../authService.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const showError = (msg) =>
    MySwal.fire({
      toast: true,
      position: "bottom-end",
      icon: "error",
      title: msg,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!form.email.trim()) {
      showError("El correo es obligatorio");
      setIsLoading(false);
      return;
    }
    if (!form.password) {
      showError("La contraseña es obligatoria");
      setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  return { form, error, isLoading, handleChange, handleSubmit };
};

export default useLogin;