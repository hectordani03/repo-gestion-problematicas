import PaginationControls from "./PaginationControls";

const TableControls = ({ page, totalPages, perPage, onPageChange, onPerPageChange }) => (
  <div className="flex flex-col items-end justify-center gap-2">
    <PaginationControls
      currentPage={page}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />

    <label className="text-sm text-gray-600">
      Registros por página:
      <select
        className="ml-2 border rounded px-2 py-1 text-sm"
        value={perPage}
        onChange={(e) => {
          onPageChange(1);
          onPerPageChange(Number(e.target.value));
        }}
      >
        {[10, 25, 50, 100].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </label>
  </div>
);

export default TableControls;
