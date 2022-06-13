import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import background from "../pages/images/VdgG.gif";
import RentalCarCards from "../components/RentalCarCards";
import RentalCarCards2 from "../components/RentalCarCards2";
import RentalCarCards3 from "../components/RentalCarCards3";

const Home = () => {
  return (
    <div>
      <div className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "100vw",
        left: "0",
        // width: "150%"
        // display: "flex",
        // flex: "flex-wrap"
        // marginLeft: "10%"
      }}>
        {/* <AppLayout /> */}
        {/* <p>Flights test</p> */}
        <div className="flex flightCard">
        <RentalCarCards />
        {/* <RentalCarCards2 /> */}
        {/* <RentalCarCards3 /> */}
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
