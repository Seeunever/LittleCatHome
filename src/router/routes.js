import IndexHome from "@/components/IndexHome.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import UserHome from "@/components/UserHome.vue";
import WriteArticle from "@/components/WriteArticle.vue";

const routes = [
    {path: '/', component: IndexHome},
    {path: '/register', component: RegisterForm},
    {path: '/login', component: LoginForm},
    {path: '/userHome/:id', component: UserHome, name:'userHome'},
    {path: '/writeArticle', component: WriteArticle}
]

export default routes;