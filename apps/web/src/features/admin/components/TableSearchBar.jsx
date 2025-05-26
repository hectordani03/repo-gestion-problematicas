import { useState } from "react";

const TableSearchBar = ({ queryKey, fields, onSearch }) => {
  const fieldEntries = Object.entries(fields);
  const [selectedField, setSelectedField] = useState(queryKey || fieldEntries[0]?.[0] || "");
  const [searchTerm, setSearchTerm] = useState("");

  const getInputType = (dataType) => {
    switch (dataType) {
      case "Int":
      case "Float":
        return "number";
      case "DateTime":
        return "date";
      default:
        return "text";
    }
  };

  const inputType = selectedField ? getInputType(fields[selectedField]?.dataType) : "text";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      key: selectedField,
      value: searchTerm.trim()
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start min-w-sm">
      <div className="flex border rounded-md overflow-hidden">
        <select
          className="border-e px-2 py-1.5 text-sm text-gray-700 focus:outline-none"
          value={selectedField}
          onChange={(e) => {
            setSelectedField(e.target.value);
            setSearchTerm("");
          }}
        >
          {fieldEntries.map(([key]) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <input
          type={inputType}
          placeholder="Valor a buscar..."
          className="flex-auto px-4 py-1.5 text-sm text-gray-700 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default TableSearchBar;
