import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">

      <div className="pd-top">

        {/* LEFT — IMAGE GALLERY */}
        <div className="pd-gallery">
          <div className="pd-thumbs">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>

          <div className="pd-main-image">
            <img src={product.images[0]} alt="" />
          </div>
        </div>

        {/* RIGHT — PRODUCT INFO */}
        <div className="pd-info">

          <h2>{product.name}</h2>

          <div className="pd-ratings">
            ⭐⭐⭐⭐⭐ <span>{product.rating}</span>
            <span className="pd-reviews">{product.reviews} reviews</span>
          </div>

          {/* Price */}
          <div className="pd-price">
            <span className="new">₦{product.price}</span>

            {product.oldPrice && (
              <>
                <span className="old">₦{product.oldPrice}</span>
                <span className="discount">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </span>
              </>
            )}
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
          {products
            .filter((p) => p.id !== product.id)   // remove current product
            .map((p) => (
              <Link 
                to={`/product/${p.id}`} 
                key={p.id}
                className="rec-card-link"
              >
                <div className="rec-card">
                  <img src={p.images[0]} alt="" />
                  <h4>{p.name}</h4>
                  <p>₦{p.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
