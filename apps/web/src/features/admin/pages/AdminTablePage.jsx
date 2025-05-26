import { useState, useMemo } from "react";
import { useParams } from 'react-router-dom';
import useTableFields from "../hooks/useTableFields";
import useTableRecords from "../hooks/useTableRecords";

import TableHeaderInfo from "../components/TableHeaderInfo";
import TableControls from "../components/TableControls";
import TableSearchBar from "../components/TableSearchBar";
import AdminTable from "../components/AdminTable";
import TableResetButton from "../components/TableResetButton";

import LoadingMessage from "../components/LoadingMessage";
import NotFoundMessage from "../components/NotFoundMessage";
import EmptyTableMessage from "../components/EmptyTableMessage";

const AdminTablePage = () => {
  const { tableName } = useParams();

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [queryKey, setQueryKey] = useState("");
  const [keyword, setKeyword] = useState("");

  const sortOptions = useMemo(() => (
    { [sortKey]: sortDirection }
  ), [sortKey, sortDirection]);

  const queryOptions = useMemo(() => {
    if (!queryKey || !keyword)
      return {}
    
    return { [queryKey]: keyword }
  }, [queryKey, keyword]);

  const { fields, fieldsFound, fieldsLoading } = useTableFields(tableName);
  
  const { 
    bodyRecords,
    recordsFound,
    recordsLoading
  } = useTableRecords( tableName, page, perPage, queryOptions, sortOptions);

  const isLoading = fieldsLoading || recordsLoading;
  const notFound = !fieldsFound || !recordsFound;

  if (isLoading) return <LoadingMessage />;
  if (notFound) return <NotFoundMessage tableName={tableName} />;
  if (Object.keys(fields).length === 0 && bodyRecords.records.length === 0)
    return <EmptyTableMessage tableName={tableName} />;
  
  const records = bodyRecords.records
  const { totalItems, totalPages } = bodyRecords.meta.pagination

  const handleSortChange = ({ key, direction }) => {
    setSortKey(key);
    setSortDirection(direction);
    setPage(1);
  };

  const handleQuerySubmit = ({ key, value }) => {
    setQueryKey(key);
    setKeyword(value);
    setPage(1);
  };

  const handleReset = () => {
    setQueryKey("");
    setKeyword("");
    setSortKey("createdAt");
    setSortDirection("desc");
    setPage(1);
  };  
  
  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-10">
      <div className="flex justify-between w-full max-w-6xl mt-4 p-5">
        <TableHeaderInfo
          tableName={tableName}
          page={page}
          totalItems={totalItems}
          totalPages={totalPages}
          recordsLength={records.length}
          sortKey={sortKey}
          sortDirection={sortDirection}
          queryKey={queryKey}
          keyword={keyword}
        />

        <div className="flex flex-col items-end gap-2">
          <TableSearchBar
            queryKey={queryKey}
            fields={fields}
            onSearch={handleQuerySubmit}
          />

          <TableResetButton
            handleReset={handleReset}
          />
        </div>

        <TableControls
          page={page}
          totalPages={totalPages}
          perPage={perPage}
          onPageChange={setPage}
          onPerPageChange={setPerPage}
        />
      </div>

      <AdminTable
        fields={fields}
        records={records}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default AdminTablePage;
