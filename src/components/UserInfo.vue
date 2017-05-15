<template>
  <div id="userInfo">
    <div class="loginBox">
      <h2 class="loginTitl">app news 知尽天下事</h2>
      <input class="admin loginInfo" placeholder="account" v-model="admin"></input>
      <input class="password loginInfo" placeholder="password" type="password" v-model="password"></input>
      <br>
      <Button class="submit" @click="login">登录</Button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        admin: '',
        password: ''
      }
    },
    methods:{
      login(){
        alert(1)
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/main.less";

  #userInfo {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d43d3d;
    .loginBox {
      top: 25%;
      position: absolute;
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
  }

</style>
