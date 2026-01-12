import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    city: String,
    paymentMethod: String,
    status: {
      type: String,
      enum: ["processing", "shipped", "delivered"],
      default: "processing",
    },
    totalAmount: Number,
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        price: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
