import { Course } from "./course.interface";
import CourseModel from "./course.model";

const createCourseIntoDB = async (course: Course) => {
  const result = await CourseModel.create(course);
  return result;
};

const getCourseFromDB = async () => {
  const student = await CourseModel.find();
  return student;
};

export const CourseServices = {
  createCourseIntoDB,
  getCourseFromDB,
};
