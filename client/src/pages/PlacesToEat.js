import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// sidebar

import PlacesToEatCards from "../components/PlacesToEatCards";

import AppLayout from "../components/layout/AppLayout";
import "../App.scss";
import "boxicons/css/boxicons.min.css";

const Home = () => {
  return (
    <div className="container">
      {/* <AppLayout /> */}
      <div>
      </div>
      <p>Places to Eat test</p>
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
    </div>
  );
};

export default PlaceToEat;
