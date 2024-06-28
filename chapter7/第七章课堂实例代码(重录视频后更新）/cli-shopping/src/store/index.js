import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import shopcart from './modules/shopcart'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goods,
    shopcart,
    users
  }
})
