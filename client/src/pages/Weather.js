import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// sidebar
import background from "../pages/images/hotel.jpg";
import WeatherCards from "../components/WeatherCards";

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
        // marginLeft: "10%"
      }}>
        {/* <AppLayout /> */}
        {/* <p>Flights test</p> */}
        <div className="flex flightCard">
        <PlacesToEatCards />
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
