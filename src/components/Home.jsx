import React, { useEffect } from "react";
import "./Home.css";
import { products } from "../data/products";
import heroImg from "../assets/hero.png";
import verifiedIcon from "../assets/verified.png";
import { Link } from "react-router-dom";

const Home = () => {

  // ===============================
  // AUTO-SCROLL + LOOP + SNAP
  // ===============================
  useEffect(() => {
    const scroller = document.querySelector(".reviews");
    if (!scroller) return;

    const contentWidth = scroller.scrollWidth;

    // Start slightly to avoid left boundary
    scroller.scrollLeft = 1;

    const handleScroll = () => {
      // Prevent scrolling too far left
      if (scroller.scrollLeft <= 0) {
        scroller.scrollLeft = 1;
      }

      // Loop when reaching midpoint (where duplicate begins)
      if (scroller.scrollLeft >= contentWidth / 2) {
        scroller.scrollLeft = 1;
      }
    };

    scroller.addEventListener("scroll", handleScroll);

    // -------------------------------
    // AUTO-SCROLL EVERY 4 SECONDS
    // -------------------------------
    const autoScroll = setInterval(() => {
      scroller.scrollBy({
        left: 420, // width of one card
        behavior: "smooth"
      });
    }, 2000);

    // Stop auto-scroll on user interaction
    const pause = () => clearInterval(autoScroll);
    scroller.addEventListener("mousedown", pause);
    scroller.addEventListener("touchstart", pause);
    scroller.addEventListener("wheel", pause);

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      scroller.removeEventListener("mousedown", pause);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("wheel", pause);
      clearInterval(autoScroll);
    };
  }, []);

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Find Choice That Matches Your Style</h1>
          <p>
            Browse through our diverse range of individually crafted products
            sourcing the finest materials from our partners.
          </p>
          <button className="browse-btn">Browse</button>

          <div className="stats">
            <div><h3>20+</h3><p>Brands</p></div>
            <div><h3>200+</h3><p>High-Quality Products</p></div>
            <div><h3>2,000+</h3><p>Happy Customers</p></div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="section">
        <h2>New Arrivals</h2>

        <div className="product-grid">
          {products.slice(0, 4).map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="product-card">
              <div className="img-box">
                <img src={item.images[0]} alt="" />
              </div>

              <h4>{item.name}</h4>

              <div className="rating">⭐⭐⭐⭐⭐ <span>{item.rating}/5</span></div>

              <p className="price">
                {item.price}
                {item.oldPrice && (
                  <>
                    <span className="old-price">{item.oldPrice}</span>
                    <span className="tag">
                      -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                    </span>
                  </>
                )}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP SELLING */}
      <section className="section">
        <h2>Top Selling</h2>

        <div className="product-grid">
          {products.slice(4, 8).map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="product-card">
              <div className="img-box">
                <img src={item.images[0]} alt="" />
              </div>

              <h4>{item.name}</h4>

              <div className="rating">⭐⭐⭐⭐⭐ <span>{item.rating}/5</span></div>

              <p className="price">
                {item.price}
                {item.oldPrice && (
                  <>
                    <span className="old-price">{item.oldPrice}</span>
                    <span className="tag">
                      -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                    </span>
                  </>
                )}
              </p>
            </Link>
          ))}
        </div>

        <Link to="/categories" className="view-btn">
  View Categories
</Link>

      </section>

      {/* ===============================
          REVIEWS SECTION
      =============================== */}
      <section className="section">

        {/* Header */}
        <div className="reviews-header">
          <h2>OUR HAPPY CUSTOMERS</h2>

          <div className="reviews-arrows">
            <button
              className="arrow-btn"
              onClick={() => {
                document.querySelector(".reviews")
                  .scrollBy({ left: -420, behavior: "smooth" });
              }}
            >
              ❮
            </button>

            <button
              className="arrow-btn"
              onClick={() => {
                document.querySelector(".reviews")
                  .scrollBy({ left: 420, behavior: "smooth" });
              }}
            >
              ❯
            </button>
          </div>
        </div>

        {/* Scrollable Reviews */}
        <div className="reviews-wrapper">
          <div className="reviews">

            {/* ORIGINAL CARDS */}
            {[
              { name: "Sarah M.", text: "I'm blown away by the quality and style…" },
              { name: "Alex K.", text: "Finding clothes that align with my personal style…" },
              { name: "James L.", text: "As someone who's always on the lookout for unique fashion pieces…" }
            ].map((r, i) => (
              <div className="review-card" key={i}>
                <div className="stars">★★★★★</div>

                <h4>
                  {r.name}
                  <img src={verifiedIcon} alt="verified" className="verified-icon" />
                </h4>

                <p>{r.text}</p>
              </div>
            ))}

            {/* DUPLICATES FOR LOOP */}
            {[
              { name: "Sarah M.", text: "I'm blown away by the quality and style…" },
              { name: "Alex K.", text: "Finding clothes that align with my personal style…" },
              { name: "James L.", text: "As someone who's always on the lookout for unique fashion pieces…" }
            ].map((r, i) => (
              <div className="review-card" key={"dup-" + i}>
                <div className="stars">★★★★★</div>

                <h4>
                  {r.name}
                  <img src={verifiedIcon} alt="verified" className="verified-icon" />
                </h4>

                <p>{r.text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
