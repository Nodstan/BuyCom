import React from "react";
import "./Categories.css";
import { categories } from "../data/products";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-page">

      {/* LEFT SIDEBAR */}
      <aside className="cat-sidebar">
        <h3>CATEGORIES</h3>
        <ul>
          <li>Cloth</li>
          <li>Shoes</li>
          <li>Cosmetics</li>
          <li>Bags</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="cat-content">

        {/* ----- CLOTH ----- */}
        <section className="cat-section">
          <h2>CLOTH</h2>

          <div className="cat-grid">
            {categories.cloth.map((item) => (
              <Link to={`/product/${item.id}`} className="cat-card" key={item.id}>
                <div className="cat-img-box">
                  <img src={item.images[0]} alt="" />
                </div>

                <h4>{item.name}</h4>

                <div className="rating">
                  ⭐⭐⭐⭐☆ <span>{item.rating}</span>
                </div>

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

          <button className="view-all">View All</button>
        </section>

        {/* SHOES */}
        <section className="cat-section">
          <h2>SHOES</h2>

          <div className="cat-grid">
            {categories.shoes.map((item) => (
              <Link to={`/product/${item.id}`} className="cat-card" key={item.id}>
                <div className="cat-img-box">
                  <img src={item.images[0]} alt="" />
                </div>

                <h4>{item.name}</h4>

                <div className="rating">
                  ⭐⭐⭐⭐☆ <span>{item.rating}</span>
                </div>

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

          <button className="view-all">View All</button>
        </section>

        {/* COSMETICS */}
        <section className="cat-section">
          <h2>COSMETICS</h2>

          <div className="cat-grid">
            {categories.cosmetics.map((item) => (
              <Link to={`/product/${item.id}`} className="cat-card" key={item.id}>
                <div className="cat-img-box">
                  <img src={item.images[0]} alt="" />
                </div>

                <h4>{item.name}</h4>

                <div className="rating">
                  ⭐⭐⭐⭐☆ <span>{item.rating}</span>
                </div>

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

          <button className="view-all">View All</button>
        </section>

        {/* BAGS */}
        <section className="cat-section">
          <h2>BAGS</h2>

          <div className="cat-grid">
            {categories.bags.map((item) => (
              <Link to={`/product/${item.id}`} className="cat-card" key={item.id}>
                <div className="cat-img-box">
                  <img src={item.images[0]} alt="" />
                </div>

                <h4>{item.name}</h4>

                <div className="rating">
                  ⭐⭐⭐⭐☆ <span>{item.rating}</span>
                </div>

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

          <button className="view-all">View All</button>
        </section>

      </div>

    </div>
  );
};

export default Categories;
