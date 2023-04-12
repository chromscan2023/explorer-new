import axios from 'axios';
import Config from '../coreFiles/config';
const API_URL=Config.rooturl;
const RPC_URL=Config.rpcurl;
function getTransactions(start,number){
    if(start===0 || start===undefined){
        start=1;
    }
    if(number===0 || number===undefined){
        number=50;
    }

    return axios.get(API_URL+"/dbAllTxs?page="+start+"&number="+number).then(response=>{
        return response.data
    });
}



function getTransactionDetail(hash){
    
    var data={"txHash":hash}
    return axios.post(API_URL+"/dbTxDetails",data).then(response=>{
        return response.data
    });
}

function getLatestTransactionData(){
    
    return axios.get(API_URL+"/dbLatestTxs").then(response=>{
        return response.data
    });
}

function getTotalTransactions(){
    
    return axios.get(API_URL+"/dbTotalTxsNum").then(response=>{
        return response.data
    });
}

function rpcGetTransactionByHash(hash){
    const data={"jsonrpc":"2.0","id":1,"method":"eth_getTransactionByHash","params":[hash]}
    console.log(RPC_URL)
    return axios.post(RPC_URL,data).then(response=>{
        return response.data
    });
}

function rpcGetTransactionReceipt(hash){
    console.log(RPC_URL)
    const data={"jsonrpc":"2.0","id":3,"method":"eth_getTransactionReceipt","params":[hash]}
    return axios.post(RPC_URL,data).then(response=>{
        return response.data
    });
}



function getAddressTransactions(address){
    var data={"address":address.toLowerCase()};
    let transactionurl=API_URL+"/dbAddressTxs";
    console.log(transactionurl)
    console.log(data)
   return axios.post(transactionurl,data).then(response=>{
        console.log(response.data)
        return response.data;
    }); 
}




export {
    getTransactions,
    getLatestTransactionData,
    getTotalTransactions,
    rpcGetTransactionByHash,
    rpcGetTransactionReceipt,
    getTransactionDetail,
    getAddressTransactions
}