import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Logos, Logo, User, Name } from "./style";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
  UserOutlined,
  InsertRowAboveOutlined,
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
      icon: <UserOutlined />,
      label: "User",
      path: "/home",
    },
    {
      key: "2",
      icon: <CalendarOutlined />,
      label: "Yearly plan",
      path: "/yearly-plan",
    },
    {
      key: "3",
      icon: <InsertRowAboveOutlined />,
      label: "Monthly plan",
      path: "/monthly-plan",
    },
  ];

  const navigate = useNavigate();

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
          defaultSelectedKeys={["1"]}
          items={menuItems}
          onClick={menuOnClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
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
          <User>
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
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
