import Home from "../pages/Home";
import YearPage from "../pages/Yearly";
import MonthlyPage from "../pages/Monthly";

export const navbar = [
  {
    id: 1,
    title: "Home",
    element: <Home />,
    path: "/home",
  },
  {
    id: 2,
    title: "Yearly Plan",
    element: <YearPage />,
    path: "/yearly-plan",
  },
  {
    id: 3,
    title: "Monthly Plan",
    element: <MonthlyPage />,
    path: "/monthly-plan",
  },
];
