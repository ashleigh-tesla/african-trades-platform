import express from "express";
import Booking from "../models/Booking.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST new booking
router.post("/", protect, async (req, res) => {
  const { tradeperson, service, date, notes } = req.body;

  const booking = await Booking.create({
    client: req.user._id,
    tradeperson,
    service,
    date,
    notes,
  });

  res.status(201).json(booking);
});

// GET bookings for a user
router.get("/", protect, async (req, res) => {
  const bookings = await Booking.find({
    $or: [{ client: req.user._id }, { tradeperson: req.user._id }],
  }).populate("client tradeperson", "name email");
  res.json(bookings);
});

// PUT to update booking status
router.put("/:id", protect, async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  booking.status = req.body.status || booking.status;
  await booking.save();
  res.json(booking);
});

export default router;
