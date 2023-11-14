import React, { useState } from "react";
import { Logos, Logo, User, Name } from "./style";
import logo from "../../assets/logo.svg";
import {
  CalendarOutlined,
  InsertRowAboveOutlined,
  PieChartOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    path,
    children,
    label,
  };
}

const items = [
  getItem("Annually", "sub1", <CalendarOutlined />, "/annually", [
    getItem("Add Data", "1", null, "/annually/add-data"),
    getItem("Plan", "2", null, "/annually/plan"),
  ]),
  getItem("Quarter Plan", "3", <PieChartOutlined />, "/quarterly"),
  getItem("Monthly Plan", "4", <InsertRowAboveOutlined />, "/monthly"),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Logos className="demo-logo-vertical">
          <Logo src={logo} />
        </Logos>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
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
        <Content style={{ background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
