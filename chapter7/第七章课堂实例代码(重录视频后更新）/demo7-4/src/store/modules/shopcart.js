const state = {
  items: [],//购物车内商品列表
  checkAll: false,//全选框
}

const getters = {
  
}

const actions = {
  insert(context, item) {
    context.commit('insert', item)
  },
  del(context, id) {
    context.commit('del', id)
  }
}

const mutations = {
  //将商品加入到购物车
  insert(state, item) {
    const v = state.items.find(v => v.id === item.id)
    //查找是否已经加购
    if (v) {
      ++v.count//已经加购则仅修改数量
    } else {
      //末加购则需要添加一个新的数组元素
      state.items.push({
        id: item.id,
        img: item.img,
        name: item.name,
        desc: item.desc,
        price: item.price,
        count: 1,
        check: true,
      })
    }
  },
  //删除当前的商品
  del(state, id) {
    //遍历购物车列表，找到选中的行
    state.items.forEach((item, index, arr) => {
      if (item.id === id) {
        arr.splice(index, 1)
      }
    })
  },  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
