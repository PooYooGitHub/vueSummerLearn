<template>
    <div id="nav">
        <router-link :to="{name:'home'}">首页</router-link> |
        <router-link :to="{name:'projectlist'}">项目列表</router-link> |
        <router-link :to="{name:'projectlist2',query: { title: '项目列表展示' }}">项目列表2</router-link> |
        <router-link to="/about">未定义路由的页面</router-link>
    </div>
</template>