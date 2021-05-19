<template>
  <div class="Recommend">
      <div v-for="(item,index) in $store.state.RecommendViewimg" :key="index" class="Recommend-item">
            {{item.RecommendViewimg}}
            <img v-lazy="item" />
      </div>
  </div>
</template>

<script>
export default {
    name:"Recommend",
    props:{
        recommends: {
            type:Array,
            default(){

            }
        }
    },
}
</script>

<style scoped >
    .Recommend{
        display: flex;
        width: 100%;
        height: 100px;
        text-align: center;

        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;

    }
    .Recommend-item{
        flex: 1
    }
    .Recommend-item img{
        width: 90px;
        height: 80px;
    }
</style>