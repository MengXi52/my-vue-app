import { createRouter,createWebHashHistory } from "vue-router";



const routes =[
    {
        path:'/',
        name:'main',
        component: () => import('@/views/Main.vue'),
        // redirect URL 重定向（也称为 URL 转发）是一种为页面、表单或者整个 Web 站点/应用提供多个 URL 地址的技术
        //通俗来讲，就是把页面默认展示
        redirect: '/home',
        children:[
            {
                path:'home',
                name:'hpme',
                component: () => import('@/views/Home.vue'),
            },
        ]
    },
];

const router =createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;