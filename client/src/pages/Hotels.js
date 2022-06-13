import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import background from "../pages/images/flight.png";
// datatable
import DataTableHotel from '../components/DataTableHotel';
import HotelCards from "../components/HotelCards";

const Home = () => {
  return (
    <div>
      <div className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "1000vw",
        left: "0",
        // width: "150%"
        // marginLeft: "10%"
      }}>
        {/* <AppLayout /> */}
        {/* <p>Flights test</p> */}
        <div className="flex flightCard">
        <HotelCards />
          {/* <DataTable /> */}
          {/* <DataTableAxios /> */}
          {/* <ExampleDataTable /> */}
        </div>
        {/* <CategoryMenu /> */}
        {/* <ProductList /> */}
        {/* <Cart /> */}
      </div>
    </div>
  );
};

export default Home;
