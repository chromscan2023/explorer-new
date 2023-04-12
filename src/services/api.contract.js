import axios from 'axios';
import Config from '../coreFiles/config';

const API_URL=Config.API_URL;
const RPC_URL=Config.RPC_URL;

function getInputData(data){
    var data={"inputData":data}
    return axios.post(API_URL+"/dbInputDataDecode",data).then(response=>{
        console.log(response.data)
        return response.data
    });
}

function listAllContracts(){
  
    return axios.get(API_URL+"/listAllContracts").then(response=>{
        return response.data
    });
}



export {
    getInputData,
    listAllContracts
}