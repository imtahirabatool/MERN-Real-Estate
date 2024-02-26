import express from "express";
import {
  createListing,
  deleteListing,
  getUserListings,
  updateListing,
  getAllListings,
} from "../controllers/listingController.js";
import { verifyToken } from "../utils/verifyUser.js";

const listingRoute = express.Router();

listingRoute.get("/get/:id", getUserListings);
listingRoute.post("/create", verifyToken, createListing);
listingRoute.delete("/delete/:id", verifyToken, deleteListing);
listingRoute.post("/update/:id", verifyToken, updateListing);
listingRoute.get("/all", getAllListings);

export default listingRoute;
