import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '@/components/GoodsList'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'GoodsList', component: GoodsList },
    // 其它路由
]

const router = new VueRouter({
    routes
})

export default router

