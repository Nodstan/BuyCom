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
