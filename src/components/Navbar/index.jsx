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
import { Outlet, useNavigate } from "react-router-dom";
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
  getItem("Annually", "sub1", <CalendarOutlined />, "", [
    getItem("Add Data", "0", null, "/add-annually-plan"),
    getItem("Plan", "1", null, "/annually-plan"),
  ]),
  getItem("Quarter Plan", "2", <PieChartOutlined />, "/quarter-plan"),
  getItem("Monthly Plan", "3", <InsertRowAboveOutlined />, "/monthly-plan"),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const paths = [];
  const keys = [];
  const getData = (item) => {
    item.forEach((obj) => {
      if (Array.isArray(obj.children)) {
        getData(obj.children);
      } else {
        paths.push(obj.path);
        keys.push(obj.key);
      }
    });
  };
  getData(items);

  const navigate = useNavigate();

  const key = paths.find((item) => item === window.location.pathname);

  const onMenuClick = (e) => {
    navigate(`${paths[Number(e.key)]}`);
  };

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
          defaultSelectedKeys={[`${paths.indexOf(key)}`]}
          mode="inline"
          items={items}
          onClick={onMenuClick}
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
        <Content style={{ background: "#fff", overflow: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
