import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import SignInPage from "../pages/SignInPage";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Navigate to={"/signin"} />} />
        <Route path={"/signin"} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
