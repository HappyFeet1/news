<template>
  <div class="banner">
    <headerBar>
      <div class="detail_header" slot="home">
        共享App
      </div>
    </headerBar>
    <navHeader></navHeader>
    <!--轮播图 内容-->
    <Banner></Banner>
    <content_view></content_view>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Banner from './Banner.vue'
  import content_view  from './Content.vue'
  import navHeader from './Nav.vue'
  import headerBar from './Header_bar.vue'
  export default{
    components: {
      Banner,
      content_view,
      navHeader,
      headerBar
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/border";
  .banner {
    padding-top: 46px;
    .detail_header {
      background: #26a2ff;
      font-size: 18px;
      color: #fff;
      box-shadow: 0 0 3px #ccc;
      .borderBottom(1px, #ccc);
    }
  }
</style>
