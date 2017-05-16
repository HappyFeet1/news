<template>
  <!--底部导航-->
  <div class="foot_nav">

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <router-link to="/home">
          <i class="iconfont icon-shouyeshouye"></i>
          <p>首页</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">

        <router-link to="/cache">
          <i class="iconfont icon-huijijiayuanshoucangicon01"></i>
          <p>收藏</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">

        <router-link to="/users">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        selected: '首页',
        fixed: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/iconfont.css";
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #26a2ff;
  }
  .foot_nav{
    i{
      width: 24px;
      height: 24px;
      display: inline-block;
      font-size: 24px;
      margin-bottom: 6px;
    }
  }
</style>
