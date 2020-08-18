import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
