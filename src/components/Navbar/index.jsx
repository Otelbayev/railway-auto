import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import { SidebarItems } from "../../utils/navbar";
import { Layout, Menu, Button } from "antd";
import { Outlet } from "react-router-dom";
import { Div, Img, Headers, Name } from "./style";
const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    const doc = document.documentElement;

    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    } else if (doc.mozRequestFullScreen) {
      doc.mozRequestFullScreen();
    } else if (doc.webkitRequestFullscreen) {
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen();
    }

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const onMenuClick = (e) => {
    localStorage.setItem("key", e.key);
    if (e.key === "exit" || e.key === "site") {
      localStorage.removeItem("key");
    }
  };

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
        <Div className="demo-logo-vertical">
          <Img src={logo} />
        </Div>
        {!collapsed && <Name>Админов Админ</Name>}
        <Menu
          theme="dark"
          mode="inline"
          onClick={onMenuClick}
          defaultSelectedKeys={[localStorage.getItem("key") || "1"]}
          items={SidebarItems}
        />
      </Sider>
      <Layout>
        <Headers>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 50,
              height: 50,
            }}
          />
          <Button
            type="text"
            onClick={openFullScreen}
            icon={
              isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />
            }
            style={{
              marginRight: "20px",
              fontSize: "16px",
              width: 50,
              height: 50,
            }}
          />
        </Headers>
        <Content
          style={{
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
