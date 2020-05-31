import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/Career.vue'),

  },
  {
    path: '/career/personal',
    name: 'PersonalCareer',
    component: () => import('../views/CareerPersonal.vue'),

  },
  {
    path: '/career/restaurant',
    name: 'RestaurantCareer',
    component: () => import('../views/CareerRestaurant.vue'),

  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),

  },

  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),

  },

  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../views/Explore.vue'),
  },

  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import('../views/Resaurant.vue'),
  },

  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),

  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
