import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    routes,
    history:createWebHashHistory()
});

//todo 路由守卫 检查用户是否登录
// router.beforeEach((async (to) => {
//     alert("router.beforeEach");
//     console.log(to.name);
//     if (to.name == "writeArticle"){
//         alert("to.name " , to.name);
//         var isLoggedIn = localStorage.getItem("isLoggedIn");
//         if (isLoggedIn){
//             return true;
//         }else{
//             alert("请登录");
//             return {name : "login"};
//         }
//     }else{
//         return true;
//     }
// }));

export default router;
