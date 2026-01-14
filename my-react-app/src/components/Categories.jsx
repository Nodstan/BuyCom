import React, { useEffect, useRef, useState } from "react";
import "./Categories.css";
import { Link, useLocation } from "react-router-dom";
import API from "../services/api";

/* ICONS */
import ClothIcon from "../icons/cloth.png";
import ShoeIcon from "../icons/shoe.png";
import CosmeticsIcon from "../icons/cosmetics.png";
import BagIcon from "../icons/bag.png";

const CATEGORY_META = {
  cloth: { label: "Cloth", icon: ClothIcon },
  shoes: { label: "Shoes", icon: ShoeIcon },
  cosmetics: { label: "Cosmetics", icon: CosmeticsIcon },
  bags: { label: "Bags", icon: BagIcon },
};

const Categories = () => {
  const [active, setActive] = useState("cloth");
  const [groupedProducts, setGroupedProducts] = useState({
    cloth: [],
    shoes: [],
    cosmetics: [],
    bags: [],
  });

  const clothRef = useRef(null);
  const shoesRef = useRef(null);
  const cosmeticsRef = useRef(null);
  const bagsRef = useRef(null);
  const location = useLocation();

  // ===============================
  // FETCH PRODUCTS & GROUP BY CATEGORY SLUG
  // ===============================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");

        const grouped = {
          cloth: [],
          shoes: [],
          cosmetics: [],
          bags: [],
        };

        res.data.forEach((product) => {
          const slug = product.category?.slug;
          if (slug && grouped[slug]) {
            grouped[slug].push(product);
          }
        });

        setGroupedProducts(grouped);
      } catch (error) {
        console.error("Category fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  const scrollWithOffset = (ref, section) => {
    const offset = 120;
    const topPos = ref.current.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: topPos - offset,
      behavior: "smooth",
    });

    setActive(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 150;

      if (bagsRef.current.getBoundingClientRect().top < offset)
        setActive("bags");
      else if (cosmeticsRef.current.getBoundingClientRect().top < offset)
        setActive("cosmetics");
      else if (shoesRef.current.getBoundingClientRect().top < offset)
        setActive("shoes");
      else if (clothRef.current.getBoundingClientRect().top < offset)
        setActive("cloth");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = (searchParams.get("q") || "").trim().toLowerCase();

  const allProducts = [
    ...groupedProducts.cloth,
    ...groupedProducts.shoes,
    ...groupedProducts.cosmetics,
    ...groupedProducts.bags,
  ];

  const filteredProducts = searchQuery
    ? allProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      )
    : [];

  return (
    <div className="categories-page">

      {/* SIDEBAR */}
      <aside className="cat-sidebar">
        <h2 className="sidebar-title">CATEGORIES</h2>

        <ul>
          {Object.keys(CATEGORY_META).map((key) => (
            <li
              key={key}
              className={active === key ? "active" : ""}
              onClick={() =>
                scrollWithOffset(
                  key === "cloth"
                    ? clothRef
                    : key === "shoes"
                    ? shoesRef
                    : key === "cosmetics"
                    ? cosmeticsRef
                    : bagsRef,
                  key
                )
              }
            >
              <img
                src={CATEGORY_META[key].icon}
                className="sidebar-icon"
                alt=""
              />
              {CATEGORY_META[key].label}
            </li>
          ))}
        </ul>
      </aside>

      <div className="cat-content">

        {searchQuery && (
          <section className="cat-section">
            <h2 className="cat-title">
              Search Results for "{searchQuery}"
            </h2>
            <div className="cat-grid">
              {filteredProducts.length === 0 && (
                <p>No products found.</p>
              )}
              {filteredProducts.map((item) => (
                <Link
                  to={`/product/${item._id}`}
                  className="cat-card"
                  key={item._id}
                >
                  <img
                    src={`http://localhost:5000${item.image}`}
                    className="product-img"
                    alt={item.name}
                  />
                  <h4 className="cat-name">{item.name}</h4>
                  <p className="price">
                    ₦{item.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CLOTH */}
        <section className="cat-section" ref={clothRef}>
          <h2 className="cat-title">CLOTH</h2>
          <div className="cat-grid">
            {groupedProducts.cloth.map((item) => (
              <Link to={`/product/${item._id}`} className="cat-card" key={item._id}>
                <img
                  src={`http://localhost:5000${item.image}`}
                  className="product-img"
                  alt={item.name}
                />
                <h4 className="cat-name">{item.name}</h4>
                <p className="price">₦{item.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* SHOES */}
        <section className="cat-section" ref={shoesRef}>
          <h2 className="cat-title">SHOES</h2>
          <div className="cat-grid">
            {groupedProducts.shoes.map((item) => (
              <Link to={`/product/${item._id}`} className="cat-card" key={item._id}>
                <img
                  src={`http://localhost:5000${item.image}`}
                  className="product-img"
                  alt={item.name}
                />
                <h4 className="cat-name">{item.name}</h4>
                <p className="price">₦{item.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* COSMETICS */}
        <section className="cat-section" ref={cosmeticsRef}>
          <h2 className="cat-title">COSMETICS</h2>
          <div className="cat-grid">
            {groupedProducts.cosmetics.map((item) => (
              <Link to={`/product/${item._id}`} className="cat-card" key={item._id}>
                <img
                  src={`http://localhost:5000${item.image}`}
                  className="product-img"
                  alt={item.name}
                />
                <h4 className="cat-name">{item.name}</h4>
                <p className="price">₦{item.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* BAGS */}
        <section className="cat-section" ref={bagsRef}>
          <h2 className="cat-title">BAGS</h2>
          <div className="cat-grid">
            {groupedProducts.bags.map((item) => (
              <Link to={`/product/${item._id}`} className="cat-card" key={item._id}>
                <img
                  src={`http://localhost:5000${item.image}`}
                  className="product-img"
                  alt={item.name}
                />
                <h4 className="cat-name">{item.name}</h4>
                <p className="price">₦{item.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Categories;
