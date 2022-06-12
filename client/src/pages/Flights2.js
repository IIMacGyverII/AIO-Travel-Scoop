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
import DataTable from "../components/DataTable";
import DataTableAxios from "../components/DataTableAxios";
import ExampleDataTable from "../components/ExampleDataTable";

const Fligths = () => {
  return (
    <div className="">
      <div className="container">
        {/* <AppLayout /> */}
        <p>Flights test</p>
        <div>
          {/* <DataTable /> */}
          <DataTableAxios />
          {/* <ExampleDataTable /> */}
        </div>
        {/* <CategoryMenu /> */}
        {/* <ProductList /> */}
        {/* <Cart /> */}
      </div>
    </div>
  );
};

export default Fligths;
