import { Schema, model } from "mongoose";
import { Admin } from "./admin.interface";

// Define the User schema
const userSchema = new Schema<Admin>({
  key: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isLogin: { type: Boolean, required: true },
});

// Create and export the User model
const AdminModel = model<Admin>("admins", userSchema);

export default AdminModel;
