import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import BlogsView from '../views/BlogsView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: "/blogs"
    },
    {
        path: "/blogs",
        name: "日志列表",
        component: BlogsView
    },
    // {
    //     path: "/blogs/:id",
    //     name: "日志详情",
    //     component: () => import('../views/CityDetail.vue')
    // },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})




export default router
