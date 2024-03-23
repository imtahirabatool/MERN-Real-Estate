import express from "express";
import {
  createListing,
  deleteListing,
  getSingleListing,
  updateListing,
  getAllListings,
  getListings,
} from "../controllers/listingController.js";
import { verifyToken } from "../utils/verifyUser.js";

const listingRoute = express.Router();

listingRoute.get("/get/:id", getSingleListing);
listingRoute.post("/create", verifyToken, createListing);
listingRoute.delete("/delete/:id", verifyToken, deleteListing);
listingRoute.post("/update/:id", verifyToken, updateListing);
listingRoute.get("/all", getAllListings);
listingRoute.get("/get", getListings);

export default listingRoute;
