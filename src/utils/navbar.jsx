import React, { Suspense } from "react";
import { useUserContext } from "../context/UserContext";

const HomePage = React.lazy(() => import("../Pages/HomePage"));

const AnnualTable = React.lazy(() => import("../Pages/Annual/Table1"));
const AnnualTable1 = React.lazy(() => import("../Pages/Annual/Table1.1"));
const AnnualTable2 = React.lazy(() => import("../Pages/Annual/Table1.2"));
const Create1 = React.lazy(() => import("../Pages/Annual/Create1"));
const Create2 = React.lazy(() => import("../Pages/Annual/Create1.1"));

const UserPage = React.lazy(() => import("../Pages/UserPage"));

import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
  GlobalOutlined,
  PieChartOutlined,
  InsertRowAboveOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
import Cookies from "js-cookie";

const wrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "500px",
};

export const navbar = [
  {
    id: 1,
    path: "/home",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <HomePage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 2,
    path: "/annual-table",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AnnualTable />
        </Suspense>
      </div>
    ),
  },
  {
    id: 3,
    path: "/annual-table-1",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AnnualTable1 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 4,
    path: "/annual-table-2",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AnnualTable2 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 5,
    path: "/annual-add-1",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <Create1 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 6,
    path: "/annual-add-2",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <Create2 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 7,
    path: "/user",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <UserPage />,
        </Suspense>
      </div>
    ),
  },
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const SidebarItems = () => {
  const { signOut } = useUserContext();
  return [
    getItem(<NavLink to="/home">Asosiy</NavLink>, "/home", <HomeOutlined />),
    getItem("Yillik plan", "sub1", <CalendarOutlined />, [
      getItem(<NavLink to="/annual-table">Pragnoz</NavLink>, "/annual-table"),
      getItem(
        <NavLink to="/annual-table-1">Jadval 1.1</NavLink>,
        "/annual-table-1"
      ),
      getItem(
        <NavLink to="/annual-table-2">Jadval 1.2</NavLink>,
        "/annual-table-2"
      ),
    ]),
    getItem("Chorak plan", "sub3", <PieChartOutlined />, [
      getItem(<NavLink to="/quarter-doc">Hujjat</NavLink>, "/quarter-doc"),
    ]),
    getItem("Oylik plan", "sub2", <InsertRowAboveOutlined />, [
      getItem(<NavLink to="/monthly-doc">Hujjat</NavLink>, "/monthly-doc"),
    ]),
    getItem(<NavLink to="/user">Profil</NavLink>, "/user", <UserOutlined />),
    getItem(<NavLink to="/">Saytga</NavLink>, "site", <GlobalOutlined />),
    getItem(
      <NavLink to="/" onClick={signOut}>
        Chiqish
      </NavLink>,
      "exit",
      <LogoutOutlined />
    ),
  ];
};
