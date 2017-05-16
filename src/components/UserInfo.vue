<template>
  <div id="userInfo">

    <div class="my-header" v-if="logined">
      <router-link to="/selfpage" class="my-info">
        <img src="../assets/logo.png" alt="" class="my-head-portrait">
        <span class="my-name">{{userName}}</span>
      </router-link>
      <div class="info-bar clearfix">
        <router-link to="/selfpage" class="info-bar-item">
          <p>1</p>动态
        </router-link>
        <router-link to="/care" class="info-bar-item">
          <p>{{vitality.follow}}</p>关注
        </router-link>
        <router-link to="/care" class="info-bar-item">
          <p>{{vitality.fans}}</p>粉丝
        </router-link>
        <router-link to="/care" class="info-bar-item">
          <p>{{vitality.visitor}}</p>我的资料
        </router-link>
      </div>
    </div>

    <div class="loginBox" v-show="!logined">
      <h2 class="loginTitl">app news 知尽天下事</h2>
      <input class="admin loginInfo" placeholder="account" v-model="admin"></input>
      <input class="password loginInfo" placeholder="password" type="password" v-model="password"></input>
      <br>
      <Button class="submit" @click="login" @keyup.enter="login">登录</Button>
    </div>

    <div class="tipItems">
      <i class="iconfont icon-xitongshezhi"></i>
      消息通知
    </div>
    <div class="tipItems">
      <i class="iconfont  icon-xitongshezhi"></i>
      系统设置
    </div>
    <div class="tipItems">
      <i class="iconfont icon-guanyu-copy"></i>
      关于
    </div>
    <div class="tipItems">
      <i class="iconfont icon-msnui-theme"></i>
      主题换肤
    </div>
    <div class="tipItems">
      <i class="iconfont icon-wdsy"></i>
      夜间模式
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    data(){
      return {
        admin: '',
        password: ''
      }
    },
    //获取数据
    computed: mapGetters([
      'logined',
      'userName',
      'vitality',
    ]),
    methods: {
      ...mapActions([
        'setUserInfo'
      ]),
      login(){
        if (this.admin === 'admin' && this.password === 'admin') {
          this.setUserInfo(this.admin);
          this.admin = '';
          this.password = '';
        } else if (this.admin === '') {
          alert('用户名不能为空')
        } else if (this.password === '') {
          alert('密码不能为空')
        } else {
          alert("用户名和密码不能为空")
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/main.less";
  @import "../assets/css/border";
  @import "../assets/css/iconfont.css";

  #userInfo {

    .loginBox {
      padding-top: 50%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: #d43d3d;
      text-align: center;
      color: #fff;
      .loginTitl {
        font-size: 20px;
        padding-top: 30px;
        margin-bottom: 5px;
      }
      .loginInfo {
        text-indent: 6px;
        border-radius: 5px;
        width: 70%;
        outline: none;
        font-size: 18px;
        height: 32px;
      }
      .submit {
        color: black;
        width: 28%;
        border-radius: 20px;
        height: 30px;
        outline: none;
        border: none;
        margin-top: 10px;
        background: #fff;
      }
    }
    .my-header {
      height: 200px;
      width: 100%;
      background: rgba(51, 51, 51, 1);
      .my-info {
        height: 150px;
        display: block;
        .my-head-portrait {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          margin-top: 40px;
          margin-left: 40px;
          float: left;
        }
        .my-name {
          font-size: 18px;
          font-weight: bold;
          color: #ffd;
          margin-top: 80px;
          margin-left: 40px;
          float: left;
        }
        .toMyself {
          margin-top: 1.6rem;
          margin-right: 0.5rem;
        }
      }
      .info-bar {
        height: 45px;
        display: flex;
        .info-bar-item {
          text-decoration: none;
          flex: 1;
          height: 1.2rem;
          box-sizing: border-box;
          border-left: 1px solid #666;
          text-align: center;
          font-size: 13px;
          color: #777;
          &:first-child {
            border: 0;
          }
          p {
            font-size: 16px;
            color: #ffd;
            margin-bottom: 6px;
          }
        }
      }
    }
    .tipItems {
      display: block;
      height: 40px;
      width: 100%;
      margin-top: 12px;
      color: #000;
      font-size: 16px;
      line-height: 40px;
      font-weight: bold;
      position: relative;
      padding-left: 12px;
      .verticalBorder(1px, #ccc);
    }
  }

</style>
