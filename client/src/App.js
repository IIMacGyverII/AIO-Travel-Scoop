import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// sidebar
import AppLayout from "./components/layout/AppLayout";
import "./App.scss";
import "boxicons/css/boxicons.min.css";

// material UI
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import RentalCars from "./pages/RentalCars";
import PlacesToEat from "./pages/PlacesToEat";
import ThingsToDo from "./pages/ThingsToDo";
import Weather from "./pages/Weather";
import YourPlaces from "./pages/YourPlaces";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          {/* <StoreProvider> */}
          <div>
            <AppLayout />
          </div>
          <Routes>
            {/* <Route path="/" element={<AppLayout />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/rentalcars" element={<RentalCars />} />
            <Route path="/placestoeat" element={<PlacesToEat />} />
            <Route path="/thingstodo" element={<ThingsToDo />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/yourplaces" element={<YourPlaces />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
