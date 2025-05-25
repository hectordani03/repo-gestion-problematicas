import { useEffect, useState } from "react";
import { getRecords } from "../adminService.js";
import { Alerts } from "@/shared/alerts";

export default function useTableRecords(
  tableName,
  page = 1,
  perPage = 50,
  query = {},
  sort = { createdAt: "desc" }
) {
  const [bodyRecords, setBodyRecords] = useState([]);
  const [recordsFound, setFound] = useState(false);
  const [recordsLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTableContent = async () => {
      setLoading(true);
      try {
        const response = await getRecords(
          tableName,
          page,
          perPage,
          query,
          sort
        );

        if (!response.success) {
          Alerts.error(response.err || "Error al obtener los registros");
          return;
        }

        setFound(response.found);
        setBodyRecords(response.data);
      } catch (err) {
        console.log("useTableRecords", err);
        Alerts.error(
          `Error inesperado al obtener los registros de la tabla "${tableName}".`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTableContent();
  }, [tableName, page, perPage, query, sort]);

  return { bodyRecords, recordsFound, recordsLoading };
}
