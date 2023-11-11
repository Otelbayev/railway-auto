import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { navbar } from "./utils/navbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, element, path }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
