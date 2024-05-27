import { Schema, model } from "mongoose";

// Define the schema for the course
const courseSchema = new Schema({
  courseName: { type: String, required: true },
  courseCode: { type: String, required: true, unique: true },
  section: { type: String, required: true },
  totalClass: { type: Number, required: true },
  enrolled_student: [{ type: String }], // Array of strings representing student IDs
});

// Create and export the Course model
const CourseModel = model("Course", courseSchema);

export default CourseModel;
