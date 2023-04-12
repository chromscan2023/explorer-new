import axios from 'axios';
import config from '../coreFiles/config';
const API_URL=config.API_URL;
const RPC_URL=config.RPC_URL;




function getTokens(page){
     return axios.get(API_URL+"/getTokens").then(response=>{
         return response.data
     });
 }

export default getTokens
