<template>
  <div id="mydetail">
    <headerBar>
      <div class="detail_header" slot="editprofile-header">
        <Icon type="ios-arrow-back" size="28" color="#000" class="back" @click.native="$router.go(-1)"></Icon>
        编辑资料



      </div>
    </headerBar>

    <div class="detail_header_1">
      <div class="container">
        <div class="detail_header_item">
          头像



          <Icon type="ios-arrow-right" size="26" color="#000" class="toEdit"></Icon>
          <img src="../assets/logo.png" alt="" class="pic">
          <input type="file" class="file">

        </div>
        <!--用户名   昵称   性别  生日  地区   个人主页背景-->

        <div class="detail_header_item">
          用户名


          <Icon type="ios-arrow-right" size="26" color="#ccc" class="toEdit sec"></Icon>
          <span class="username" v-model="userName">{{userName}}</span>
          <div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import headerBar from './Header_bar.vue'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    components: {
      headerBar
    },
    computed: mapGetters([
      'userName',
      'introduce'
    ]),
    methods: {
      introduce(){

      }
    }
  }

</script>

<style scoped lang="less">
  @import "../assets/css/border";

  #mydetail {
    padding-top: 46px;
    .detail_header {
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
    .detail_header_1 {
      margin-top: 10px;
      .container {
        width: 90%;
        margin: 0 auto;
        .detail_header_item {
          position: relative;
          display: block;
          height: 50px;
          width: 100%;
          line-height: 50px;
          color: #000;
          padding-left: 0.3rem;
          font-weight: bold;
          font-size: 16px;
          .borderBottom(1px, #ccc);
          .toEdit {
            margin-top: 6px;
            float: right;
          }
          .pic {
            float: right;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 23px;
            margin-top: 10px;
          }
          .file {
            position: absolute;
            top: -5px;
            display: inline-block;
            opacity: 0;
          }
          .username {
            float: right;
            margin-right: 20px;
            font-size: 14px;
            font-weight: normal;
          }
          .sec {
            margin-top: 10px;
          }
          .introduce {
            width: 100%;
            overflow: hidden;
            outline: none;
          }

        }
      }
    }
  }
</style>
