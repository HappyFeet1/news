<template>
  <div id="devices">
    <headerBar>
      <div class="setup-header" slot="setup-header">
        <Icon type="ios-arrow-back" size="28" color="#000" class="back" @click.native="$router.go(-1)"></Icon>
        设置
      </div>
    </headerBar>

    <div class="item">
      <div class="setup_item">账号和绑定设置</div>
      <div class="setup_item">黑名单</div>
      <div class="setup_item">清除缓存</div>
      <div class="setup_item">字体大小</div>
      <div class="setup_item hasSwith">列表显示摘要
            <i-switch class="fr"></i-switch>
      </div>
    </div>
</div>

</template>

<script>
  import headerBar from './Header_bar.vue'
  export default {
      components:{
        headerBar
      }
  }

</script>

<style scoped lang="less">
  @import "../assets/css/border";
  #devices{
    .setup-header{
      background: #fff;
      font-size: 18px;
      color: #000;
      box-shadow: 0 0 3px #ccc;
      .borderBottom(1px, #ccc);
      .back {
        line-height: 45px;
        margin-left: 10px;
        float: left;
      }
    }
    .item{
      width: 100%;
      margin-top: 52px;
      position: relative;
      .borderTop(1px,#ccc);
      .setup_item {
        display: block;
        height: 40px;
        width: 100%;
        line-height: 40px;
        color: #000;
        position: relative;
        padding-left: 12px;
        font-weight: bold;
        font-size: 16px;
        .borderBottom(1px, #ccc);
        .toeditprofile {
          margin-right: 12px;
          margin-top: 8px;
        }

      }
      .hasSwith{
        span {
          display: inline-block;
          margin-top: 6px;
          margin-right: 6px;
          float: right;
        }
      }
    }
  }
</style>
