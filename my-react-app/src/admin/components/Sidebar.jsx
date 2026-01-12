import React from "react";
import { Link } from "react-router-dom";

import { FiGrid, FiShoppingBag, FiUsers, FiClipboard } from "react-icons/fi";
import "../styles/AdminLayout.css";

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">LOGO</div>

      <nav className="admin-nav">
        <Link to="/admin" className="nav-item active">
          <FiGrid /> Dashboard
        </Link>

        <Link to="/admin/products" className="nav-item">
          <FiShoppingBag /> Product
        </Link>

        <Link to="/admin/orders" className="nav-item">
          <FiClipboard /> Orders
        </Link>

        <Link to="/admin/customers" className="nav-item">
          <FiUsers /> Customers
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
