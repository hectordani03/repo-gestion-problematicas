import { useEffect, useState } from "react";
import { logout } from "../authService.js";
import { Alerts } from "@/shared/alerts"; // Importación de la librería de alertas

const useLogout = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const doLogout = async () => {
      setError(null);
      try {
        const response = await logout();
        
        if (!response.success) {
          Alerts.error(response.err || "Error al terminar la sesión");
          return;
        }

        // Limpiar almacenamiento local y establecer bandera
        localStorage.removeItem("accessToken");
        sessionStorage.setItem("showLogoutAlert", "true");
        
      } catch (err) {
        // Limpiar credenciales incluso con error
        localStorage.removeItem("accessToken");
        Alerts.error(err.message || "Algo salió mal al cerrar sesión");
      }
    };

    doLogout();
  }, []);

  return { error };
};

export default useLogout;