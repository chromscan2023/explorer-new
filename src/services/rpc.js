import Config from '../Config';
const RPC_URL=Config.rpcurl;
function getBlockNumber(param){
    var data={jsonrpc: "2.0", method: "eth_getBlockByNumber", params: [param, true], id: 9}
    return axios.post(RPC_URL,data).then(response=>{
        return response.data
    });
}


export {
    getBlockNumber
}