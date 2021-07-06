import Mock from "mockjs";

import homeData from "./home";

import user from "./user"

// 记录用于生成响应数据的函数当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
Mock.mock(/\/home\/getData/, 'get', homeData.getHomeLocalData) 

Mock.mock(/\/user\/permission/, 'post', user.getMenu) 