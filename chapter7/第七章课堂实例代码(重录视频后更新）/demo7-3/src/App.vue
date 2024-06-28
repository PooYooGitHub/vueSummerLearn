<template>
  <div id="app">
    <div class="bottom">
      <router-link to="/" tag="div">商品列表</router-link>
      <router-link to="/Shopcart" tag="div">购物车</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
@import "~@/style/lib/index.css";
</style>

