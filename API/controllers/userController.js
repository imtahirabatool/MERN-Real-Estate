import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listingModel.js";
export const test = (req, res) => {
  res.json({
    message: "API route is working!",
  });
};
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    const updateFields = {
      username: req.body.username,
      email: req.body.email,
      avatar: req.body.avatar,
    };

    // Update password if provided
    if (req.body.password) {
      updateFields.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your account!"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listing!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return next(errorHandler(404, "User not found!"));
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
