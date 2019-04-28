import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import User from './views/User.vue';
import UserEdit from './views/UserEdit.vue';
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
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user/:id/edit',
      name: 'user-edit',
      component: UserEdit
    },
  ]
});
