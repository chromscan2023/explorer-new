import axios from 'axios';
import Config from '../coreFiles/config';
const API_URL=Config.API_URL;
const RPC_URL=Config.RPC_URL;
function getBlocks(start,number){
    if(start==0 || start==undefined){
        start=1;
    }
    if(number==0 || number==undefined){
        number=50;
    }
    const url=API_URL+"/dbAllBlocks?page="+start+"&number="+number;
    //console.log(url)
    return axios.get(url).then(response=>{
        return response.data
    });
}

function getLatestBlockData(){

    return axios.get(API_URL+"/dbLatestBlockData").then(response=>{
        return response.data
    });
}

function getBlockdetails(blocknumber){
    var data={"blockNumber":blocknumber}
    console.log(data)
    return axios.post(API_URL+"/dbBlockDetails",data).then(response=>{
        return response.data
    });
}


function rpcGetBlockByNumber(blocknumber){
    const data={"jsonrpc":"2.0","id":2,"method":"eth_getBlockByNumber","params":[blocknumber,true]}
    return axios.post(RPC_URL,data).then(response=>{
        return response.data
    });
}

function rpcGetBlockNumber(){
    const data={"jsonrpc":"2.0","id":2,"method":"eth_blockNumber","params":[]}
    return axios.post(RPC_URL,data).then(response=>{
        return response.data
    });
}




export {
    getBlocks,
    getLatestBlockData,
    getBlockdetails,
    rpcGetBlockByNumber,
    rpcGetBlockNumber
}