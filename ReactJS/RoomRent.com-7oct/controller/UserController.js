import IndexModel from '../models/IndexModel.js';
import AdminModel from '../models/AdminModel.js';

class UserController
{

 fetchSubCategory(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    AdminModel.fetchSubCategory(condition_obj).then((result)=>{
     resolve(result);  
    }).catch((err)=>{
     reject(err);  
    });  
  });
 }

 /*manageUsers(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    IndexModel.fetchUsers(condition_obj).then((result)=>{
     resolve(result);  
    }).catch((err)=>{
     reject(err);  
    });  
  });
 }

 manageUserStatus(urlobj)
 {
  return new Promise((resolve,reject)=>{
    AdminModel.manageUserStatusModel(urlobj).then((result)=>{
     resolve(result);  
    }).catch((err)=>{
     reject(err);  
    });  
  });
 }

 addCategory(catname,caticonname)
 {
  return new Promise((resolve,reject)=>{
    AdminModel.fetchCategory({}).then((result=>{
     var l=result.length
     var _id=l==0 ? 1 : result[l-1]._id+1;    
     var cDetails={_id:_id,"catname":catname,"caticonname":caticonname};
     AdminModel.AddCategory(cDetails).then((result)=>{
        resolve(result);    
     }).catch((err)=>{
        reject(err);    
     });
    })).catch((err)=>{
     reject(err);            
    })       
  });  
 }

 addSubCategory(catname,subcatname,subcaticonname)
 {
  return new Promise((resolve,reject)=>{
    AdminModel.fetchSubCategory({}).then((result=>{
     var l=result.length
     var _id=l==0 ? 1 : result[l-1]._id+1;    
     var scDetails={_id:_id,"catname":catname,"subcatname":subcatname,"subcaticonname":subcaticonname};
     AdminModel.AddSubCategory(scDetails).then((result)=>{
        resolve(result);    
     }).catch((err)=>{
        reject(err);    
     });
    })).catch((err)=>{
     reject(err);            
    })       
  });  
 }*/

}

export default new UserController();