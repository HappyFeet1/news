<template>
  <div class="banner">
    <!--轮播图 内容-->
    <Banner></Banner>
    <content_view></content_view>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Banner from './Banner.vue'
  import content_view  from './Content.vue'
  export default{
    components: {
      Banner,
      content_view
    }
  }
</script>
<style scoped>
.banner{
  padding-top: 46px;
}
</style>
