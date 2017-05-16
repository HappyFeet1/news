<template>
  <div id="column">
    <headerBar>
      <div class="detail_header" slot="home">
        <Icon type="ios-arrow-back" size="28" color="#fff" class="back" @click.native="$router.go(-1)"></Icon>
        App栏目

      </div>
    </headerBar>
    <div class="news_column">
      this is column
    </div>
  </div>
</template>
<script>
  import headerBar from './Header_bar.vue'
  export default {
    components: {
      headerBar
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/border";

  #column {
    padding-top: 46px;
    .detail_header {
      background: #26a2ff;
      font-size: 18px;
      color: #fff;
      box-shadow: 0 0 3px #ccc;
      .borderBottom(1px, #ccc);
      .back {
        line-height: 45px;
        margin-left: 10px;
        float: left;
      }
    }
  }
</style>
