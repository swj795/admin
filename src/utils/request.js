import axios from "axios";

const request = axios.create({
    timeout: 3000,
})

// 定义拦截器
request.interceptors.request.use(
    config => {
        console.log("请求发送前",request);
        return config
    },
    err=>{
        console.log(err);
    }
);

request.interceptors.response.use(
    response =>{
        console.log(333);
        console.log(response);
        return response;
    }
);


export default request;