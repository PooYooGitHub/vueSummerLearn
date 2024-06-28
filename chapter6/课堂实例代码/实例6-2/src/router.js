import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/views/Project.vue'

Vue.use(Router)

const myRouter = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'layout',
                component:  () => import('@/views/Layout.vue'),
    redirect: '/home',
    children: [
    {
        path:'home',
        name: 'home',
        component: () => import('@/views/Home.vue')
},
{
    path:'projectlist',
        name:'projectlist',
    component: () => import('@/views/ProjectList.vue'),
    //����ģʽ
    props: { listTitle: "��Ŀ�б�չʾ" },
    children:[
        {
            path:'project/:projectId',
            name:'project',
            //����ģʽ
            props:true,
            component: Project,
            beforeEnter:(to,from,next)=>{
                console.log("��������to:"+to.path);
                console.log("��������from:"+from.path);
                next();
            }
        }
    ]
},
// ���ڰ���������ͼ��·�ɣ������ֱ�Ϊÿ��������ͼ��� `props` ѡ�
{
    path:'projectlist2',
        name:'projectlist2',
    component: () => import('@/views/ProjectList2.vue'),
    //����ģʽ
    props: (route) => ({ listTitle: route.query.title }),
    children:[
    {
        path:'project2/:projectId',
        name:'project2',
        components: {
            default: () => import('@/components/ProjectDetailHead.vue'),
    detail: () => import('@/components/ProjectDetailContent.vue')
},
props:{default:false,detail:true}
}
]
}
]
},
{
    path: '*',
        name: 'page404',
    component: () => import('@/views/404.vue')
}
]
});
myRouter.beforeEach((to, from, next) => {
    console.log("ȫ��ǰ������to:"+to.path);
    console.log("ȫ��ǰ������from:"+from.path);
    next();
});
myRouter.afterEach((to, from) => {
    console.log("ȫ�ֺ��ù���to:"+to.path);
    console.log("ȫ�ֺ��ù���from:"+from.path);
});
export default myRouter