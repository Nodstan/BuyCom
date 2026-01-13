import connectDB from "../config/db.js";
import Product from "../models/Product.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  await connectDB();

  try {
    if (req.method === "GET") {
      const products = await Product.find();
      return res.status(200).json(products);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
