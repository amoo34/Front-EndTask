
import React, { useState,useEffect } from "react";
import {
  BrowserRouter,
  withRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Wrapper, RightItems } from "../Styles/Navbar";



function Navbar() {

  const token = localStorage.getItem("token") ? localStorage.getItem("token") : null



  return (
    <Wrapper>

      <RightItems>
        {/* {token &&  */}
          <Link to="/users"> List Users</Link>
        {/* } */}
        <Link to="/create-users"> Create Users</Link>
        
        <Link to="/">Login</Link>
        
      </RightItems>

    </Wrapper>
  );
}

export default Navbar;