import React from "react";
import "./Checkout.css";
import { FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";

const Checkout = () => {
  return (
    <div className="checkout-page">

      <h2>Checkout</h2>

      <div className="checkout-grid">

        {/* LEFT — PAYMENT SECTION */}
        <div className="payment-box">
          <h3>Payment</h3>

          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9101 1121" />

          <div className="row-2">
            <div>
              <label>Expiration Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>

            <div>
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>

          <div className="save-card">
            <input type="checkbox" />
            <span>Save card details</span>
          </div>

          <button className="pay-btn">Make Payment</button>
        </div>

        {/* RIGHT — DELIVERY DETAILS */}
        <div className="delivery-box">
          <h3>Deliver Detail</h3>

          <div className="detail-row">
            <FiMail className="detail-icon" />
            <div>
              <p className="detail-title">Email</p>
              <p>lindablair@mail.com</p>
            </div>
          </div>

          <div className="detail-row">
            <FiPhone className="detail-icon" />
            <div>
              <p className="detail-title">Phone Number</p>
              <p>080 5414 8778</p>
            </div>
          </div>

          <div className="detail-row">
            <FiMapPin className="detail-icon" />
            <div>
              <p className="detail-title">Delivery Address</p>
              <p>No 1 taiwo road Ibadan</p>
            </div>
          </div>

          <div className="detail-row">
            <FiCalendar className="detail-icon" />
            <div>
              <p className="detail-title">Transaction Date</p>
              <p>12 August 2024</p>
            </div>
          </div>

          <div className="btn-row">
            <button className="confirm-btn">Confirm</button>
            <button className="edit-btn">Edit</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Checkout;
