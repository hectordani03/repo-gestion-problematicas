import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../authService.js";
import { Alerts } from "@/shared/alerts";

export default function useRegister() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    universityId: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validations = [
    {
      condition: !form.acceptTerms,
      message: "Debes aceptar los términos y condiciones",
    },
    {
      condition: !form.email.trim(),
      message: "El correo es obligatorio",
    },
    {
      condition: !form.password,
      message: "La contraseña es obligatoria",
    },
    {
      condition: !form.confirmPassword,
      message: "Confirma tu contraseña",
    },
    {
      condition: form.email.includes("@ucol.mx") && !form.universityId?.trim(),
      message: "Ingresa tu número de cuenta",
    },
  ];

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

    try {
      // Validaciones
      const error = validations.find((v) => v.condition);
      if (error) {
        Alerts.error(error.message);
        return;
      }

      // Mostrar carga
      const loadingAlert = Alerts.loading("Registrando cuenta...");

      // Registrar usuario
      const response = await register(form);
      loadingAlert.close();

      if (!response.success) {
        Alerts.error(response.err || "Error en el registro");
        return;
      }

      // Feedback y navegación
      Alerts.success("¡Registro exitoso!");
      navigate("/dashboard");
    } catch (err) {
      Alerts.error(err.message || "Error en el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    isLoading,
  };
}
