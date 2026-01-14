import User from "../models/User.js";

/**
 * GET PROFILE
 */
export const getProfile = async (req, res) => {
  res.json(req.user);
};

/**
 * UPDATE PROFILE
 */
export const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  Object.assign(user, req.body);
  await user.save();

  res.json(user);
};

/**
 * GET PREFERENCES
 */
export const getPreferences = async (req, res) => {
  res.json(req.user.preferences);
};

/**
 * UPDATE PREFERENCES
 */
export const updatePreferences = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.preferences = req.body;
  await user.save();

  res.json(user.preferences);
};

/**
 * SECURITY SETTINGS
 */
export const updateSecurity = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.twoFactorEnabled = req.body.twoFactorEnabled;
  await user.save();

  res.json({ twoFactorEnabled: user.twoFactorEnabled });
};

export const getPaymentMethods = async (req, res) => {
  res.json(req.user.paymentMethods || []);
};

export const addPaymentMethod = async (req, res) => {
  // NOTE: cvc is deliberately ignored/discarded here for security
  const { cardNumber, cardholderName, expMonth, expYear } = req.body;

  if (!cardNumber || !cardholderName || !expMonth || !expYear) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const digits = String(cardNumber).replace(/\D/g, "");
  const last4 = digits.slice(-4);
  const brand =
    digits[0] === "4"
      ? "Visa"
      : digits[0] === "5"
      ? "Mastercard"
      : "Card";

  const user = await User.findById(req.user._id);

  user.paymentMethods.push({
    cardBrand: brand,
    cardLast4: last4,
    expMonth,
    expYear,
    cardholderName,
  });

  await user.save();

  res.json(user.paymentMethods);
};
