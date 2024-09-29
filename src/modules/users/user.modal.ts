import { Schema, model } from "mongoose";
import { User } from "./user.interface";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    total_games_played: {
      type: Number,
      default: 0,
    },
    total_wins: {
      type: Number,
      default: 0,
    },
    current_balance: {
      type: Number,
      default: 0,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create and export the ExtendedStudent model
const UserModel = model<User>("Users", userSchema);

export default UserModel;
