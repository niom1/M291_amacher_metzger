import Vue from 'vue'

//Demos_01 - Module marks
//import App from './App-01.vue'
//import store from './store/01_marks'

//Demos_02 - SWAP API (external API)
// import App from './App-02.vue'
// import store from './store/02_swapi'

//Demos_03 - Mini webshop (only read products without storing checkout)
 import App from './App-03.vue'
 import store from './store/03_webshop-1'

//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
