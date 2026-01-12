import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import slugify from "slugify";

dotenv.config();
await connectDB();

const data = {
  cloth: [
    {
      name: "Loose Fit Bermuda Shorts",
      price: 2500,
      description: "Comfortable bermuda shorts for casual wear.",
      image: "/uploads/short.png",
    },
    {
      name: "Vertical Striped Shirt",
      price: 4000,
      description: "Premium striped shirt made of breathable cotton.",
      image: "/uploads/c-shirt.png",
    },
    {
      name: "Faded Skinny Jeans",
      price: 5000,
      description: "Stylish faded skinny jeans with stretch fit.",
      image: "/uploads/jeans.png",
    },
  ],

  shoes: [
    {
      name: "Vans Sneakers",
      price: 8000,
      description: "Classic vans sneakers built for comfort and balance.",
      image: "/uploads/sneakers.png",
    },
    {
      name: "Peep Toe Heeled Sandals",
      price: 4000,
      description: "Elegant sandals suitable for events and outings.",
      image: "/uploads/sandals.png",
    },
    {
      name: "Sport Shoe",
      price: 5000,
      description: "Durable sport shoes designed for performance.",
      image: "/uploads/s-shoes.png",
    },
  ],

  cosmetics: [
    {
      name: "Solist Clear Powder",
      price: 2500,
      description: "Refreshing face powder suitable for all skin types.",
      image: "/uploads/powder.png",
    },
    {
      name: "Natura Brazil Revitalizing Oil",
      price: 4000,
      description: "Rejuvenating body oil infused with natural extracts.",
      image: "/uploads/oil.png",
    },
    {
      name: "Acqua Di Parma Body Cream",
      price: 5000,
      description: "Luxury moisturizing body cream with soft fragrance.",
      image: "/uploads/cream.png",
    },
  ],

  bags: [
    {
      name: "Backpack",
      price: 2500,
      description: "Durable daily backpack with multiple compartments.",
      image: "/uploads/backpack.png",
    },
    {
      name: "Brown Sling Bag",
      price: 5000,
      description: "Stylish sling bag with high-quality leather finish.",
      image: "/uploads/slingbag.png",
    },
    {
      name: "School Bag",
      price: 7200,
      description: "Spacious school bag with reinforced straps.",
      image: "/uploads/bag.png",
    },
  ],
};

const seed = async () => {
  try {
    
    await Product.deleteMany({});
    await Category.deleteMany({});

    for (const categoryName in data) {
      const category = await Category.create({
        name: categoryName,
        slug: slugify(categoryName),
      });

      for (const product of data[categoryName]) {
        await Product.create({
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.image,
          stock: 20,
          category: category._id.toString(),
        });
      }
    }

    console.log("✅ Database seeded successfully WITH IMAGES");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seed();
