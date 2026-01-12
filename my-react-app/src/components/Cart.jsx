import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import bag from "../assets/bag.png";
import sneakers from "../assets/sneakers.png";
import oil from "../assets/oil.png"; // replace with your real image

const Cart = () => {

  const navigate = useNavigate();

  return (
    <div className="cart-page">

      <h2>Your cart</h2>

      <div className="cart-container">

        {/* LEFT — CART ITEMS */}
        <div className="cart-items">

          {/* ITEM 1 */}
          <div className="cart-item">
            <img src={oil} alt="product" className="item-img" />

            <div className="item-info">
              <h4>Natura Brazil Revatalizing Oil</h4>

              <div className="price-row">
                <span className="price">8000</span>
                <span className="old-price">10000</span>
                <span className="discount">-20%</span>
              </div>
            </div>

            <div className="quantity-box">
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>

            <button className="delete-btn">🗑️</button>
          </div>

          {/* ITEM 2 */}
          <div className="cart-item">
            <img src={sneakers} alt="product" className="item-img" />

            <div className="item-info">
              <h4>Vanz Sneakers</h4>

              <div className="price-row">
                <span className="price">9,000</span>
                <span className="old-price">12000</span>
                <span className="discount">-25%</span>
              </div>
            </div>

            <div className="quantity-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="delete-btn">🗑️</button>
          </div>

          {/* ITEM 3 */}
          <div className="cart-item">
            <img src={bag} alt="product" className="item-img" />

            <div className="item-info">
              <h4>School Bag</h4>

              <div className="price-row">
                <span className="price">7000</span>
              </div>
            </div>

            <div className="quantity-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="delete-btn">🗑️</button>
          </div>

        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="summary-card">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>24,000</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>3,500</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>27,500</span>
          </div>

          <div className="promo-box">
            <input type="text" placeholder="Add promo code" />
            <button className="apply-btn">Add to Cart</button>
          </div>

          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
  Checkout
</button>

        </div>

      </div>

    </div>
  );
};

export default Cart;
