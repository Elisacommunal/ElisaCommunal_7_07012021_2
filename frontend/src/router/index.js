import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Groupomania'
    }
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: () => import( '../views/Accueil.vue'),
    meta:{
      title:'Accueil'
    }
  },
  {
    path: '/profil',
    name: 'Profil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue'),
    meta:{
      title:'Profil'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to, from, next) => {
  document.title = to.meta.title;
})

export default router
