<template>
  <div class="van-swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in $store.state.imgList" :key="index">
        <img v-lazy="image" />
        <!-- {{index}} -->

      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";


export default {
  name: "Swipe",
  components: {
    Swipe,
    SwipeItem,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.van-swipe {
  width: 100%;
  height: 300px;
}
.van-swipe img{
  height: 300px;
  width: 100%;
}
</style>