import Listing from "../models/listingModel.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
export const deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }

    if (req.user.id !== listing.userRef.toString()) {
      return next(errorHandler(401, "You can only delete your own listing!"));
    }

    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Listing has been deleted!" });
  } catch (error) {
    next(error);
  }
};

// Fetch user listings
export const getUserListings = async (req, res, next) => {
  try {
    // Assuming userRef is stored in the listing document
    const listings = await Listing.find({ userRef: req.params.userId });
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

export const updateListing = async () => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(404, "You can only update your own listing!"));
  }
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};
