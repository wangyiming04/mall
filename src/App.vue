<template>
  <div id="app">
     <tabbar></tabbar>
      <router-view/>
      
  </div>
</template>

<script>
import tabbar from "./components/common/tabbar"
export default {
  name: 'app',
  components: {
    tabbar,
  }
}
</script>

<style>

</style>
