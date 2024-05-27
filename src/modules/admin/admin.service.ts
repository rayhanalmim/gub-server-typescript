import AdminModel from "./admin.model";

const checkLoginStatusIntoDB = async () => {
  const result = await AdminModel.find({ isLogin: true });
  return result;
};

const checkGetAccess = async (email: string, password: string) => {
  const isTrue = await AdminModel.findOne({
    $and: [{ email: email }, { password: password }],
  });
  return isTrue;
};
const getLoginIntoDB = async () => {
  const result = AdminModel.updateOne(
    { key: "password" },
    { $set: { isLogin: true } }
  );
  return result;
};
const getLogOutFromDB = async () => {
  const result = AdminModel.updateOne(
    { key: "password" },
    { $set: { isLogin: false } }
  );
  return result;
};

export const AdminServices = {
  checkLoginStatusIntoDB,
  checkGetAccess,
  getLoginIntoDB,
  getLogOutFromDB,
};
