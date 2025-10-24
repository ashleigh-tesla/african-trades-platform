// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// // import authRoutes from "../routes/authRoutes.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// // app.use("/api/auth", authRoutes);

// // Sample route
// app.get("/", (req, res) => {
//   res.send("African Trades Platform API is running 🚀");
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";
import portfolioRoutes from "../routes/portfolioRoutes.js";
import reviewRoutes from "../routes/reviewRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/portfolios", portfolioRoutes);
app.use("/api/reviews", reviewRoutes);

app.use("/api/notifications", notificationRoutes);
app.use("/api/bookings", bookingRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import { Server } from "socket.io";
import http from "http";

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io instance
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // your frontend URL
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("sendMessage", (messageData) => {
    io.to(messageData.room).emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Replace app.listen() with:
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
