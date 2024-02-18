import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
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
