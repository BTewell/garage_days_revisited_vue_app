import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Logout from './views/Logout.vue';
import EventsNew from './views/EventsNew.vue';
import EventsShow from './views/EventsShow.vue';
import EventsEdit from './views/EventsEdit.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/events/:id/edit',
      name: 'events-edit',
      component: EventsEdit
    },
    {
      path: '/events/new',
      name: 'events-new',
      component: EventsNew
    },
    {
      path: '/events/:id',
      name: 'events-show',
      component: EventsShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
