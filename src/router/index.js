import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // alias:'/about',
    component: ()=>import('../views/Navbar/Home.vue'),
    children:[
      {
        path: '/about',
        name: 'About1',
        component: () => import('../views/Navbar/About.vue')
      },
      {
        path: '/toast',
        name: 'Toast1',
        component: () => import('../views/Navbar/Toast.vue')
      },  
      {
        path: '/breadcrumb',
        name: 'Breadcrumb1',
        component: () => import('../views/Navbar/Breadcrumb.vue')
      },  
      {
        path: '/test',
        name: 'Test1',
        component: () => import('../views/Navbar/ElementTest.vue')
      }
    ]
  },
  {
    path:'/404',
    name:'NotFound',
    hidden:true,
    component:()=>import('../views/404.vue')
  },
  
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
