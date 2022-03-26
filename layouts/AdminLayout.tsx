import styled from "@emotion/styled";
import { CustomDrawer } from "../components/admin/CustomDrawer";

const Container = styled("div")({
  padding: "16px",
});

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <Container>
      <CustomDrawer>{children}</CustomDrawer>;
    </Container>
  );
};

export default AdminLayout;
