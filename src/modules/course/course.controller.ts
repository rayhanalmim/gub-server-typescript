import { Request, Response } from "express";
import { CourseServices } from "./course.service";

const createCourse = async (req: Request, res: Response) => {
  try {
    const course = req.body;
    const result = await CourseServices.createCourseIntoDB(course);
    res.status(200).json({
      success: true,
      message: "course created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getCourse = async (req: Request, res: Response) => {
  try {
    const result = await CourseServices.getCourseFromDB();
    res.status(200).json({
      success: true,
      message: "courses get successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

export const CourseController = {
  createCourse,
  getCourse,
};
