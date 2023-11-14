import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const AnnuallyPage = React.lazy(() => import("../pages/AnnuallyPage"));
const UserPage = React.lazy(() => import("../pages/UserPage"));
const MonthlyPage = React.lazy(() => import("../pages/MonthlyPage"));
const QuarterPage = React.lazy(() => import("../pages/QuarterPage"));
const AddAnnuallyPage = React.lazy(() => import("../pages/AddAnnuallyPage"));

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

export const navbar = [
  {
    id: 1,
    title: "User",
    element: (
      <React.Suspense
        fallback={
          <Container>
            <Spin size="large" />
          </Container>
        }
      >
        <UserPage />
      </React.Suspense>
    ),
    path: "/user",
  },
  {
    id: 2,
    title: "Annually Plan",
    element: (
      <React.Suspense
        fallback={
          <Container>
            <Spin size="large" />
          </Container>
        }
      >
        <AnnuallyPage />
      </React.Suspense>
    ),
    path: "/annually-plan",
  },
  {
    id: 3,
    title: "Add Annually Plan",
    element: (
      <React.Suspense
        fallback={
          <Container>
            <Spin size="large" />
          </Container>
        }
      >
        <AddAnnuallyPage />
      </React.Suspense>
    ),
    path: "/add-annually-plan",
  },
  {
    id: 4,
    title: "Quarter Plan",
    element: (
      <React.Suspense
        fallback={
          <Container>
            <Spin size="large" />
          </Container>
        }
      >
        <QuarterPage />
      </React.Suspense>
    ),
    path: "/quarter-plan",
  },
  {
    id: 5,
    title: "Monthly Plan",
    element: (
      <React.Suspense
        fallback={
          <Container>
            <Spin size="large" />
          </Container>
        }
      >
        <MonthlyPage />
      </React.Suspense>
    ),
    path: "/monthly-plan",
  },
];
