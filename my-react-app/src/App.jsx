import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import Categories from "./components/Categories";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import AdminDashboard from "./admin/components/AdminDashboard";

const App = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}

      <main>
        <ScrollToTop />

        <Routes>
          {/* CUSTOMER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          {/* PRODUCT PAGE */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* ADMIN */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      {!isAdmin && <Footer />}
    </>
  );
};

export default App;
