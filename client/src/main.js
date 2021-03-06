import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import Vuetify from 'vuetify'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css'
import colors from 'vuetify/lib/util/colors'

import { store } from './services/store/store'


Vue.config.productionTip = true
// Vuetify setup
Vue.use(Vuetify, {
})

/*
theme: {
    primary: colors.grey.darken3,
    secondary: colors.blueGrey,
    accent: colors.blue
  }
*/

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000'
}))

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})