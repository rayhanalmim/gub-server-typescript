import express from "express";
import { CourseController } from "./course.controller";
const router = express.Router();

router.post("/createCourse", CourseController.createCourse);
router.get("/getCourse", CourseController.getCourse);
router.get("/getSingleCourse", CourseController.getSingleCourse);
router.delete("/deleteCourse", CourseController.deleteCourse);

export const CourseRoute = router;
