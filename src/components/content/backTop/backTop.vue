<template>
    <div class="back-top" @click="backClick">
        <img src="../../../../public/static/backTop.png" alt="">
    </div>
</template>

<script>
export default {
    name:"BackTop",
    methods:{
        backClick(){
            console.log("回")
        }
    }
}
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 8px;
        bottom: 55px;
    }
    .back-top img {
        width: 43px;
        height: 43px;
    }

</style>