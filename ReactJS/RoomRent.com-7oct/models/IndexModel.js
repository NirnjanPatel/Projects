import "./connection.js";
import RegisterSchemaModel from "../schema/RegisterSchema.js";

class IndexModel
{
 userRegisterModel(userDetails)
 {
  return new Promise((resolve,reject)=>{
     // a document instance
     var obj = new RegisterSchemaModel(userDetails);
     
     // save model to database
     obj.save((err,result)=>{
       err ? reject(err) : resolve(result);            
     });
  })      
 }

 fetchUsers(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    // to find record from collection
    RegisterSchemaModel.find(condition_obj,(err,result)=>{
      err ? reject(err) : resolve(result);        
    })    
  }) 
 }
 
}

export default new IndexModel();