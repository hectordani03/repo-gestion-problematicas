import { useEffect, useState } from "react";
import { getFields } from "../adminService.js";
import { Alerts } from "@/shared/alerts";

export default function useTableFields(tableName) {
  const [fields, setFields] = useState([]);
  const [fieldsFound, setFound] = useState(false);
  const [fieldsLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await getFields(tableName);

        if (!response.success) {
          Alerts.error(response.err || "Error al obtener los campos");
          return;
        }

        setFound(response.found);
        setFields(response.data);
      } catch (err) {
        console.log("useTableFields", err);
        Alerts.error(
          `Error inesperado al obtener los campos de la tabla ${tableName}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFields();
  }, [tableName]);

  return { fields, fieldsFound, fieldsLoading };
}
