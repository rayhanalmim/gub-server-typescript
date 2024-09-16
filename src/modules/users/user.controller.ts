import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: "user created successfully!",
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

const validationUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.query;
    const result = await UserServices.checkUserValidation(
      userName as string,
      password as string
    );
    if (result) {
      return res.status(200).json({
        success: true,
        message: "user created successfully!",
        data: result,
      });
    } else {
      return res.status(404).json({
        success: true,
        message: "unauthorize user!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

export const UserController = {
  createUser,
  validationUser,
};
