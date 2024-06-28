import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '@/components/GoodsList'
import Shopcart from '@/components/Shopcart'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'GoodsList', component: GoodsList },
    { path: '/shopcart', name: 'Shopcart', component: Shopcart },  
]

const router = new VueRouter({
    routes
})

export default router

