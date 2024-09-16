import { User } from "./user.interface";
import UserModel from "./user.modal";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const checkUserValidation = async (username: string, password: string) => {
  const result = await UserModel.findOne({ username, password });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  checkUserValidation,
};
