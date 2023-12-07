import React from "react";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";
import LandingPage from "../Pages/LandingPage";
import NotFoundPage from "../Pages/NotFoundPage";
import SignInPage from "../Pages/SignInPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootContext from "../context";
import DocQuarter from "../components/Quarter/Doc";
import DocQuarterMonth from "../components/Monthly/Doc";

const Root = () => {
  const token = 'Cookies.get("token")';
  return (
    <BrowserRouter>
      <RootContext>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map(
              ({ id, path, element, isPrivate }) =>
                isPrivate && (
                  <Route
                    key={id}
                    path={path}
                    element={token ? element : <Navigate to="/signin" />}
                  />
                )
            )}
            {navbar.map(
              ({ id, path, element, isPrivate }) =>
                !isPrivate && <Route key={id} path={path} element={element} />
            )}
          </Route>
          <Route path="signin" element={<SignInPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/doc/:year/:quarter" element={<DocQuarter />} />
          <Route
            path="/doc/:year/:quarter/:month"
            element={<DocQuarterMonth />}
          />
        </Routes>
      </RootContext>
    </BrowserRouter>
  );
};

export default Root;
