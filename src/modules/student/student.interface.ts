interface Student {
  studentId: string;
  name: string;
}
export interface ExtendedStudent extends Student {
  email: string;
}
