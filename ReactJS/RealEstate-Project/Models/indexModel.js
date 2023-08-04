import "./connection.js";
import registerSchemaModel from "../Schema/registerSchema.js";
class indexModel{
    userRegisterModel(userDetails) {
        return new Promise((resolve, reject) => {
            var obj = new registerSchemaModel(userDetails);
            obj.save((err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }

  fetchUsers(condition_obj) {
    return new Promise((resolve, reject) => {
      // to find record from collection
      registerSchemaModel.find(condition_obj, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }
}

export default new indexModel();