import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  createdBy: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

export const Work = mongoose.models.Work || mongoose.model("Work", workSchema);
