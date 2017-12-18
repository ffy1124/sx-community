import './static/css/reset.css';
import './static/css/common.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './src/router/config';
import App from './app.vue';
import { store } from './src/store/store';
import axios from './src/http/axios';
Vue.use(ElementUI);
new Vue({
    el:'#app',
    router,
    store,
    render:(creatElement) => {
        return creatElement(App);
    }
});
if(module.hot){
    module.hot.accept();
}