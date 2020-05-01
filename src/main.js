import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router/index.js'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'

Vue.config.productionTip = false

Vue.prototype.$layer = layer(Vue);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
