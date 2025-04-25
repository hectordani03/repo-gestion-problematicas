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

    // Validación del checkbox
    if (!form.acceptTerms) {
      showError("Debes aceptar los términos y condiciones");
      setIsLoading(false);
      return;
    }

    const isUcolEmail = form.email.endsWith("@ucol.mx");

    if (isUcolEmail) {
      const studentId = form.studentId?.trim();

      if (!studentId) {
        showError("Ingresa tu número de cuenta.");
        setIsLoading(false);
        return;
      }

      if (studentId.length !== 8 && studentId.length !== 6) {
        showError("El número de cuenta debe tener 8 dígitos (alumno) o 6 (maestro).");
        setIsLoading(false);
        return;
      }

      if (!/^\d+$/.test(studentId)) {
        showError("El número de cuenta solo debe contener números.");
        setIsLoading(false);
        return;
      }
    }

    try {
      const response = await register(form);

      if (!response.success) {
        showError(response.err || "Error desconocido");
        setIsLoading(false);
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      showError(err.message || "Algo salió mal");
    } finally {
      setIsLoading(false);
    }
  };

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

  return { form, handleChange, handleSubmit, isLoading };
}
