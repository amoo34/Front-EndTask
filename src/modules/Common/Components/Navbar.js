
import React, { useState,useEffect } from "react";
// import ReactDOM from "react-dom/client";
import Home from "../Pages/home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { Wrapper, RightItems } from "../Styles/Navbar";

function Navbar() {
  const [check, setCheck] = useState(false);

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/das" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default Navbar;