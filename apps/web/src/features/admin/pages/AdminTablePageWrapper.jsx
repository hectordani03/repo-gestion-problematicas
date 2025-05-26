import { useParams } from "react-router-dom";
import AdminTablePage from "./AdminTablePage";

const AdminTablePageWrapper = () => {
  const { tableName } = useParams();
  return <AdminTablePage  key={tableName} />;
};

export default AdminTablePageWrapper;
