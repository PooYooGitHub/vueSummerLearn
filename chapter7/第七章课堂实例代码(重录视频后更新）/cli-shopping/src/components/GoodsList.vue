<template>
  <div class="list">
    <div class="item" v-for="goods in goodslist" :key="goods.id">
      <div class="item-l">
        <img class="item-img" :src="goods.img">
      </div>
      <div class="item-r">
        <div class="item-title">{{ goods.name }}</div>
        <div class="item-price">{{ goods.price | currency }}</div>
        <div class="item-opt">
          <button >加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'

export default {
  computed: mapState({
    //将state中的商品列表数据作为goodslist计算属性
    goodslist: state => state.goods.goodslist
  }),
  //购物车模块中定义的insert()方法
  
  //将商品列表数据从API中读取出来，保存到state中
  created () {
        this.$store.dispatch('goods/getList')
  },
  filters: {
    currency (value) {
      return '¥ ' + value
    }
  }
}
</script>

<style>

@import "~@/style/lib/shopping.css";
</style>
