import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// sidebar
import AppLayout from "../layout/AppLayout";
import "../../App.scss";
import "boxicons/css/boxicons.min.css";

import OriginSearchForm from "../SearchBar/OriginSearchForm";
import DestinationSearchForm from "../SearchBar/DestinationSearchForm";

import Test from "../SearchBar/Test";


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          {/* <AppLayout /> */}
          <ul className="flex-row logoFont">
            <li className="mx-1">
              {/* <Link to="/orderHistory">Order History</Link> */}
            </li>
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a className="logoFont" href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
        {/* <AppLayout /> */}
        <ul className="flex-row logoFont">
          <li className="mx-1">
            <Link to="/signup" className="logoFont">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="logoFont">Login</Link>
          </li>
        </ul>
        </div>
      );
    }
  }
  
  return (
    <div>
    <header className="flex-row px-1 fixed">
      {/* <AppLayout /> */}
      <h1>
        {/* <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link> */}
      </h1>

      <nav style={{
        marginTop: "10px"
      }}>{showNavigation()}</nav>
        {/* <OriginSearchForm /> */}
        {/* <Test /> */}
        <DestinationSearchForm />
        
    </header>
    </div>
  );
}

export default Nav;
