import express from "express";
import { AdminController } from "./admin.controller";
const router = express.Router();

router.post("/getAccess", AdminController.getAccess);
router.post("/getLogin", AdminController.getPermission);
router.get("/checkLoginStatus", AdminController.checkLoginStatus);
router.get("/getLogOut", AdminController.getLogOut);

export const AdminRoute = router;
