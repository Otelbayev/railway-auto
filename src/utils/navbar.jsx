import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("../Pages/HomePage"));
const AnnualPlanPage = React.lazy(() => import("../Pages/Annual/AnnualPlan"));
const AnnualDocPage = React.lazy(() => import("../Pages/Annual/AnnualDoc"));
const QuarterDocPage = React.lazy(() => import("../Pages/Quarter/QuarterDoc"));
const MonthlyPlanTable = React.lazy(() =>
  import("../Pages/Monthly/MonthlyTable")
);
const MonthlyDocPage = React.lazy(() => import("../Pages/Monthly/MonthlyDoc"));
const UserPage = React.lazy(() => import("../Pages/UserPage"));
const SingleAnnual = React.lazy(() => import("../Pages/Annual/SinglePage"));
const YearPage = React.lazy(() => import("../Pages/Annual/YearPage"));
const SingleQuarter = React.lazy(() => import("../Pages/Quarter/SinglePage"));
const SingleMonthly = React.lazy(() => import("../Pages/Monthly/SinglePage"));
const QuarterIdPage = React.lazy(() => import("../Pages/Quarter/Quarter"));
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
    path: "/annual-plan",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AnnualPlanPage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 21,
    path: "/annual-doc/:year",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <YearPage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 22,
    path: "/annual-doc/:year/:id",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <SingleAnnual />
        </Suspense>
      </div>
    ),
  },
  {
    id: 3,
    path: "/annual-doc",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AnnualDocPage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 41,
    path: "/quarter-plan/:year/:quarter",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <QuarterIdPage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 42,
    path: "/quarter-plan/:year/:quarter/:id",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <SingleQuarter />
        </Suspense>
      </div>
    ),
  },
  {
    id: 5,
    path: "/quarter-doc",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <QuarterDocPage />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 6,
    path: "/monthly-doc/:year/:quarter/:month",
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
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <SingleMonthly />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 7,
    path: "/monthly-doc",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <MonthlyDocPage />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 8,
    path: "/user",
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

export const SidebarItems = [
  getItem(<NavLink to="/home">Asosiy</NavLink>, "1", <HomeOutlined />),
  getItem("Yillik plan", "sub1", <CalendarOutlined />, [
    getItem(<NavLink to="/annual-plan">Yararish</NavLink>, "3"),
    getItem(<NavLink to="/annual-doc">Hujjat</NavLink>, "2"),
  ]),
  getItem("Chorak plan", "sub3", <PieChartOutlined />, [
    getItem(<NavLink to="/quarter-doc">Hujjat</NavLink>, "6"),
  ]),
  getItem("Oylik plan", "sub2", <InsertRowAboveOutlined />, [
    getItem(<NavLink to="/monthly-doc">Hujjat</NavLink>, "4"),
  ]),
  getItem(<NavLink to="/user">Profil</NavLink>, "8", <UserOutlined />),
  getItem(
    <NavLink to="/" onClick={() => localStorage.setItem("token", "admin")}>
      Saytga
    </NavLink>,
    "site",
    <GlobalOutlined />
  ),
  getItem(
    <NavLink to="/" onClick={() => localStorage.removeItem("token")}>
      Chiqish
    </NavLink>,
    "exit",
    <LogoutOutlined />
  ),
];
