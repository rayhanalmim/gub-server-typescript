import { Schema, model } from "mongoose";
import { ExtendedStudent } from "./student.interface";

// Define the ExtendedStudent schema
const extendedStudentSchema = new Schema<ExtendedStudent>({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create and export the ExtendedStudent model
const StudentModel = model<ExtendedStudent>("Students", extendedStudentSchema);

export default StudentModel;
