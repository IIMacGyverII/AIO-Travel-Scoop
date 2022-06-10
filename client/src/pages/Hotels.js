import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// sidebar
import AppLayout from "../components/layout/AppLayout";
import "../App.scss";
import "boxicons/css/boxicons.min.css";

// datatable
import DataTableHotel from '../components/DataTableHotel';

const Home = () => {
  return (
    <div className="container">
      <AppLayout />
      <div>
      </div>
      <p>hotels test</p>
      <DataTableHotel />
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
