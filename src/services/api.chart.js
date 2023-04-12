import axios from 'axios';
import Config from '../Config';
const API_URL=Config.rooturl;
const RPC_URL=Config.rpcurl;

function getChartData(date){
    var data={"date":date}
    return axios.post(API_URL+"/dbChartData",data).then(response=>{
        console.log(response.data)
        return response.data
    });
}


function getChartAllTxsByDate(){
    console.log(API_URL+"/chartAllTxsByDate")
    return axios.get(API_URL+"/chartAllTxsByDate").then(response=>{
        return response.data
    });
}

function getChartMonthlyTxsByDate(){
    
    return axios.get(API_URL+"/chartMonthlyTxsByDate").then(response=>{
        return response.data
    });
}

function getChartWeeklyTxsByDate(){
    
    return axios.get(API_URL+"/chartWeeklyTxsByDate").then(response=>{
        return response.data
    });
}

export {
    getChartData,
    getChartAllTxsByDate,
    getChartMonthlyTxsByDate,
    getChartWeeklyTxsByDate,
    
}