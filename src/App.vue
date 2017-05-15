<template>
  <div id="app">
    <Nav_view></Nav_view>
    <router-view></router-view>
    <Foot_view></Foot_view>


    </div>
</template>

<script>
  import Nav_view from './components/Nav_view.vue'
  import Foot_view from '@/components/Foot_view.vue'

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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
