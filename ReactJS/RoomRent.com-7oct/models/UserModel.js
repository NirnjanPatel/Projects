import "./connection.js";
import RegisterSchemaModel from "../schema/RegisterSchema.js";
import CategorySchemaModel from "../schema/CategorySchema.js";
import SubCategorySchemaModel from "../schema/SubCategorySchema.js";

class UserModel
{
 /*AddCategory(cDetails)
 {
  return new Promise((resolve,reject)=>{
     // a document instance
     var obj = new CategorySchemaModel(cDetails);
     
     // save model to database
     obj.save((err,result)=>{
       err ? reject(err) : resolve(result);            
     });
  })      
 }

 AddSubCategory(scDetails)
 {
  return new Promise((resolve,reject)=>{
     // a document instance
     var obj = new SubCategorySchemaModel(scDetails);
     
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
    CategorySchemaModel.find(condition_obj,(err,result)=>{
      err ? reject(err) : resolve(result);        
    })    
  }) 
 }

 fetchSubCategory(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    // to find record from collection : subcategory
    SubCategorySchemaModel.find(condition_obj,(err,result)=>{
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
        RegisterSchemaModel.update({"_id":parseInt(urlobj.regid)},{"status":0},(err,result)=>{
            err ? reject(err) : resolve(result);        
        })
    }
    else if(urlobj.s=="verify")
    {
        // to update status in collection
        RegisterSchemaModel.update({"_id":parseInt(urlobj.regid)},{"status":1},(err,result)=>{
            err ? reject(err) : resolve(result);        
        })        
    }
    else
    {
        // to remove user in collection
        RegisterSchemaModel.remove({"_id":parseInt(urlobj.regid)},(err,result)=>{
            err ? reject(err) : resolve(result);        
        })             
    }
  })    
 }*/
 
}

export default new UserModel();