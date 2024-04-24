import IndexHome from "@/components/IndexHome.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import UserHome from "@/components/UserHome.vue";
import WriteArticle from "@/components/WriteArticle.vue";

const routes = [
    {
        path: '/',
        component: IndexHome,
        children: [
            {
                path: '',
                component: RegisterForm,
            },
            {
                path: 'register',
                component: RegisterForm,
            },
            {
                path: 'login',
                component: LoginForm,
            }
        ]
    },
    {
        name:'userHome',
        path: '/userHome/:id',
        component: UserHome,
    },
    {
        name:"writeArticle",
        path: '/writeArticle/:userId',
        component: WriteArticle,
        props: true
    }
]

export default routes;