import { Course } from "./course.interface";
import CourseModel from "./course.model";

const createCourseIntoDB = async (course: Course) => {
  const result = await CourseModel.create(course);
  return result;
};

const getCourseFromDB = async () => {
  const result = await CourseModel.find();
  return result;
};
const getSingleCourseFromDB = async (id: string) => {
  const result = await CourseModel.findById(id).populate({
    path: "enrolled_student",
    model: "Students", // The name of the student collection/model
  });
  return result;
};

const deleteSingleCourseFromDB = async (id: string) => {
  const result = await CourseModel.findByIdAndDelete(id);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getCourseFromDB,
  getSingleCourseFromDB,
  deleteSingleCourseFromDB,
};
