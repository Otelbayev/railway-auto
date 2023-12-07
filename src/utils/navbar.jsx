import React, { Suspense } from "react";
import { useUserContext } from "../context/UserContext";

const HomePage = React.lazy(() => import("../Pages/HomePage"));

const AnnualTable = React.lazy(() => import("../Pages/Annual/Table1"));
const AnnualTable1 = React.lazy(() => import("../Pages/Annual/Table1.1"));
const AnnualTable2 = React.lazy(() => import("../Pages/Annual/Table1.2"));
const Create1 = React.lazy(() => import("../Pages/Annual/Create1"));
const Create2 = React.lazy(() => import("../Pages/Annual/Create1.1"));

const QuarterPage = React.lazy(() => import("../Pages/Quarter/Quarter"));
const EditQuarter = React.lazy(() => import("../Pages/Quarter/Edit"));
const QuarterTable = React.lazy(() => import("../Pages/Quarter/Table"));

const MonthlyPlanTable = React.lazy(() => import("../Pages/Monthly/Table"));
const Months = React.lazy(() => import("../Pages/Monthly/Months"));
const EditMonthly = React.lazy(() => import("../Pages/Monthly/Edit"));

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
    id: 21,
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
    id: 211,
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
    id: 212,
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
    id: 23,
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
    id: 24,
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
    id: 41,
    path: "/quarter-plan/:year/:quarter",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <QuarterTable />
        </Suspense>
      </div>
    ),
  },
  {
    id: 42,
    path: "/quarter-plan/:year/:quarter/:id",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <EditQuarter />
        </Suspense>
      </div>
    ),
  },
  {
    id: 5,
    path: "/quarter-doc",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <QuarterPage />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 6,
    path: "/monthly-doc/:year/:quarter/:month",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <MonthlyPlanTable />
        </Suspense>
      </div>
    ),
  },
  {
    id: 61,
    path: "/monthly-doc/:year/:quarter/:month/:id",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <EditMonthly />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 7,
    path: "/monthly-doc",
    isPrivate: true,
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <Months />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 8,
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
