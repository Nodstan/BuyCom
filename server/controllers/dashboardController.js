import Order from "../models/Order.js";
import Product from "../models/Product.js";

/**
 * KPI STATS
 */
export const getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const revenueAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);

    const totalRevenue = revenueAgg[0]?.total || 0;
    const totalProducts = await Product.countDocuments();

    res.json({
      totalOrders,
      totalRevenue,
      totalProducts,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * TOP SELLING PRODUCTS
 */
export const getTopProducts = async (req, res) => {
  try {
    const products = await Order.aggregate([
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: "$orderItems.product",
          sales: { $sum: "$orderItems.quantity" },
          amount: {
            $sum: {
              $multiply: ["$orderItems.quantity", "$orderItems.price"],
            },
          },
        },
      },
      { $sort: { sales: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      { $unwind: "$product" },
      {
        $project: {
          _id: 1,
          name: "$product.name",
          sku: "$product.sku",
          price: "$product.price",
          stock: "$product.stock",
          sales: 1,
          amount: 1,
        },
      },
    ]);

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * SALES BY LOCATION
 */
export const getSalesByLocation = async (req, res) => {
  try {
    const locations = await Order.aggregate([
      {
        $group: {
          _id: "$city",
          amount: { $sum: "$totalAmount" },
        },
      },
      {
        $project: {
          city: "$_id",
          amount: 1,
          change: {
            $cond: [
              { $gte: ["$amount", 10000] },
              12,
              -5,
            ],
          },
        },
      },
      { $sort: { amount: -1 } },
    ]);

    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * RECENT ORDERS
 */
export const getRecentOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(6)
      .select("customerName totalAmount paymentMethod status createdAt");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
