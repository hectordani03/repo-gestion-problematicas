import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../projectsService.js";

export default function useRequestProject() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    contactEmail: "",
    company: "",
    title: "",
    shortDescription: "",
    description: "",
    projectType: "",
    faculty: "",
    problemType: "",
    deadline: "",
    image: null,
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.name) {
      setError("Debes poner nombre del solicitante del proyecto");
      // setIsLoading(false);
      return;
    }

    if (!form.company) {
      setError(
        "Nombre de la compania es obligatorio. (Independiente si no esta bajo una)"
      );
      // setIsLoading(false);
      return;
    }
    if (!form.title) {
      setError("El titulo del proyecto es obligatorio.");
      // setIsLoading(false);
      return;
    }
    if (!form.projectType) {
      setError("Selecciona una tipo de proyecto valido.");
      // setIsLoading(false);
      return;
    }

    if (!form.faculty) {
      setError("Selecciona una facultad valida.");
      // setIsLoading(false);
      return;
    }

    if (!form.problemType) {
      setError("Selecciona un tipo de problematica valido.");
      // setIsLoading(false);
      return;
    }

    if (!form.deadline) {
      setError("Selecciona una fecha valida.");
      // setIsLoading(false);
      return;
    }

    if (!form.phone && !form.contactEmail) {
      setError(
        "Tiene que haber al menos una forma de contacto (telefono o email)."
      );
      // setIsLoading(false);
      return;
    }

    if (!form.shortDescription && !form.description) {
      setError("Tiene que haber al menos una descripcion.");
      // setIsLoading(false);
      return;
    }

    try {
      const response = await create(form);
      if (!response.success) {
        if (response.logout) navigate("/");

        setError(response.err || "Error en el registro");
        return;
      }
      navigate("/explore-projects/project-details");
    } catch (error) {
      setError(error.message || "Algo salió mal");
    }
  };

  return { form, error, handleChange, handleSubmit };
}
