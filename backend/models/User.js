import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["tradesperson", "client"], default: "client" },
  dateCreated: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
