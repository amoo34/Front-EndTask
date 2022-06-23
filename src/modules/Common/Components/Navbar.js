
import React, { useState,useEffect } from "react";
// import ReactDOM from "react-dom/client";
import Home from "../Pages/home"
import {
  BrowserRouter,
  withRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { Link } from "react-router-dom";
import { Wrapper, RightItems } from "../Styles/Navbar";

function Navbar() {
  const [check, setCheck] = useState(false);

  return (
   
    <>
    <Wrapper>
      <RightItems>
        <Link to="/users"> List Users</Link>
        <Link to="/create-users"> Create Users</Link>
        <Link to="/">Login</Link>
        {/* <Link to="/bulk-delete">Bulk Delete</Link> */}
      </RightItems>
    </Wrapper>
  </>
  );
}

export default Navbar;