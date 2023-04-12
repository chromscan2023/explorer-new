import axios from 'axios';
import Config from '../coreFiles/config';
const API_URL=Config.API_URL;
const RPC_URL=Config.RPC_URL;

function getTopAccounts(){
    
    return axios.get(API_URL+"/getTopAccounts").then(response=>{
        return response.data
    });
}

function getAllAccounts(){
    
    return axios.get(API_URL+"/getAllAccounts").then(response=>{
        return response.data
    });
}


export {
    getTopAccounts,
    getAllAccounts
}