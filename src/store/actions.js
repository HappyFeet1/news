export default {
  //我们的动作
  showHeader: ({commit})=>{
    commit('showHeader')
  },
  hideHeader:({commit})=>{
    commit('hideHeader')
  },
  showLoading:({commit})=>{
    commit('showLoading')
  },
  hideLoading:({commit})=>{
    commit('hideLoading')
  },
  //登录操作
  setUserInfo:({commit,state},res)=>{
    localStorage.setItem('userName',JSON.stringify(res));
    localStorage.setItem('logined',true);
    commit('getUserData',res);
    commit('logining',true)
  },
  changeIntroduce:({commit})=>{
    commit('changeIntroduce')
  }
}
