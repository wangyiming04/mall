<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="btn1">首页</van-tabbar-item>
    <van-tabbar-item icon="search" @click="btn2">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" @click="btn3">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" @click="btn4">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
    name:"tabbar",
    components:{
        Tabbar,
        TabbarItem
    },
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    btn1 () {
      this.$router.push('./views/Home')
    },
    btn2 () {
      this.$router.push('./views/classification')
    },
    btn3 () {
      this.$router.push('./views/cart')
    },
    btn4 () {
      this.$router.push('./views/mine')
    },
  }
};
</script>

<style>
</style>