import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://images.app.goo.gl/pfPjp88TQ6MuS2X69",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
