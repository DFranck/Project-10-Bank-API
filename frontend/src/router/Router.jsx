import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "../views/Home";
import { SignIn } from "../views/SignIn";
import { User } from "../views/User";
import { Nav } from "../common/components/Nav";
import { Footer } from "../common/components/Footer";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
