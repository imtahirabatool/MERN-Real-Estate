import express from "express";
import {
  createListing,
  deleteListing,
  getUserListings,
} from "../controllers/listingController.js";
import { verifyToken } from "../utils/verifyUser.js";

const listingRoute = express.Router();

listingRoute.get("/user/:userId", getUserListings);
listingRoute.post("/create", verifyToken, createListing);
listingRoute.delete("/delete/:id", verifyToken, deleteListing);

export default listingRoute;
