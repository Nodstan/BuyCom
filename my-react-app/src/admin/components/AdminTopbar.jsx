import React from "react";
import { FiSearch, FiBell, FiMail } from "react-icons/fi";
import "../styles/AdminLayout.css";

const AdminTopbar = () => {
  return (
    <header className="admin-topbar">
      <div className="admin-search">
        <FiSearch className="icon" />
        <input type="text" placeholder="Search for products..." />
      </div>

      <div className="admin-actions">
        <FiBell className="action-icon" />
        <FiMail className="action-icon" />
        <div className="admin-avatar">S</div>
      </div>
    </header>
  );
};

export default AdminTopbar;
