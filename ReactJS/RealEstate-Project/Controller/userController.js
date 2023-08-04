import indexModel from '../Models/indexModel.js';
import adminModel from '../Models/adminModel.js';

class userController
{
 fetchSubCategory(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    adminModel.fetchSubCategory(condition_obj).then((result)=>{
     resolve(result);  
    }).catch((err)=>{
     reject(err);  
    });  
  });
 }

 /*
 addCategory(catname,caticonname)
 {
  return new Promise((resolve,reject)=>{
    adminModel.fetchCategory({}).then((result=>{
     var l=result.length
     var _id=l==0 ? 1 : result[l-1]._id+1;    
     var cDetails={_id:_id,"catname":catname,"caticonname":caticonname};
     adminModel.addCategory(cDetails).then((result)=>{
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
    adminModel.fetchSubCategory({}).then((result=>{
     var l=result.length
     var _id=l==0 ? 1 : result[l-1]._id+1;    
     var scDetails={_id:_id,"catname":catname,"subcatname":subcatname,"subcaticonname":subcaticonname};
     adminModel.addSubCategory(scDetails).then((result)=>{
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

export default new userController();