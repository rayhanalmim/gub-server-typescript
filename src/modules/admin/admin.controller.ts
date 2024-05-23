import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    // const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "student created successfully!",
      //   data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

export const AdminController = {
  createProduct,
};
