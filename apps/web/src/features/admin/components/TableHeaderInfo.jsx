import CopyToClipboard from '@/components/CopyToClipboard'

const TableHeaderInfo = ({
  tableName,
  page,
  totalItems,
  totalPages,
  recordsLength,
  sortKey,
  sortDirection,
  queryKey,
  keyword
}) => (
  <div className="space-y-1 max-w-sm">
    <h2 className="text-2xl font-semibold capitalize text-gray-800">
      {tableName}
      <span className="ml-2 text-sm text-gray-500 font-normal">
        ({totalItems} registros en total)
      </span>
    </h2>

    <p className="text-sm text-gray-600">
      Página <strong>{page}</strong> de <strong>{totalPages}</strong>,
      mostrando <strong>{recordsLength}</strong> registros.
    </p>

    {queryKey && keyword && (
      <div className="text-sm text-gray-600 flex items-center gap-1 flex-wrap">
        <span>Filtrado por:</span>
        <code
          title={queryKey}
          className="bg-gray-100 text-gray-700 px-1.5 rounded font-mono text-xs truncate max-w-[120px] overflow-hidden"
        >
          {queryKey}
        </code>
        <span>con valor:</span>
        <CopyToClipboard copyValue={keyword}>
          <span
            title={keyword}
            className="bg-gray-100 text-gray-700 px-1.5 rounded font-mono text-xs truncate max-w-[120px] overflow-hidden"
          >
            {keyword}
          </span>
        </CopyToClipboard>
      </div>
    )}

    <div className="text-sm text-gray-600 flex items-center gap-1 flex-wrap">
      <span>Ordenado por:</span>
      <code
        title={sortKey}
        className="bg-gray-100 text-gray-700 px-1.5 rounded font-mono text-xs truncate max-w-[120px] overflow-hidden"
      >
        {sortKey}
      </code>
      <span>en orden</span>
      <span
        className="bg-gray-100 text-gray-700 px-1.5 rounded font-mono text-xs capitalize"
      >
        {sortDirection}
      </span>
    </div>
  </div>
);

export default TableHeaderInfo;
