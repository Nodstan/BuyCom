import React from "react";
import "../styles/AdminLayout.css";
import Sidebar from "./Sidebar";
import AdminTopbar from "./AdminTopbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <AdminTopbar />

        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
