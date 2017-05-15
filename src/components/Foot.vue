<template>
  <!--底部导航-->
  <div class="foot_nav">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <router-link to="/home">
          <img src="../assets/images/home-cur.png">
          <p>首页</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">

        <router-link to="/cache">
          <img src="../assets/images/toplist.png">
          <p>收藏</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">

        <router-link to="/user-info">
          <img src="../assets/images/record.png">
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
    img{
      width: 24px;
      height: 24px;
    }
  }
</style>
