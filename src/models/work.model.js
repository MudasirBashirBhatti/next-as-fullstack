import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
    required: true,
  },
});

export const Work = mongoose.models.Work || mongoose.model("Work", workSchema);
