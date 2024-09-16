import { Schema, model } from "mongoose";
import { User } from "./user.interface";

// Define the ExtendedStudent schema
const userSchema = new Schema<User>({
  full_name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 0 },
  user_role: { type: String },
});

// Create and export the ExtendedStudent model
const UserModel = model<User>("Users", userSchema);

export default UserModel;
