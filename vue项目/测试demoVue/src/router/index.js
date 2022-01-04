import Vue from 'vue'
import Router from 'vue-router'

let routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/common/commonLayout'),
    redirect: {
      name: "Home"
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        mate: {
          title: '首页'
        },
        component: () => import('@/pages/home')
      },
      {
        path: '/transition',
        name: 'Transition',
        mate: {
          title: '过渡'
        },
        component: () => import('@/pages/home/transition')
      },
      {
        path: '/Tinymce',
        name: 'Tinymce',
        mate: {
          title: 'Tinymce 富文本'
        },
        component: () => import('@/pages/editer/tinymaceIndex')
      },
      {
        path: '/wangeditor3',
        name: 'wangeditor3',
        mate: {
          title: 'wangeditor富文本'
        },
        component: () => import('@/pages/editer/wangEditorIndex')
      },
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404')
  }
]

Vue.use(Router)

let router = new Router({
  routes,
  // mode: 'hash',
})
export default router