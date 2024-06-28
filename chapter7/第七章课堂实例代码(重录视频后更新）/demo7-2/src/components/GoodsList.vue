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

export default {
  
  filters: {
    currency (value) {
      return '¥ ' + value
    }
  }
}
</script>

<style>
@import "~@/style/lib/shopping.css"
</style>
