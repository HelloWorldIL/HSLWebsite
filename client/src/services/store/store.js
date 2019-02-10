import Vue from 'vue'
import Vuex from 'vuex'

const home = require('./modules/homeLayout')
const navigation = require('./modules/navigation')
const about = require('./modules/about')
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    home: home,
    navigation: navigation,
    about: about
  },
  state: {

  }
})