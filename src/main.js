import Vue from 'vue'
import  Vuex from 'vuex'
import App from './App.vue'
import VueResorce from 'vue-resource'
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueResorce);

import {store} from "@/store/store";

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
