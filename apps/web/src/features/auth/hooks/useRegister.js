import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../authService.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function useRegister() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    studentId: "",
  });
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    if (!form.confirmPassword) {
      showError("Confirma tu contraseña");
      setIsLoading(false);
      return;
    }

    if (form.email.includes("@ucol.mx") && !form.studentId.trim()) {
      showError("Ingresa tu número de cuenta");
      setIsLoading(false);
      return;
    }

    if (!form.acceptTerms) {
      showError("Debes aceptar los términos y condiciones");
      setIsLoading(false);
      return;
    }

    try {
      const response = await register(form);
      if (!response.success) {
        showError(response.err || "Error en el registro");
        return;
      }
      navigate("/dashboard");
    } catch (err) {
      // errores de ValidationError o inesperados
      showError(err.message || "Algo salió mal");
    } finally {
      setIsLoading(false);
    }
  };

  return { form, handleChange, handleSubmit, isLoading };
}
