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
import { Div, Img, Headers, Name, Siders } from "./style";
const { Content } = Layout;

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

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Siders trigger={null} collapsible collapsed={collapsed}>
        <Div className="demo-logo-vertical">
          <Img src={logo} />
        </Div>
        {!collapsed && <Name>Adminov Admin</Name>}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={SidebarItems}
        />
      </Siders>
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
