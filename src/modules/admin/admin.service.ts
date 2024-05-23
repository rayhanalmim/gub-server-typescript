import AdminModel from "./admin.model";

const checkLoginStatusIntoDB = async () => {
  const result = await AdminModel.find({ isLogin: true });
  console.log(result);
  return result;
};

const checkGetAccess = async (email: string, password: string) => {
  const isTrue = await AdminModel.findOne({
    $and: [{ email: email }, { password: password }],
  });
  return isTrue;
};

export const AdminServices = {
  checkLoginStatusIntoDB,
  checkGetAccess,
};
