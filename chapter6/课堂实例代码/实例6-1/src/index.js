import Vue from "vue";
import VueRouter from "vue-router";
// �������
import home from "./home.vue";
import about from "./about.vue";
// Ҫ���� vue ʹ�� vueRouter
Vue.use(VueRouter);
const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    // �ض���
    {
        path: '/',
        redirect: '/home'
    }
]
var router = ?new VueRouter({
    routes
})
export default router;