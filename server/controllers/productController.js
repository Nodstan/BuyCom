import Product from "../models/Product.js";

/**
 * CREATE PRODUCT
 */
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, image } = req.body;

    if (!name || !price || !category || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET ALL PRODUCTS
 */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "slug name")
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * GET TOP SELLING PRODUCTS (CUSTOMER SIDE)
 * TEMP LOGIC: newest products
 * Later replaced with real sales data
 */
export const getTopSellingProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
      .limit(8);

    res.json(products);
  } catch (error) {
    console.error("Top selling error:", error);
    res.status(500).json({ message: "Failed to fetch top selling products" });
  }
};

/**
 * GET SINGLE PRODUCT
 */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE PRODUCT
 */
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
