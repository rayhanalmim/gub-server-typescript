import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoute } from "./modules/student/student.route";
import { AdminRoute } from "./modules/admin/admin.route";
import { CourseRoute } from "./modules/course/course.route";
import { userRoute } from "./modules/users/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", StudentRoute);
app.use("/api", AdminRoute);
app.use("/api", CourseRoute);
app.use("/api", StudentRoute);
app.use("/api", userRoute);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Not Found Route Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: any, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
  });
});

export default app;
