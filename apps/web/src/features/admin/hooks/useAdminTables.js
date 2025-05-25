import { useEffect, useState } from "react";
import { getTables } from "../adminService.js";
import { Alerts } from "@/shared/alerts";

export default function useAdminTables() {
  const [tables, setTables] = useState([]);
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await getTables();

        if (!response.success) {
          if (response.authorized === false) {
            setUnauthorized(true);
            return;
          }

          Alerts.error(response.err || "Error al obtener las tablas");
          return;
        }

        setTables(response.data);
      } catch (err) {
        console.log("useAdminTables", err);
        Alerts.error("Error inesperado al obtener las tablas");
      }
    };

    fetchTables();
  }, []);

  return { tables, unauthorized };
}
