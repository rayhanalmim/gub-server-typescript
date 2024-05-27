import express from "express";
import { CourseController } from "./course.controller";
const router = express.Router();

router.post("/createCourse", CourseController.createCourse);
router.get("/getCourse", CourseController.getCourse);

export const CourseRoute = router;
