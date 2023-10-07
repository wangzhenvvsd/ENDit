<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'


export default {
  name: 'App',
  components: {
    TabBar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
