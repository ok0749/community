import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  fileUrl: String,
  title: {
    type: String,
    required: "Title is required",
  },
  content: {
    type: String,
    required: "Content is required",
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const model = mongoose.model("Story", StorySchema);
export default model;
