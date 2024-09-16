import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/check-user-validation", UserController.validationUser);

export const userRoute = router;
