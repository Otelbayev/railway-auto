import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Logos, Logo, User, Name } from "./style";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
  UserOutlined,
  InsertRowAboveOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <CalendarOutlined />,
      label: "Annually plan",
      path: "/annually-plan",
    },
    {
      key: "2",
      icon: <PieChartOutlined />,
      label: "Quarter plan",
      path: "/quarter-plan",
    },
    {
      key: "3",
      icon: <InsertRowAboveOutlined />,
      label: "Monthly plan",
      path: "/monthly-plan",
    },
  ];

  const navigate = useNavigate();

  let key = menuItems.find(
    (item) => item.path === window.location.pathname
  )?.key;

  const menuOnClick = (info) => {
    const key = info.key;
    const find = menuItems.find((item) => item.key === key);
    const path = find.path;
    if (path) {
      navigate(path);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logos className="demo-logo-vertical">
          <Logo src={logo} />
        </Logos>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[key]}
          items={menuItems}
          onClick={menuOnClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#e8e8e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <User onClick={() => navigate("/user")}>
            <UserOutlined
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                fontSize: "20px",
                padding: "5px",
              }}
            />
            <Name>User</Name>
          </User>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
