import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// sidebar
import AppLayout from "../components/layout/AppLayout";
import "../App.scss";
import "boxicons/css/boxicons.min.css";

const Home = () => {
  return (
    <div>
      {/* <AppLayout /> */}
    <div className="container">
      <div>
      </div>
      <p>AIO test</p>
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
    </div>
    </div>
  );
};

export default Home;
