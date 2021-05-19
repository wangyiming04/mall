<template>
  <div class="tab-control">
      <div v-for="(item1 , index1) in titles" :key="index1"
       class="tab-control-item" :class="{active:index1 == currentIndex}" @click="itemClick(index1)">
          <span>{{item1}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type: Array,
            default(){
                return{

                }
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index1){
            this.currentIndex = index1;
            this.$emit('tabClick',index1)

        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tab-control-item {
        flex: 1;
    }
    .tab-control-item span{
        padding: 5px;
     }
    .active{
        color: rgb(241, 64, 147);
        
    }
    .active span {
        border-bottom: 3px  solid rgb(241, 64, 147);
    }
</style>