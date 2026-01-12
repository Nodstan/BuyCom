// src/data/products.js

// IMPORT ASSETS
import bag from "../assets/bag.png";
import jeans from "../assets/jeans.png";
import Cshirt from "../assets/c-shirt.png";
import sneakers from "../assets/sneakers.png";

import sandals from "../assets/sandals.png";
import tshirt from "../assets/t-shirt.png";
import shorts from "../assets/short.png";
import sportshoe from "../assets/s-shoes.png";

import powder from "../assets/powder.png";
import oil from "../assets/oil.png";
import cream from "../assets/cream.png";

import backpack from "../assets/backpack.png";
import slingbag from "../assets/slingbag.png";

//
// ======================
// CATEGORY-BASED DATA
// ======================
//

export const categories = {
  cloth: [
    {
      id: 101,
      name: "Loose Fit Bermuda Shorts",
      price: 2500,
      oldPrice: null,
      rating: 4.0,
      reviews: 105,
      images: [shorts, shorts, shorts],
      description: "Comfortable bermuda shorts for casual wear.",
    },
    {
      id: 102,
      name: "Vertical Striped Shirt",
      price: 4000,
      oldPrice: 5000,
      rating: 4.5,
      reviews: 249,
      images: [Cshirt, Cshirt, Cshirt],
      description: "Premium striped shirt made of breathable cotton.",
    },
    {
      id: 103,
      name: "Faded Skinny Jeans",
      price: 5000,
      oldPrice: null,
      rating: 4.2,
      reviews: 189,
      images: [jeans, jeans, jeans],
      description: "Stylish faded skinny jeans with stretch fit.",
    },
  ],

  shoes: [
    {
      id: 104,
      name: "Vans Sneakers",
      price: 8000,
      oldPrice: 10000,
      rating: 4.7,
      reviews: 320,
      images: [sneakers, sneakers, sneakers],
      description: "Classic vans sneakers built for comfort and balance.",
    },
    {
      id: 105,
      name: "Peep Toe Heeled Sandals",
      price: 4000,
      oldPrice: 5000,
      rating: 4.5,
      reviews: 120,
      images: [sandals, sandals, sandals],
      description: "Elegant sandals suitable for events and outings.",
    },
    {
      id: 106,
      name: "Sport Shoe",
      price: 5000,
      oldPrice: null,
      rating: 4.8,
      reviews: 155,
      images: [sportshoe, sportshoe, sportshoe],
      description: "Durable sport shoes designed for performance.",
    },
  ],

  cosmetics: [
    {
      id: 107,
      name: "Solist Clear Powder",
      price: 2500,
      oldPrice: null,
      rating: 4.5,
      reviews: 305,
      images: [powder, powder, powder],
      description: "Refreshing face powder suitable for all skin types.",
    },
    {
      id: 108,
      name: "Natura Brazil Revitalizing Oil",
      price: 4000,
      oldPrice: 5000,
      rating: 4.6,
      reviews: 260,
      images: [oil, oil, oil],
      description: "Rejuvenating body oil infused with natural extracts.",
    },
    {
      id: 109,
      name: "Acqua Di Parma Body Cream",
      price: 5000,
      oldPrice: null,
      rating: 4.8,
      reviews: 410,
      images: [cream, cream, cream],
      description: "Luxury moisturizing body cream with soft fragrance.",
    },
  ],

  bags: [
    {
      id: 110,
      name: "Backpack",
      price: 2500,
      oldPrice: null,
      rating: 4.0,
      reviews: 165,
      images: [backpack, backpack, backpack],
      description: "Durable daily backpack with multiple compartments.",
    },
    {
      id: 111,
      name: "Brown Sling Bag",
      price: 5000,
      oldPrice: 6000,
      rating: 4.5,
      reviews: 208,
      images: [slingbag, slingbag, slingbag],
      description: "Stylish sling bag with high-quality leather finish.",
    },
    {
      id: 112,
      name: "School Bag",
      price: 7200,
      oldPrice: null,
      rating: 4.6,
      reviews: 420,
      images: [bag, bag, bag],
      description: "Spacious school bag with reinforced straps.",
    },
  ],
};

//
// ============================
// GLOBAL PRODUCTS LIST (OPTION 1)
// ============================
//

// 👇 Combine all category arrays into ONE list
export const products = [
  ...categories.cloth,
  ...categories.shoes,
  ...categories.cosmetics,
  ...categories.bags,
];
