import { formatValue } from "../lib/formatValue";

const AdminTable = ({ fields, records, sortKey, sortDirection, onSortChange }) => {
  const handleSortClick = (key) => {
    if (sortKey === key) {
      const newDirection = sortDirection === "asc" ? "desc" : "asc";
      onSortChange({ key, direction: newDirection  });
    } else {
      onSortChange({ key, direction: "asc" });
    }
  };

  return (
    <div className="overflow-x-auto w-full max-w-6xl border rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            {Object.keys(fields).map((key) => (
              <th
                key={key}
                className="px-4 py-2 text-left text-sm font-medium text-gray-800 border-b"
              >
                <button
                  onClick={() => handleSortClick(key)}
                  className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                >
                  <span className="text-xs text-gray-600">
                    {sortKey === key && (sortDirection === "asc" ? "asc" : "desc")}
                  </span>
                  <span>{key}</span>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td
                colSpan={Object.keys(fields).length}
                className="text-center py-6 text-gray-500"
              >
                No se encontraron registros.
              </td>
            </tr>
          ) : (
            records.map((record, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {Object.keys(fields).map((key) => (
                  <td
                    key={key}
                    className="px-4 py-3 text-sm border-b whitespace-nowrap"
                  >
                    {formatValue(record[key])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
