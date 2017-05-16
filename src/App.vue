<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <Nav_view v-show="head"></Nav_view>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Foot_view></Foot_view>


  </div>
</template>

<script>
  import Nav_view from './components/Nav.vue'
  import Foot_view from '@/components/Foot.vue'


  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    components: {
      Nav_view,
      Foot_view
    },
    computed: mapGetters([
      'head',
      'loading'
    ]),
    watch: {
      $route(to, from){
//          console.log(to,from)
        if (to.path == '/users' ||
            to.path == '/article/' + this.$route.params.id ||
            to.path == '/mydetail' ||
            to.path == '/devices' ||
            to.path == '/cache' ||
            to.path == '/follow' ||
            to.path == '/column') {
          this.$store.dispatch('hideHeader')
          //我们通知action
        } else {
          this.$store.dispatch('showHeader')
        }
      }
    },
    mounted(){
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-bottom: 46px;
  }
  [v-cloak] {
    display: none;
  }
</style>
