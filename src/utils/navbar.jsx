import UserPage from "../pages/UserPage";
import AnnuallyPage from "../pages/AnnuallyPage";
import MonthlyPage from "../pages/MonthlyPage";
import QuarterPage from "../pages/QuarterPage";
import AddAnnuallyPage from "../pages/AddAnnuallyPage";

export const navbar = [
  {
    id: 1,
    title: "User",
    element: <UserPage />,
    path: "/user",
  },
  {
    id: 2,
    title: "Annually Plan",
    element: <AnnuallyPage />,
    path: "/annually-plan",
  },
  {
    id: 3,
    title: "Add Annually Plan",
    element: <AddAnnuallyPage />,
    path: "/add-annually-plan",
  },
  {
    id: 4,
    title: "Quarter Plan",
    element: <QuarterPage />,
    path: "/quarter-plan",
  },
  {
    id: 5,
    title: "Monthly Plan",
    element: <MonthlyPage />,
    path: "/monthly-plan",
  },
];
