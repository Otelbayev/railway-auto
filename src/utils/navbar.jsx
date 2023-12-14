import React, { Suspense, useEffect } from "react";
import { useUserContext } from "../context/UserContext";

const HomePage = React.lazy(() => import("../Pages/HomePage"));

const AnnualTable = React.lazy(() => import("../Pages/Annual/Table1"));
const AnnualTable1 = React.lazy(() => import("../Pages/Annual/Table1.1"));
const AnnualTable2 = React.lazy(() => import("../Pages/Annual/Table1.2"));
const Create1 = React.lazy(() => import("../Pages/Annual/Create1"));
const Create2 = React.lazy(() => import("../Pages/Annual/Create1.1"));

const QuarterPage1 = React.lazy(() => import("../Pages/QuarterPage/Table"));
const QuarterPage2 = React.lazy(() => import("../Pages/QuarterPage/Table2"));
const AddQuarterPage = React.lazy(() => import("../Pages/QuarterPage/Create"));
const AddQuarterPage2 = React.lazy(() =>
  import("../Pages/QuarterPage/Create2")
);

const MonthlyTable = React.lazy(() => import("../Pages/MonthlyPage/Table"));
const MonthlyTable2 = React.lazy(() => import("../Pages/MonthlyPage/Table3.1"));

const LargeTable = React.lazy(() => import("../Pages/LargeTablePage/Table"));
const LargeTable2 = React.lazy(() =>
  import("../Pages/LargeTablePage/Table4.1")
);
const LargeTable3 = React.lazy(() =>
  import("../Pages/LargeTablePage/Table4.2")
);

const UserPage = React.lazy(() => import("../Pages/UserPage"));
const UsersPage = React.lazy(() => import("../Pages/UsersPage"));

import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
  GlobalOutlined,
  PieChartOutlined,
  InsertRowAboveOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  TableOutlined,
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
    path: "/annual-table",
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
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <UserPage />,
        </Suspense>
      </div>
    ),
  },
  {
    id: 8,
    path: "/users",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <UsersPage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 9,
    path: "/quarter-table-1",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <QuarterPage1 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 10,
    path: "/quarter-table-2",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <QuarterPage2 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 11,
    path: "/quarter-add-1",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AddQuarterPage />
        </Suspense>
      </div>
    ),
  },
  {
    id: 12,
    path: "/quarter-add-2",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <AddQuarterPage2 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 13,
    path: "/monthly-table-1",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <MonthlyTable />
        </Suspense>
      </div>
    ),
  },
  {
    id: 14,
    path: "/monthly-table-2",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <MonthlyTable2 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 15,
    path: "/last-table-1",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <LargeTable />
        </Suspense>
      </div>
    ),
  },
  {
    id: 16,
    path: "/last-table-2",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <LargeTable2 />
        </Suspense>
      </div>
    ),
  },
  {
    id: 17,
    path: "/last-table-3",
    element: (
      <div style={wrapperStyle}>
        <Suspense fallback={<Spin size="large" />}>
          <LargeTable3 />
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
  const { signOut, userDetails } = useUserContext();
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
    getItem("Chorak plan", "sub2", <PieChartOutlined />, [
      getItem(
        <NavLink to="/quarter-table-1">Jadval</NavLink>,
        "/quarter-table-1"
      ),
      getItem(
        <NavLink to="/quarter-table-2">Jadval 2.1</NavLink>,
        "/quarter-table-2"
      ),
    ]),
    getItem("Oylik plan", "sub3", <InsertRowAboveOutlined />, [
      getItem(
        <NavLink to="/monthly-table-1">Jadval</NavLink>,
        "/monthly-table-1"
      ),
      getItem(
        <NavLink to="/monthly-table-2">Jadval 3.1</NavLink>,
        "/monthly-table-2"
      ),
    ]),
    getItem("Jadval", "sub4", <TableOutlined />, [
      getItem(<NavLink to="/last-table-1">Jadval</NavLink>, "/last-table-1"),
      getItem(
        <NavLink to="/last-table-2">Jadval 4.1</NavLink>,
        "/last-table-2"
      ),
      getItem(
        <NavLink to="/last-table-3">Jadval 4.2</NavLink>,
        "/last-table-3"
      ),
    ]),
    getItem(<NavLink to="/user">Profil</NavLink>, "/user", <UserOutlined />),
    userDetails?.role === 1 &&
      getItem(
        <NavLink to="/users">Users</NavLink>,
        "/users",
        <UsergroupAddOutlined />
      ),
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
