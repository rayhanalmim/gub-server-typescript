import AdminModel from "./admin.model";

class AdminService {
  private adminModel: typeof AdminModel;

  constructor(adminModel: typeof AdminModel) {
    this.adminModel = adminModel;
  }

  public async checkLoginStatusIntoDB() {
    const result = await this.adminModel.find({ isLogin: true });
    return result;
  }

  public async checkGetAccess(email: string, password: string) {
    const isTrue = await this.adminModel.findOne({
      $and: [{ email: email }, { password: password }],
    });
    return isTrue;
  }

  public async getLoginIntoDB() {
    const result = await this.adminModel.updateOne(
      { key: "password" },
      { $set: { isLogin: true } }
    );
    return result;
  }

  public async getLogOutFromDB() {
    const result = await this.adminModel.updateOne(
      { key: "password" },
      { $set: { isLogin: false } }
    );
    return result;
  }
}
const adminServiceInstance = new AdminService(AdminModel);

// Existing function calls using the instance of AdminService class

const checkLoginStatusIntoDB = async () => {
  return adminServiceInstance.checkLoginStatusIntoDB();
};

const checkGetAccess = async (email: string, password: string) => {
  return adminServiceInstance.checkGetAccess(email, password);
};

const getLoginIntoDB = async () => {
  return adminServiceInstance.getLoginIntoDB();
};

const getLogOutFromDB = async () => {
  return adminServiceInstance.getLogOutFromDB();
};

export const AdminServices = {
  checkLoginStatusIntoDB,
  checkGetAccess,
  getLoginIntoDB,
  getLogOutFromDB,
};
