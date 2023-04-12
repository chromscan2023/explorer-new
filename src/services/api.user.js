import axios from 'axios';
import Config from '../coreFiles/config';
const API_URL=Config.API_URL;
const RPC_URL=Config.RPC_URL;



function doAuth(username,password){
    console.log(username)
   const data={"username":username,"password":password};
    return axios.post(API_URL+"/auth",data).then(response=>{
        return response.data
    });
}

function createAccount(username,email,password){
    const data={"username":username,"password":password,"email":email};
     return axios.post(API_URL+"/createaccount",data).then(response=>{
         return response.data
     });
 }

export {
    doAuth,
    createAccount
}