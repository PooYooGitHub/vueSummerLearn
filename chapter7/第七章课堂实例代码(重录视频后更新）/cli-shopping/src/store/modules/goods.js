import shop from '../../api/shop'

const state = {
  goodslist: []
}

const getters = {}

// 获取商品列表数据
const actions = {
  getList ({ commit }) {
    shop.getGoodsList(data => {
      commit('setList', data)
    })
  }
}
// 将商品列表保存到state中
const mutations = {
  setList (state, data) {
    state.goodslist = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
