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
          <button @click="insert(goods)">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    //将state中的商品列表数据作为goodslist计算属性
    goodslist: state => state.goods.goodslist
  }),
  //购物车模块中定义的insert()方法
  methods: mapActions('shopcart', ['insert']),
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
.item {
  border-bottom: 1px dashed #ccc;
  padding: 0px;
}
.item::after {
  content: "";
  display: block;
  clear: both;
}
.item-l {
  float: left;
  font-size: 0;
}
.item-r {
  float: left;
  padding-left: 20px;
}
.item-img {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
.item-title {
  font-size: 14px;
  margin-top: 10px;
}
.item-price {
  margin-top: 10px;
  color: #f00;
  font-size: 15px;
}
.item-opt {
  margin-top: 10px;
}
.item-opt button {
  border: 0;
  background: coral;
  color: #fff;
  padding: 4px 5px;
  cursor: pointer;
}
</style>
