import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import store from './store';
import Home from './components/Pages/Home/Home';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import global_ from './components/Global'
import VueParticles from 'vue-particles' 
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use({ store });
Vue.use(VueParticles);
Vue.prototype.$axios = axios;
Vue.prototype.GLOBAL = global_;
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.http.options.headers = {
    'Content-Type': 'application/json;charset=utf-8'
}
const routes = [
    {
        path: '/',
        component: Home,
    }

]
const router = new VueRouter({
    routes,
});
new Vue({
    router,
    store,
    el: '#app',
    components: { App },
    template: '<App/>'
})


router.beforeEach((to, from, next) => {
   
})

export default router;



