import cookie from "js-cookie";

// cookie 本地存储  localstorage  sessionstorage  
export default {
    state: {
        token: '',
    },
    mutations :{
        // 写入token 
        setToken(state,val) {
            state.token = val;
            cookie.set("token",val)
        },
        // 清除token
        clearToken(){
            cookie.remove("token")
        },
        // 获取token
        getToken(state){
            state.token = cookie.get('token')
        }
    },
} 