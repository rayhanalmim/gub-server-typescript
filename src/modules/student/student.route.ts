import express from "express";
import { StudentController } from "./student.controller";
const router = express.Router();

router.post("/createStudent", StudentController.createProduct);
router.get("/getStudents", StudentController.getStudents);

export const StudentRoute = router;
