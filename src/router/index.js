import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Weapon from "../views/Weapon";
import Jewelry from "../views/Jewelry";
import ErrorPage from "../views/ErrorPage";
import Index from "../views/Index";
import Help from "../views/Help"

Vue.use(VueRouter)

const routes = [
    {
        show: true,
        path: '/',
        name: '卷轴计算',
        component: Index,
        redirect: "/weapon",
        children: [
            {
                path: "/weapon",
                name: "武器卷轴计算",
                component: Weapon
            },
            {
                path: "/jewelry",
                name: "饰品卷轴计算",
                component: Jewelry
            }
        ]
    },
    {
        show: true,
        path: '/other',
        name: '其他',
        component: Index,
        redirect: "/help",
        children: [
            {
                path: "/help",
                name: "帮助及示例",
                component: Help
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
