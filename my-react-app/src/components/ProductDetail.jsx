import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import API from "../services/api";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===============================
  // FETCH PRODUCT + RECOMMENDED
  // ===============================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, allRes] = await Promise.all([
          API.get(`/products/${id}`),
          API.get(`/products`)
        ]);

        setProduct(productRes.data);
        setAllProducts(allRes.data);
      } catch (err) {
        console.error("Product fetch error:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!product) return <h2 className="not-found">Product not found</h2>;

  // Recommended: first 4 products except current
  const recommended = allProducts
    .filter((p) => p._id !== product._id)
    .slice(0, 4);

  return (
    <div className="product-detail">

      <div className="pd-top">

        {/* LEFT — IMAGE (single) */}
        <div className="pd-gallery">
          <div className="pd-thumbs">
            <img
              src={`https://buycom-api.vercel.app${product.image}`}
              alt={product.name}
            />
          </div>

          <div className="pd-main-image">
            <img
              src={`https://buycom-api.vercel.app${product.image}`}
              alt={product.name}
            />
          </div>
        </div>

        {/* RIGHT — INFO */}
        <div className="pd-info">

          <h2>{product.name}</h2>

          <div className="pd-ratings">
            ⭐⭐⭐⭐⭐ <span>5.0</span>
            <span className="pd-reviews">12 reviews</span>
          </div>

          <div className="pd-price">
            <span className="new">₦{product.price.toLocaleString()}</span>
          </div>

          <p className="pd-desc">{product.description}</p>

          {/* Sizes */}
          <div className="pd-sizes">
            <label>Choose Size</label>
            <div className="size-options">
              {["Small", "Medium", "Large", "X-Large"].map((s) => (
                <button key={s}>{s}</button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="pd-qty">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <div className="pd-actions">
            <button className="add-cart">Add to Cart</button>
            <button className="order-now">Order Now</button>
          </div>

        </div>
      </div>

      {/* ============================
         YOU MIGHT ALSO LIKE
      ============================ */}
      <div className="pd-recommend">
        <h3>You might also like</h3>

        <div className="pd-recommend-grid">
          {recommended.map((p) => (
            <Link
              to={`/product/${p._id}`}
              key={p._id}
              className="rec-card-link"
            >
              <div className="rec-card">
                <img
                  src={`https://buycom-api.vercel.app${p.image}`}
                  alt={p.name}
                />
                <h4>{p.name}</h4>
                <p>₦{p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
