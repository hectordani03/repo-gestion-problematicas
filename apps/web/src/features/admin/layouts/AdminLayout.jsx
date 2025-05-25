import { Outlet } from 'react-router-dom'
import NotFound from "@/pages/404";
import Sidebar from '../components/Sidebar'
import useAdminTables from "../hooks/useAdminTables";

const AdminLayout = () => {
  const { tables, unauthorized } = useAdminTables();

  if (unauthorized) return <NotFound />;

  if (tables.length === 0) return 
    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
  
  return (
    <main className="flex gap-3">
      <Sidebar tables={tables} />
      <div className="flex flex-1">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
