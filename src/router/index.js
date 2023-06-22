import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import DetailView from '../views/DetailView.vue'
import Welcome from '../views/Welcome.vue'
import Genre from '../views/Genre.vue'
import Edit from '../views/Edit.vue'
import {db,timestamp,storage,auth} from '../firebase/config'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(!user) {
        next();
      } else {
        next({name:"create"})
      }
    }
  },
  {
    path: '/view',
    name: 'view',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DetailView,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
    // beforeEnter(to,from,next){
    //   let user=auth.currentUser;
    //   if(user) {
    //     next();
    //   } else {
    //     next("/")
    //   }
    // }
  },
  {
    path: '/genre/:genre',
    name: 'genre',
    component: Genre,
    props: true
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
