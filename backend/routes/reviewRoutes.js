import express from "express";
import Review from "../models/Review.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST - Add review
router.post("/", protect, async (req, res) => {
  const { tradeperson, rating, comment } = req.body;

  const review = await Review.create({
    tradeperson,
    client: req.user._id,
    rating,
    comment,
  });

  res.status(201).json(review);
});

// GET - Get reviews for a tradesperson
router.get("/:tradepersonId", async (req, res) => {
  const reviews = await Review.find({
    tradeperson: req.params.tradepersonId,
  }).populate("client", "name");
  res.json(reviews);
});

export default router;
