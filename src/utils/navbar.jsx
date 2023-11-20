import HomePage from "../Pages/HomePage";
import AnnualPlanPage from "../Pages/Annual/AnnualPlan";
import AnnualDocPage from "../Pages/Annual/AnnualDoc";
import QuarterPlanPage from "../Pages/Quarter/QuarterPlan";
import QuarterDocPage from "../Pages/Quarter/QuarterDoc";
import MonthlyPlanPage from "../Pages/Monthly/MonthlyPlan";
import MonthlyDocPage from "../Pages/Monthly/MonthlyDoc";
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
import UserPage from "../Pages/UserPage";
import SingleAnnual from "../Pages/Annual/SinglePage";
import YearPage from "../Pages/Annual/YearPage";
import SingleQuarter from "../Pages/Quarter/SinglePage";
import SingleMonthly from "../Pages/Monthly/SinglePage";
import QuarterIdPage from "../Pages/Quarter/Quarter";

export const navbar = [
  {
    id: 1,
    path: "/home",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/annual-plan",
    element: <AnnualPlanPage />,
  },
  {
    id: 21,
    path: "/annual-doc/:year",
    element: <YearPage />,
  },
  {
    id: 22,
    path: "/annual-doc/:year/:id",
    element: <SingleAnnual />,
  },
  {
    id: 3,
    path: "/annual-doc",
    element: <AnnualDocPage />,
  },
  {
    id: 4,
    path: "/quarter-plan",
    element: <QuarterPlanPage />,
  },
  {
    id: 41,
    path: "/quarter-plan/:year",
    element: <QuarterIdPage />,
  },
  {
    id: 42,
    path: "/quarter-plan/:year/:id",
    element: <SingleQuarter />,
  },
  {
    id: 5,
    path: "/quarter-doc",
    element: <QuarterDocPage />,
  },
  {
    id: 6,
    path: "/monthly-plan",
    element: <MonthlyPlanPage />,
  },
  {
    id: 61,
    path: "/monthly-plan/:id",
    element: <SingleMonthly />,
  },
  {
    id: 7,
    path: "/monthly-doc",
    element: <MonthlyDocPage />,
  },
  {
    id: 8,
    path: "/user",
    element: <UserPage />,
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
  getItem(<NavLink to="/home">Гавная</NavLink>, "1", <HomeOutlined />),
  getItem("Годовой план", "sub1", <CalendarOutlined />, [
    getItem(<NavLink to="/annual-plan">Создать</NavLink>, "3"),
    getItem(<NavLink to="/annual-doc">Документ</NavLink>, "2"),
  ]),
  getItem("Четверть план", "sub3", <PieChartOutlined />, [
    getItem(<NavLink to="/quarter-plan">План</NavLink>, "7"),
    getItem(<NavLink to="/quarter-doc">Документ</NavLink>, "6"),
  ]),
  getItem("Ежемесячный план", "sub2", <InsertRowAboveOutlined />, [
    getItem(<NavLink to="/monthly-plan">План</NavLink>, "5"),
    getItem(<NavLink to="/monthly-doc">Документ</NavLink>, "4"),
  ]),
  getItem(<NavLink to="/user">Профиль</NavLink>, "8", <UserOutlined />),
  getItem(<NavLink to="/">На Сайт</NavLink>, "site", <GlobalOutlined />),
  getItem(<NavLink to="/">Выйти</NavLink>, "exit", <LogoutOutlined />),
];
