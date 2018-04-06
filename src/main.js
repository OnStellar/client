import Vue from 'vue';
import VueRouter from 'vue-router';
import 'jquery';
import 'popper.js';
import 'bootstrap';

import App from './App.vue'
const Login = () => import('@/routes/Login.vue');
const Profile = () => import('@/routes/Profile.vue');
const Register = () => import('@/routes/Register.vue');
const Created = () => import('@/routes/Created.vue');
const Trending = () => import('@/routes/Trending.vue');
const Post = () => import('@/routes/Post.vue');
const NotFound = () => import('@/routes/404.vue');

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Trending },
        { path: '/trending', component: Trending },
        { path: '/created', component: Created },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/@:user', component: Profile },
        { path: '/:category/@:user/:title', component: Post },
        { path: '*', component: NotFound }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
