import { CustomDrawer } from "../components/admin/CustomDrawer";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <CustomDrawer>
        {children}
      </CustomDrawer>
    </div>
  )
}

export default AdminLayout