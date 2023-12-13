import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Profile } from "../views/Porfile";
import { Nav } from "../common/components/Nav";
import { Footer } from "../common/components/Footer";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
