import express from "express";
import { StudentController } from "./student.controller";
const router = express.Router();

router.post("/createStudent", StudentController.createProduct);
router.post("/getStudents", StudentController.createProduct);

export const StudentRoute = router;
