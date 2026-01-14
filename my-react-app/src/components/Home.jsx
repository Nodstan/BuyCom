import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import heroImg from "../assets/hero.png";
import verifiedIcon from "../assets/verified.png";
import { Link } from "react-router-dom";
import API from "../services/api";

const REVIEWS = [
  { name: "Sarah M.", text: "I'm blown away by the quality and style…" },
  { name: "Alex K.", text: "Finding clothes that align with my personal style…" },
  { name: "James L.", text: "As someone who's always on the lookout for unique fashion pieces…" },
];

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [topSelling, setTopSelling] = useState([]);

  const reviewsRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const productsRes = await API.get("/products");
        setNewArrivals(productsRes.data.slice(0, 4));

        const topRes = await API.get("/products/top-selling");
        setTopSelling(topRes.data.slice(4, 8));
      } catch (err) {
        console.error("Home fetch error:", err);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    const scroller = reviewsRef.current;
    if (!scroller) return;

    const cardWidth = 420;
    const originalWidth = cardWidth * REVIEWS.length;

    const startAutoScroll = () => {
      if (autoScrollRef.current) return;

      autoScrollRef.current = setInterval(() => {
        if (isUserScrolling.current) return;

        scroller.scrollLeft += cardWidth;

        if (scroller.scrollLeft >= originalWidth) {
          scroller.scrollLeft = 0;
        }
      }, 2500);
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    };

    const handleScroll = () => {
      if (scroller.scrollLeft < 0) {
        scroller.scrollLeft = 0;
      }
    };

    const userStart = () => {
      isUserScrolling.current = true;
      stopAutoScroll();
    };

    const userEnd = () => {
      isUserScrolling.current = false;
      startAutoScroll();
    };

    scroller.addEventListener("scroll", handleScroll);
    scroller.addEventListener("mousedown", userStart);
    scroller.addEventListener("touchstart", userStart);
    scroller.addEventListener("wheel", userStart);
    scroller.addEventListener("mouseleave", userEnd);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      scroller.removeEventListener("scroll", handleScroll);
      scroller.removeEventListener("mousedown", userStart);
      scroller.removeEventListener("touchstart", userStart);
      scroller.removeEventListener("wheel", userStart);
      scroller.removeEventListener("mouseleave", userEnd);
    };
  }, []);

  return (
    <div className="home">

      {/* HERO */}
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
          {newArrivals.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              className="product-card"
            >
              <div className="img-box">
                <img
                  src={`https://buycom-api.vercel.app${item.image}`}
                  alt={item.name}
                />
              </div>

              <h4>{item.name}</h4>
              <p className="price">₦{item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP SELLING */}
      <section className="section">
        <h2>Top Selling</h2>

        <div className="product-grid">
          {topSelling.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              className="product-card"
            >
              <div className="img-box">
                <img
                  src={`https://buycom-api.vercel.app${item.image}`}
                  alt={item.name}
                />
              </div>

              <h4>{item.name}</h4>
              <p className="price">₦{item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>

        <Link to="/categories" className="view-btn">
          View Categories
        </Link>
      </section>

      <section className="section">
        <div className="reviews-header">
          <h2>OUR HAPPY CUSTOMERS</h2>

          <div className="reviews-arrows">
            <button
              className="arrow-btn"
              onClick={() =>
                (reviewsRef.current.scrollLeft = Math.max(
                  0,
                  reviewsRef.current.scrollLeft - 420
                ))
              }
            >
              ❮
            </button>

            <button
              className="arrow-btn"
              onClick={() =>
                (reviewsRef.current.scrollLeft += 420)
              }
            >
              ❯
            </button>
          </div>
        </div>

        <div className="reviews-wrapper">
          <div className="reviews" ref={reviewsRef}>
            {REVIEWS.map((r, i) => (
              <div className="review-card" key={`orig-${i}`}>
                <div className="stars">★★★★★</div>
                <h4>
                  {r.name}
                  <img
                    src={verifiedIcon}
                    alt="verified"
                    className="verified-icon"
                  />
                </h4>
                <p>{r.text}</p>
              </div>
            ))}

            {REVIEWS.map((r, i) => (
              <div className="review-card" key={`dup-${i}`}>
                <div className="stars">★★★★★</div>
                <h4>
                  {r.name}
                  <img
                    src={verifiedIcon}
                    alt="verified"
                    className="verified-icon"
                  />
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
