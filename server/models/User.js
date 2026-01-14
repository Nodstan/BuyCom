import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    /* ======================
       CORE AUTH FIELDS
    ====================== */
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    /* ======================
       PROFILE (Account Page)
    ====================== */
    username: {
      type: String,
      trim: true,
    },

    dateOfBirth: {
      type: String,
    },

    permanentAddress: {
      type: String,
    },

    presentAddress: {
      type: String,
    },

    city: {
      type: String,
    },

    country: {
      type: String,
    },

    postalCode: {
      type: String,
    },

    /* ======================
       PREFERENCES
    ====================== */
    preferences: {
      currency: {
        type: String,
        default: "Naira",
      },
      timezone: {
        type: String,
        default: "(GMT +1:00)",
      },
      sendNotification: {
        type: Boolean,
        default: true,
      },
      promoEmail: {
        type: Boolean,
        default: false,
      },
      productRecommendation: {
        type: Boolean,
        default: true,
      },
    },

    twoFactorEnabled: {
      type: Boolean,
      default: false,
    },
    paymentMethods: [
      {
        cardBrand: String,
        cardLast4: String,
        expMonth: String,
        expYear: String,
        cardholderName: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
