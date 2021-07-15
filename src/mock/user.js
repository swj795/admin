
import Mock from "mockjs"

export default {
    // 获取菜单函数 
    getMenu : para =>{
        // para 是前端form中的数据
        console.log(para);
        // 从前端提交过来的数据一般用Josn格式
        const {userName,password} = JSON.parse(para.body);

        if(userName === "admin" || userName === "ydadmin"){
            if(userName === "admin" && password === "admin"){
                // 超级管理员
                return {
                   data: {
                       menu: [
                        {
                            path: "/",
                            name: "home",
                            label: "首页",
                            icon: "s-home",
                            url: "Home/Home",
                        },
                        {
                            path: "/user",
                            name: "User",
                            label: "用户页",
                            icon: "user",
                            url: "User/User",
                          },
                       ],
                    //    用户标识
                    token: Mock.Random.guid(),
                   }
                }
            }else if(userName === "ydadmin" && password === "ydadmin"){
                // 一般管理员
                return {
                    data: {
                        menu: [{
                            path: "/",
                            name: "home",
                            label: "首页",
                            icon: "s-home",
                            url: "Home/Home",
                        },],
                        // 用户标识
                        token: Mock.Random.guid(),
                    }
                }
            }else {
                return {
                    data: {
                        message: "密码错误"
                    }
                   
                }
            }
        }else{
            return {
                data: {
                    message: "用户不存在"
                }
            }
        }
    }
}