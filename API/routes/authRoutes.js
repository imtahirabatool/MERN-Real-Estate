import express from "express";
import { google, signOut, signup } from "../controllers/authController.js";
import { signin } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/google", google);
authRouter.get("/signout", signOut);

export default authRouter;
