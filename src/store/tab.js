import cookie from "js-cookie";
import Vue from "vue";

export default{
    state: {
        // 控制侧边栏是否折叠
        iscollapse: false,

        // 获取侧边栏的菜单栏
        menu: [],
    },
    mutations: {
        // 点击折叠按钮 折叠函数
        collapseMenu(state){
            // console.log("state",state.iscollapse);
            state.iscollapse = !state.iscollapse;
        },
        // 存入菜单
        setMenu(state,val){
            console.log(val);
            state.menu = val;
            cookie.set('menu',JSON.stringify(val));
        },
        // 清除菜单
        clearMenu(state,val){
            // 将菜单变为空
            state.menu = [];
            // 清除存在cookie中的menu
            cookie.remove('menu');
        },
        // 添加菜单
        addMenu(state,router){
            // 先判断是否cookie中是否存入菜单
            if(!cookie.get("menu")){
                console.log("2222");
                return;
            }
            // cookie中有菜单就取出菜单
            console.log("1111");
            let menu = JSON.parse(cookie.get('menu'));
            // 将取出的菜单赋值给state.menu
            state.menu = menu;

            // 添加动态路由
            let currentMenu = [{
                path: "/",
                component: ()=>import ('../views/Main.vue'),
                children: [],
            },];
            menu.forEach(item =>{
                item.component = () => import (`../views/${item.url}`);
                currentMenu[0].children.push(item);
            });
            // 关键一步 动态路由注册
            console.log(router);
           
            router.addRoutes(currentMenu);
        },
    }
}