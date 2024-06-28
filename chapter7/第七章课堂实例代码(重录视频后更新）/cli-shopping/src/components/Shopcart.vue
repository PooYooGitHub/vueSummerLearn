<template>
  <div class="shopping-cart">
    <!-- 头部 -->
    <div class="site-header">
      <div class="container">
        <div class="head-title">
          <h2>我的购物车</h2>
          <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>
        <div class="topbar-info">
          <span class="user">
            <a href="#" class="user-name">
              <span class="name">い时光｀爱恋°</span>
              <i class="fa fa-angle-down"></i>
            </a>
            <div class="user-menu-wrapper">
              <ul class="user-menu">
                <li>
                  <a href="/home/personal">个人中心</a>
                </li>
                <li>
                  <a href="/home/personal">评价晒单</a>
                </li>
                <li>
                  <a href="/home/personal">我的喜欢</a>
                </li>
                <li>
                  <a href="/home/personal">小米账户</a>
                </li>
                <li>
                  <a href="/home/logout">退出登录</a>
                </li>
              </ul>
            </div>
          </span>
          <span class="sep">
            <a href="javascript:;" class="link" target="_blank">我的订单</a>
          </span>
        </div>
      </div>
    </div>
    <!-- 购物车商品 lists表示购物车内商品列表，item表示商品对象 -->
    <template v-if="lists.length">
      <div class="page-main">
        <div class="container-main">
          <div class="item-wrap">
            <div class="item-list">
              <div class="list-head">
                <div class="item item-check">
                  <input
                    type="checkbox"
                    v-model="modelCheckedAll"
                    @change="checkAllchange()"
                  />
                  全选
                </div>
                <div class="item item-name">商品名称</div>
                <div class="item item-price">单价</div>
                <div class="item item-num">数量</div>
                <div class="item item-total">小计</div>
                <div class="item item-action">操作</div>
              </div>

              <div class="goods-body">
                <div
                  v-for="(item, index) in lists"
                  class="goods-list"
                  :key="index"
                >
                  <div class="goods-box clearfix">
                    <div class="col col-check">
                      <input
                        type="checkbox"
                        v-model="item.check"
                        @change="curChange()"
                      />
                    </div>
                    <div class="col col-img">
                      <a href="javascript:;">
                        <img
                          v-bind:src="item.img"
                          alt=""
                          width="80"
                          height="80"
                        />
                      </a>
                    </div>
                    <div class="col col-name">
                      <h3 class="name">
                        <a href="javascript:;">&nbsp;{{ item.name }}</a>
                      </h3>
                      <a href="javascript:;" style="padding: 0"
                        >【{{ item.desc }}】</a
                      >
                    </div>
                    <div class="col col-price">
                      <span>{{ item.price | currency }}</span
                      >元
                    </div>
                    <div class="col col-num">
                      <div class="change-goods-num">
                        <a href="javascript:;">
                          <i
                            class="fa fa-minus-square plus"
                            @click="sub(item)"
                          ></i>
                        </a>
                        <input
                          type="text"
                          class="goods-num"
                          v-bind:placeholder="item.count"
                        />
                        <a href="javascript:;">
                          <i
                            class="fa fa-plus-square reduce"
                            @click="add(item)"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div class="col col-total">
                      <span class="total">
                        {{ (item.count * item.price) | currency }}
                      </span>
                      元
                    </div>
                    <div class="col col-action">
                      <button @click="del(item.id)">删除</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cart-bar">
          <div class="section-left">
            <a href="javascript:;" class="back-shopping">继续购物</a>
            <span class="cart-total">
              共
              <i>{{ lists.length }}</i>
              件商品，已选择
              <i>{{ checkNumber }}</i>
              件
            </span>
          </div>
          <span class="total-price">
            合计
            <em>{{ total | currency }}</em>
            元
            <a href="javascript:;" class="btn-a">去结算</a>
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="item-empty">
        <h1 class="text-center">购物车为空</h1>
      </div>
    </template>
  </div>
</template>
<script>

</script>
<style>
@import "~@/style/lib/font_2137770_0u9iiirb2zrg/iconfont.css";
@import "~@/style/lib/font-awesome-4.7.0/css/font-awesome.css";
@import "~@/style/lib/reset.css";
@import "~@/style/lib/bacs.css";
@import "~@/style/lib/shopping.css";
</style>