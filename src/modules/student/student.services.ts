import { ExtendedStudent } from "./student.interface";
import StudentModel from "./student.model";

const createStudentIntoDB = async (product: ExtendedStudent) => {
  const result = await StudentModel.create(product);
  return result;
};

const getStudentFromDB = async () => {
  const student = await StudentModel.find({}, { _id: 0 });
  return student;
};

export const StudentServices = {
  createStudentIntoDB,
  getStudentFromDB,
};
