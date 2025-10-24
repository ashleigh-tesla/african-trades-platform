import express from "express";
import Notification from "../models/Notification.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  const notifications = await Notification.find({
    recipient: req.user._id,
  }).sort({ createdAt: -1 });
  res.json(notifications);
});

router.post("/", protect, async (req, res) => {
  const { recipient, message, link } = req.body;
  const notification = await Notification.create({ recipient, message, link });
  res.status(201).json(notification);
});

router.put("/:id/read", protect, async (req, res) => {
  const notification = await Notification.findById(req.params.id);
  if (notification) {
    notification.read = true;
    await notification.save();
    res.json(notification);
  } else res.status(404).json({ message: "Not found" });
});

export default router;
