import Vue from 'vue'
import App from './App.vue'
import VueResorce from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResorce);
new Vue({
  render: h => h(App),
}).$mount('#app')
