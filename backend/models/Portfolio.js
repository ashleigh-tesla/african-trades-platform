import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tradeType: {
    type: String,
    required: true,
    enum: [
      "Carpenter",
      "Electrician",
      "Welder",
      "Builder",
      "Painter",
      "Plumber",
      "Tiler",
      "Photographer",
      "Other",
    ],
  },
  description: { type: String, required: true },
  images: [{ type: String }], // will hold image URLs
  location: { type: String, required: true },
  contactNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Portfolio", portfolioSchema);
