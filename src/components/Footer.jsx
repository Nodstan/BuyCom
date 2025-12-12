import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // Initialize EmailJS once (bypasses adblock detection)
  useEffect(() => {
    emailjs.init("goygLLNvibeCQ0FZg"); // Your PUBLIC KEY
  }, []);

  const sendSubscription = () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    setStatus("Sending...");

    // Using emailjs.send() AFTER init() makes it less likely to be blocked
    emailjs
      .send(
        "service_o1hya5m",        // Your service ID
        "template_l8gl3pv",       // Your template ID
        { subscriber_email: email } // Template variable
      )
      .then(() => {
        setStatus("Subscribed successfully!");
        setEmail("");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("Subscription failed. Try again.");
      });
  };

  return (
    <footer className="footer">

      {/* NEWSLETTER BAR */}
      <div className="newsletter-wrapper">
        <h2>
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        <div className="newsletter-input">
          <div className="input-box">
            <FiMail className="mail-icon" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button onClick={sendSubscription}>
            Subscribe to Newsletter
          </button>
        </div>

        {status && <p className="newsletter-status">{status}</p>}
      </div>

      {/* FOOTER CONTENT */}
      <div className="footer-inner">

        <div className="footer-grid">

          {/* LOGO + ABOUT */}
          <div className="footer-col">
            <h3 className="logo">LOGO</h3>
            <p className="brand-desc">
              Collection that suits your style <br />
              and enhances your pride.
            </p>

            <div className="socials">
              <div className="soc"></div>
              <div className="soc"></div>
              <div className="soc"></div>
              <div className="soc"></div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>COMPANY</h4>
            <p>About</p>
            <p>Contact</p>
            <p>Career</p>
          </div>

          {/* HELP */}
          <div className="footer-col">
            <h4>HELP</h4>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          {/* FAQ */}
          <div className="footer-col">
            <h4>FAQ</h4>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>

          {/* RESOURCES */}
          <div className="footer-col">
            <h4>RESOURCES</h4>
            <p>eBooks</p>
            <p>Blog</p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="footer-bottom">
          <p>LOGO © 2024, All Rights Reserved</p>

          <div className="payments">
            <div className="pay"></div>
            <div className="pay"></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
