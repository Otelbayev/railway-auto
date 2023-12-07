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
import { Outlet, useParams } from "react-router-dom";
import { Div, Img, Headers, Name, Siders, Contents } from "./style";
import { useUserContext } from "../../context/UserContext";
import Cookies from "js-cookie";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { userDetails } = useUserContext();

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

    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const [path, setPath] = useState(window.location.pathname);
  const onMenu = (e) => {
    setPath(e.key);
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
        {!collapsed && (
          <Name>
            {userDetails?.firstName} {userDetails?.lastName}
          </Name>
        )}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[path]}
          items={SidebarItems()}
          onClick={onMenu}
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
        <Contents
          style={{
            overflow: "auto",
          }}
        >
          <Outlet />
        </Contents>
      </Layout>
    </Layout>
  );
};
export default App;
