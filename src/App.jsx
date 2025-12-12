import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import Categories from "./components/Categories";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <>
      <Header />

      <main>
        {/* AUTO SCROLL TO TOP ON ROUTE CHANGE */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔥 Dynamic Product Page */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
