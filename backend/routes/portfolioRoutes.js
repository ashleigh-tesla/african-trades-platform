import express from "express";
import {
  createPortfolio,
  getPortfolios,
} from "../controllers/portfolioController.js";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.array("images", 5), createPortfolio);
router.get("/", getPortfolios);

export default router;
