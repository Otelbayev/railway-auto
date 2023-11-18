import React from "react";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";
import LandingPage from "../Pages/LandingPage";
import NotFoundPage from "../Pages/NotFoundPage";
import SignInPage from "../Pages/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
        <Route path="signin" element={<SignInPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
