import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePhoto: {
    type: String,   // Specify the type
    default: ""     // Default value for an empty string
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  }
}, { timestamps: true });  // Correct typo here

export const User = mongoose.model("User", userSchema);
