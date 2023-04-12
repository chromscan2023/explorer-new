import axios from 'axios';
import Config from '../Config';
const API_URL=Config.rooturl;
const RPC_URL=Config.rpcurl;

function getFromAddress(){
    
    return axios.get(API_URL+"/dbFromAddress").then(response=>{
        return response.data
    });
}


function getToAddress(){
    
    return axios.get(API_URL+"/dbToAddress").then(response=>{
        return response.data
    });
}


function rpcGetAddressBalance(address){
    console.log(RPC_URL)
    const data={"jsonrpc":"2.0","id":3,"method":"eth_getBalance","params":[address,"latest"]}
    return axios.post(RPC_URL,data).then(response=>{
        return response.data
    });
}

export {
    getFromAddress,
    getToAddress,
    rpcGetAddressBalance
}