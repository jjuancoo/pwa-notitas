import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'


import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
