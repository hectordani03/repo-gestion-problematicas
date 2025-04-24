import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../authService.js";

export default function useRegister() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const response = await register(form);

    if (!response.success) {
      setError(response.err);
    } else {
      navigate("/dashboard");
    }
  };

  return { form, error, handleChange, handleSubmit };
}
