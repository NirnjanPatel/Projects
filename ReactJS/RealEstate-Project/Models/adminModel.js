import "./connection.js";
import registerSchemaModel from "../Schema/registerSchema.js";
import categorySchemaModel from "../Schema/categorySchema.js";
import subCategorySchemaModel from "../Schema/subCategorySchema.js";

class adminModel{
  /*  userRegisterModel(userDetails) {
        return new Promise((resolve, reject) => {
            var obj = new registerSchemaModel(userDetails);
            obj.save((err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }
    */

 cpAdminModel(sunm,userDetails)
 {
  return new Promise((resolve,reject)=>{
    // to update password in collection
    registerSchemaModel.update({"email":sunm},{"password":userDetails.cnpass},(err,result)=>{
        err ? reject(err) : resolve(result);        
    })
  })      
 } 
  
 addCategory(cDetails)
 {
  return new Promise((resolve,reject)=>{
     // a document instance
     var obj = new categorySchemaModel(cDetails);
     
     // save model to database
     obj.save((err,result)=>{
       err ? reject(err) : resolve(result);            
     });
  })      
 }
  
 addSubCategory(scDetails)
 {
  return new Promise((resolve,reject)=>{
     // a document instance
     var obj = new subCategorySchemaModel(scDetails);
     
     // save model to database
     obj.save((err,result)=>{
       err ? reject(err) : resolve(result);            
     });
  })      
 }
  
 fetchCategory(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    // to find record from collection : category
    categorySchemaModel.find(condition_obj,(err,result)=>{
      err ? reject(err) : resolve(result);        
    })    
  }) 
 }

 fetchSubCategory(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    // to find record from collection : subcategory
    subCategorySchemaModel.find(condition_obj,(err,result)=>{
      err ? reject(err) : resolve(result);        
    })    
  }) 
 }
  
 manageUserStatusModel(urlobj)
 {
  return new Promise((resolve,reject)=>{
    if(urlobj.s=="block")
    {
        // to update status in collection
        registerSchemaModel.update({"_id":parseInt(urlobj.regid)},{"status":0},(err,result)=>{
            err ? reject(err) : resolve(result);        
        })
    }
    else if(urlobj.s=="verify")
    {
        // to update status in collection
        registerSchemaModel.update({"_id":parseInt(urlobj.regid)},{"status":1},(err,result)=>{
            err ? reject(err) : resolve(result);        
        })        
    }
    else
    {
        // to remove user in collection
        registerSchemaModel.remove({"_id":parseInt(urlobj.regid)},(err,result)=>{
            err ? reject(err) : resolve(result);        
        })             
    }
  })    
 }
 epAdminModel(userDetails)
 {
  return new Promise((resolve,reject)=>{
    // to update user details in collection
    registerSchemaModel.update({"email":userDetails.email},{"name":userDetails.name,"mobile":userDetails.mobile,"address":userDetails.address,"city":userDetails.city,"gender":userDetails.gender},(err,result)=>{
      err ? reject(err) : resolve(result);        
     })
    })
 }
 fetchUsers(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    // to find record from collection
    registerSchemaModel.find(condition_obj,(err,result)=>{
      err ? reject(err) : resolve(result);        
    })    
  }) 
 }
    }
export default new adminModel();

/*
State management - app level security and user tracking           
it can be implemented on two different types
1. Session management 
---------------------
* it is state management tool used to apply security and user tracking at app level
* it is a storage capable to store data at server end
* as data stored on server side, hense can be used to apply security at app level

2. Cookies management
---------------------
* it is a storage capable to store data at client end
* as data stored on client side, hense less secure & can only be used for tracking purpose not for security 
* like - remember me, tap to login, temporary data storage - like session id, token at app level
*/
