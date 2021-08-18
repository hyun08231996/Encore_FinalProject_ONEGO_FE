import axios from "axios";

export default axios.create({
    // baseURL: "http://onego.click",
    baseURL: "/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json; charset = utf-8',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Context-Type': 'multipart/form-data',
        
    },
});
