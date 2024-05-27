import { Schema, model } from "mongoose";

// Define the schema for the course
const courseSchema = new Schema({
  course_name: { type: String, required: true },
  course_code: { type: String, required: true, unique: true },
  select_section: { type: String, required: true },
  total_class: { type: Number, required: true },
  enrolled_student: [{ type: String }], // Array of strings representing student IDs
});

// Create and export the Course model
const CourseModel = model("Course", courseSchema);

export default CourseModel;
