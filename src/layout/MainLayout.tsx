import { LoginOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import NavigationMenus from "../components/shared/NavigationMenus";
import Logo from "../components/ui/Logo";

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Layout>
          <Header
            style={{
              display: "flex",
              placeItems: "center",
              backgroundColor: "white",
            }}
          >
            <Logo />
            <NavigationMenus />
            <Button size="large" icon={<LoginOutlined />}>
              Login
            </Button>
          </Header>
          <Content style={{ backgroundColor: "#0d1117", color: "white" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
