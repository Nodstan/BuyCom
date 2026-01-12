import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import API from "../../services/api";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [topProducts, setTopProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [orders, setOrders] = useState([]);

  const progress = 75.55;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const statsRes = await API.get("/dashboard/stats");
        setStats(statsRes.data);

        const topRes = await API.get("/dashboard/top-products");
        setTopProducts(topRes.data);

        const locRes = await API.get("/dashboard/sales-location");
        setLocations(locRes.data);

        const ordersRes = await API.get("/dashboard/recent-orders");
        setOrders(ordersRes.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <AdminLayout>
      <div className="dashboard-grid">

        {/* FILTER ROW */}
        <div className="filter-row">
          <div className="filters-left">
            <button className="filter-btn active">All Time</button>
            <button className="filter-btn">12 Months</button>
            <button className="filter-btn">30 Days</button>
            <button className="filter-btn">7 Days</button>
            <button className="filter-btn">24 Hours</button>
          </div>

          <div className="filters-right">
            <button className="outline-btn">Select Dates</button>
            <button className="primary-btn">+ Add Product</button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="kpi-row">
          <div className="kpi-card">
            <p>Total Revenue</p>
            <h2>{stats ? stats.totalRevenue.toLocaleString() : "—"}</h2>
            <span className="badge positive">+10%</span>
          </div>

          <div className="kpi-card">
            <p>Total Sales</p>
            <h2>{stats ? stats.totalOrders : "—"}</h2>
            <span className="badge positive">+15%</span>
          </div>

          <div className="kpi-card">
            <p>Withdrawal</p>
            <h2>500,000</h2>
          </div>

          <div className="kpi-card">
            <p>Balance</p>
            <h2>{stats ? stats.totalRevenue.toLocaleString() : "—"}</h2>
          </div>
        </div>

        {/* SALES PROGRESS + STATISTICS */}
        <div className="row-2col">
          <div className="card center">
            <h3>Sales Progress</h3>

            <div className="progress-circle">
              <svg viewBox="0 0 160 160">
                <circle className="circle-bg" cx="80" cy="80" r={radius} />
                <circle
                  className="circle"
                  cx="80"
                  cy="80"
                  r={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>

              <div className="progress-text">
                <h2>{progress}%</h2>
                <span>This Month</span>
              </div>
            </div>

            <div className="progress-stats">
              <div>
                <strong>{stats?.totalOrders ?? "—"}</strong>
                <span>Orders</span>
              </div>
              <div>
                <strong>{stats?.totalRevenue ?? "—"}</strong>
                <span>Revenue</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Returns</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Statistics</h3>
            <p className="muted">Revenue and Sales</p>

            <div className="line-chart">
              <svg viewBox="0 0 600 200">
                <polyline
                  fill="none"
                  stroke="#ffc633"
                  strokeWidth="3"
                  points="0,120 60,100 120,130 180,90 240,110 300,80 360,95 420,70 480,85 540,60"
                />
                <polyline
                  fill="none"
                  stroke="#ff4d4d"
                  strokeWidth="3"
                  points="0,140 60,150 120,135 180,120 240,140 300,110 360,130 420,100 480,120 540,105"
                />
              </svg>

              <div className="legend">
                <span><i className="dot yellow"></i> Revenue</span>
                <span><i className="dot red"></i> Sales</span>
              </div>
            </div>
          </div>
        </div>

        {/* TOP SELLING + SALES BY LOCATION */}
        <div className="row-2col">

          {/* TOP SELLING */}
          <div className="card">
            <div className="card-header">
              <h3>Top Selling Product</h3>
              <button className="outline-btn small">Filters</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Sales</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {topProducts.length ? topProducts.map(p => (
                  <tr key={p._id}>
                    <td>{p.name} <span className="sub">{p.sku}</span></td>
                    <td>{p.sales}</td>
                    <td>${p.amount.toLocaleString()}</td>
                    <td>${p.price}</td>
                    <td>
                      <span className={`status ${p.stock < 5 ? "low" : "published"}`}>
                        {p.stock < 5 ? "Low Stock" : "Published"}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="5">No products</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* SALES BY LOCATION */}
          <div className="card">
            <h3>Sales by Location</h3>
            <p className="muted">Sales performance by location</p>

            <ul className="location-list">
              {locations.length ? locations.map(loc => (
                <li key={loc.city}>
                  <span>{loc.city}</span>
                  <span>
                    ${loc.amount.toLocaleString()}{" "}
                    <b className={loc.change >= 0 ? "up" : "down"}>
                      {loc.change > 0 ? "+" : ""}{loc.change}%
                    </b>
                  </span>
                </li>
              )) : (
                <li>No data</li>
              )}
            </ul>
          </div>
        </div>

        {/* RECENT ORDERS — FULL WIDTH, UNDER TOP SELLING */}
        <div className="card">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <button className="primary-btn small">See More</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.length ? orders.map(order => (
                <tr key={order._id}>
                  <td>#{order._id.slice(-6)}</td>
                  <td>{order.customerName}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.totalAmount}</td>
                  <td>{order.paymentMethod}</td>
                  <td>
                    <span className={`status ${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6">No recent orders</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
