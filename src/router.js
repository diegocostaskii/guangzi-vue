import home from './components/home.vue'
import store from './components/store.vue'
import contact from './components/contact.vue'
import product from './components/product.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()


const routers = createRouter({
  
  history: routerHistory,
    routes: [
      {
        path: '/',
        component: home,
        meta: {
          title: '八爪鱼动捕'
        }
      },
      {
        path: '/home',
        component: home,
        meta: {
          title: '八爪鱼动捕'
        }
      },
      {
        path: '/store',
        component: store,
        meta: {
          title: '八爪鱼动捕'
        }
      },
      {
        path: '/product',
        component: product,
        meta: {
          title: '八爪鱼动捕'
        }
      },
      {
        path: '/contact',
        component: contact,
        meta: {
          title: '八爪鱼动捕'
        }
      }
    ]
  })
  
 
export default routers