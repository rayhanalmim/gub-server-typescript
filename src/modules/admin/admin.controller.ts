import { Request, Response } from "express";
import { AdminServices } from "./admin.service";

const checkLoginStatus = async (req: Request, res: Response) => {
  try {
    const response = await AdminServices.checkLoginStatusIntoDB();
    res.send(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getAccess = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.query;
    console.log(email, password);
    const isTrue = await AdminServices.checkGetAccess(
      email as string,
      password as string
    );

    if (isTrue) {
      return res.status(200).send(isTrue);
    } else {
      return res.status(201).send({ message: "admin not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getPermission = async (req: Request, res: Response) => {
  try {
    const response = await AdminServices.getLoginIntoDB();
    res.send(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getLogOut = async (req: Request, res: Response) => {
  try {
    const response = await AdminServices.getLogOutFromDB();
    res.send(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

export const AdminController = {
  checkLoginStatus,
  getAccess,
  getPermission,
  getLogOut,
};
