import indexModel from "../Models/indexModel.js";
class indexController {
  userRegister(userDetails) {
    return new Promise((resolve, reject) => {
      indexModel.fetchUsers({})
        .then((result) => {
          var l = result.length;
          var _id = l == 0 ? 1 : result[l - 1]._id + 1;
          userDetails = {
            ...userDetails,
            _id: _id,
            status: 0,
            role: "user",
            info: Date(),
          };
          
          indexModel.userRegisterModel(userDetails)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
    
  userLogin(userDetails) {
      return new Promise((resolve, reject) => {
          userDetails = { ...userDetails, status: 1 };
      indexModel.fetchUsers(userDetails)
        .then((result) => {
          var res = result.length == 0 ? 0 : (result[0].role == "admin") ? 1 : 2;
          resolve({ "rescode": res, "userDetails": result[0] });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default new indexController();