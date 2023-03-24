import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CardUnit from "./component/cardUnit";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Planets  from "./component/plannet";
import CartContext  from "./context/CartContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <CartContext>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardb/:theid" element={<CardUnit />} />
              <Route path="/planets/:theid" element={<CardUnit />} />
              <Route path="/planet" element={<Planets />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </CartContext>
    </div>
  );
};

export default injectContext(Layout);
