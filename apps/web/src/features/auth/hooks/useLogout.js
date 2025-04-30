import { useEffect, useState } from "react";
import { logout } from "../authService.js";

const useLogout = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const doLogout = async () => {
      setError(null);
      try {
        const response = await logout();
        if (!response.success) {
          setError(response.err || "Error al terminar la sesión");
          return;
        }
      } catch (err) {
        setError(err.message || "Algo salió mal");
      }
    };

    doLogout();
  }, []);

  return { error };
};

export default useLogout;
