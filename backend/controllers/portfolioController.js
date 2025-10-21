import Portfolio from "../models/Portfolio.js";
import cloudinary from "../config/cloudinary.js";

export const createPortfolio = async (req, res) => {
  try {
    const { tradeType, description, location, contactNumber } = req.body;
    const userId = req.user.id;

    const uploadedImages = [];
    for (const file of req.files) {
      const uploadResult = await cloudinary.uploader.upload_stream(
        { folder: "african-trades" },
        (error, result) => {
          if (error) throw error;
          uploadedImages.push(result.secure_url);
        }
      );
      uploadResult.end(file.buffer);
    }

    const newPortfolio = new Portfolio({
      user: userId,
      tradeType,
      description,
      images: uploadedImages,
      location,
      contactNumber,
    });

    await newPortfolio.save();
    res.status(201).json(newPortfolio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPortfolios = async (req, res) => {
  try {
    const { tradeType, location } = req.query;
    const filter = {};
    if (tradeType) filter.tradeType = tradeType;
    if (location) filter.location = { $regex: location, $options: "i" };

    const portfolios = await Portfolio.find(filter).populate(
      "user",
      "name email"
    );
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
