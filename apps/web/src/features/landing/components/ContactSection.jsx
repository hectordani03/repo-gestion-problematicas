import React, { useState } from 'react';
import { sanitizeInput } from '../utils/inputSanitizer';
import { validateRequired, validateEmail } from '../utils/formValidator'; // Importa las nuevas funciones
import { Alerts } from '../../../shared/alerts'; // Assuming alerts.js is in utils

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;

    if (id !== 'email') {
      newValue = sanitizeInput(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));

    if (errors[id]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: '',
      }));
    }
    setFormStatus('');
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    const nombreError = validateRequired(formData.nombre, 'nombre');
    if (nombreError) {
      newErrors.nombre = nombreError;
      isValid = false;
    }

    const emailRequiredError = validateRequired(formData.email, 'correo electrónico');
    if (emailRequiredError) {
      newErrors.email = emailRequiredError;
      isValid = false;
    } else {
      const emailFormatError = validateEmail(formData.email);
      if (emailFormatError) {
        newErrors.email = emailFormatError;
        isValid = false;
      }
    }

    const asuntoError = validateRequired(formData.asunto, 'asunto');
    if (asuntoError) {
      newErrors.asunto = asuntoError;
      isValid = false;
    }

    const mensajeError = validateRequired(formData.mensaje, 'mensaje');
    if (mensajeError) {
      newErrors.mensaje = mensajeError;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formUrl = "https://formspree.io/f/mnnvanqj"; // Your Formspree ID

        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('email', formData.email);
        data.append('asunto', formData.asunto);
        data.append('mensaje', formData.mensaje);

        const response = await fetch(formUrl, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          Alerts.success('¡Mensaje enviado con éxito!'); // Use your success alert
          setFormStatus('');
          setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
          setErrors({});
        } else {
          const responseData = await response.json();
          if (Object.hasOwn(responseData, 'errors')) {
            Alerts.error(`Error: ${responseData.errors.map(error => error.message).join(", ")}`); // Use your error alert
            setFormStatus(`Error al enviar: ${responseData.errors.map(error => error.message).join(", ")}`);
          } else {
            Alerts.error('Oops! Hubo un problema al enviar tu formulario.'); // Use your error alert
            setFormStatus('Oops! Hubo un problema al enviar tu formulario.');
          }
        }
      } catch (error) {
        Alerts.error('Oops! Hubo un problema de conexión al enviar tu formulario.'); // Use your error alert
        setFormStatus('Oops! Hubo un problema de conexión al enviar tu formulario.');
        console.error('Error al enviar el formulario:', error);
      }
    } else {
      Alerts.warning('Por favor, corrige los errores en el formulario.'); // Use your warning alert for validation issues
      setFormStatus('Por favor, corrige los errores en el formulario.');
      console.log('Formulario con errores, no se pudo enviar.');
    }
  };

  return (
    <section className="px-10 py-16 bg-white dark:bg-gray-900" id="contacto">
      <div className="mx-20">
        <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Contáctanos</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
          ¿Tienes preguntas, sugerencias o necesitas más información?{' '}
          <a href="#form-contacto" className="text-lime-700 hover:underline font-bold">Escríbenos</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <form className="space-y-6" id="form-contacto" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 ${
                  errors.nombre ? 'border-red-500 ring-red-500' : ''
                }`}
                required
              />
              {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 ${
                  errors.email ? 'border-red-500 ring-red-500' : ''
                }`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="Asunto a resolver"
                value={formData.asunto}
                onChange={handleChange}
                className={`w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 ${
                  errors.asunto ? 'border-red-500 ring-red-500' : ''
                }`}
                required
              />
              {errors.asunto && <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Tu mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full p-3 rounded-md bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 resize-none ${
                  errors.mensaje ? 'border-red-500 ring-red-500' : ''
                }`}
                required
              ></textarea>
              {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
            </div>

            <div className="flex justify-start mt-6">
              <button
                type="submit"
                className={`px-8 py-3 bg-lime-700 text-white font-semibold rounded-lg transition duration-300 shadow-md ${
                  Object.values(formData).some(val => !val.toString().trim()) || Object.keys(errors).some(key => errors[key])
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-lime-800'
                }`}
                disabled={Object.values(formData).some(val => !val.toString().trim()) || Object.keys(errors).some(key => errors[key])}
              >
                Enviar
              </button>
            </div>

            {formStatus && (
              <p className={`mt-4 text-center font-semibold ${formStatus.includes('Error') || formStatus.includes('corrige') ? 'text-red-600' : 'text-green-600'}`}>
                {formStatus}
              </p>
            )}
          </form>

          <div className="bg-gray-100 p-8 rounded-lg shadow-sm dark:bg-gray-800 mt-15">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informacion de contacto adicional</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-bold">Correo:</span>{' '}
                <a href="mailto:reuc@ucol.mx" className="text-lime-700 hover:underline">reuc@ucol.mx</a>
              </p>
              <p>
                <span className="font-bold">Teléfono:</span>{' '}
                <a href="mailto:reuc@ucol.mx" className="text-lime-700 hover:underline">+52 312 123 4567</a>
              </p>
              <p>
                <span className="font-bold">Dirección:</span>{' '}
                <span className="text-lime-700">Universidad de Colima, Av. Universidad No. 333, Colima, Col.</span>
              </p>
              <p className="font-bold mt-6 mb-2 text-xl">Redes sociales:</p>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold">Facebook:</span>{' '}
                  <a href="https://facebook.com/REUCOficial" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">REUC Oficial</a>
                </li>
                <li>
                  <span className="font-bold">Instagram:</span>{' '}
                  <a href="https://instagram.com/reuc__ucol" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">@reuc__ucol</a>
                </li>
                <li>
                  <span className="font-bold">LinkedIn:</span>{' '}
                  <a href="https://linkedin.com/company/REUCUCOL" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">REUC UCOL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;