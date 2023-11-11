import UserPage from "../pages/UserPage";
import YearPage from "../pages/Yearly";
import MonthlyPage from "../pages/Monthly";
import QuarterPage from "../pages/Quarter";

export const navbar = [
  {
    id: 1,
    title: "User",
    element: <UserPage />,
    path: "/user",
  },
  {
    id: 2,
    title: "Yearly Plan",
    element: <YearPage />,
    path: "/annually-plan",
  },
  {
    id: 3,
    title: "Quarter Plan",
    element: <QuarterPage />,
    path: "/quarter-plan",
  },
  {
    id: 4,
    title: "Monthly Plan",
    element: <MonthlyPage />,
    path: "/monthly-plan",
  },
];
