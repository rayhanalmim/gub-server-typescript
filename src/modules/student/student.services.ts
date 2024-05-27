import { ExtendedStudent } from "./student.interface";
import StudentModel from "./student.model";

class studentClass {
  student: object;
  constructor(studentData: object) {
    this.student = studentData;
  }
  public async pushIntoDB() {
    await StudentModel.create(this.student);
  }
}

const createStudentIntoDB = async (student: ExtendedStudent) => {
  const createStudent = new studentClass(student);
  const result = await createStudent.pushIntoDB();
  return result;
};

const getStudentFromDB = async () => {
  const student = await StudentModel.find();
  return student;
};

export const StudentServices = {
  createStudentIntoDB,
  getStudentFromDB,
};
