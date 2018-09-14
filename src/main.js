import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import App from './App.vue';
import Create from './components/Create.vue';
import ListBills from './components/ListBills.vue';
import Edit from './components/Edit.vue';
import Index from './components/Index.vue';
import CreateIssue from './components/CreateIssue.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ViewIssue from './components/ViewIssue.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'View',
    path: '/view',
    component: ViewIssue
  },
  {
    name: 'CreateIssue',
    path: '/createIssue',
    component: CreateIssue
  },
  {
    name: 'ListBills',
    path: '/ListBills',
    component: ListBills
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
  {
     path: '/register',
     name: 'Register',
     component: Register
   },
  {
     path: '/login',
     name: 'Login',
     component: Login
   }
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
