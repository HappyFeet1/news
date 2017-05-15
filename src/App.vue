<template>
  <div id="app">
    <Nav_view></Nav_view>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Foot_view></Foot_view>


  </div>
</template>

<script>
  import Nav_view from './components/Nav.vue'
  import Foot_view from '@/components/Foot.vue'

  export default {
    name: 'app',
    components: {
      Nav_view,
      Foot_view
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 46px;
    margin-bottom: 46px;
  }
</style>
