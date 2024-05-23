import { ExtendedStudent } from "./student.interface";
import StudentModel from "./student.model";

const createStudentIntoDB = async (product: ExtendedStudent) => {
  const result = await StudentModel.create(product);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
