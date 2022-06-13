import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import background from "../pages/images/falls.webp";

const Home = () => {
  return (
    <div className="container"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "80vh",
      width: "1000vw",
      left: "0",
      // backgroundPosition: "bottom"  
      // width: "150%"
      // marginLeft: "10%"
    }}>
      {/* <AppLayout /> */}
    <div className="container">
      <div>
      </div>
      {/* <p>AIO test</p> */}
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
    </div>
    </div>
  );
};

export default Home;
